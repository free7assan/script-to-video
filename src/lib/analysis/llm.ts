import OpenAI from "openai";

const MODEL_COOKIE = "vs_ai_model";

async function getConfiguredModel(): Promise<string | undefined> {
  try {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    return cookieStore.get(MODEL_COOKIE)?.value;
  } catch {
    // Outside request context (build, test, etc.)
    return undefined;
  }
}

// ─── OpenCode Zen (Big Pickle) ──────────────────────────────────────────

const ZEN_BASE_URL = "https://opencode.ai/zen/v1";

function getZenClient(): OpenAI | null {
  const apiKey = process.env.OPENCODE_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({
    baseURL: ZEN_BASE_URL,
    apiKey,
    maxRetries: 2,
  });
}

async function callZen(
  systemPrompt: string,
  userPrompt: string,
  model?: string,
  maxTokens?: number
): Promise<unknown | null> {
  const client = getZenClient();
  if (!client) return null;

  try {
    const response = await client.chat.completions.create({
      model: model || "big-pickle",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
      max_tokens: maxTokens || 4096,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0]?.message?.content;
    if (!content) return null;

    try {
      return JSON.parse(content);
    } catch {
      return extractJSON(content);
    }
  } catch (error: any) {
    console.warn(`[Zen] ${model || "big-pickle"} failed: ${error.message || error}`);
    return null;
  }
}

// ─── Gemini ──────────────────────────────────────────────────────────────

import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI: GoogleGenerativeAI | null = null;
function getGemini() {
  if (!genAI) {
    const key = process.env.GEMINI_API_KEY || process.env.YOUTUBE_API_KEY;
    if (key) genAI = new GoogleGenerativeAI(key);
  }
  return genAI;
}

async function callGemini(systemPrompt: string, userPrompt: string, model?: string) {
  const client = getGemini();
  if (!client) return null;

  try {
    const geminiModel = client.getGenerativeModel({
      model: model || "gemini-2.0-flash",
      systemInstruction: systemPrompt,
      generationConfig: {
        temperature: 0.3,
        responseMimeType: "application/json",
      },
    });

    const result = await geminiModel.generateContent(userPrompt);
    const text = result.response.text();
    if (!text) return null;

    try {
      return JSON.parse(text);
    } catch {
      return extractJSON(text);
    }
  } catch (error: any) {
    console.warn(`[Gemini] ${model || "gemini-2.0-flash"} failed: ${error.message || error}`);
    return null;
  }
}

// ─── OpenRouter ──────────────────────────────────────────────────────────

const FALLBACK_MODELS = [
  "openrouter/auto",
  "google/gemma-4-31b-it:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "moonshotai/kimi-k2.6:free",
  "qwen/qwen3-coder:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
];

const openrouter = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
    "X-Title": "Videos Scripter",
  },
  maxRetries: 0,
});

async function callOpenRouter(systemPrompt: string, userPrompt: string, singleModel?: string) {
  const models = singleModel ? [singleModel] : FALLBACK_MODELS;

  for (const currentModel of models) {
    try {
      const response = await openrouter.chat.completions.create({
        model: currentModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        ...(currentModel.includes(":free")
          ? {}
          : { response_format: { type: "json_object" } }),
      });

      const content = response.choices[0]?.message?.content;
      if (!content) continue;

      try {
        return JSON.parse(content);
      } catch {
        return extractJSON(content);
      }
    } catch (error: any) {
      if (isRetryableError(error)) {
        const retryAfter = parseRetryAfter(error);
        if (retryAfter && retryAfter > 0 && retryAfter <= 3600) {
          console.warn(`[LLM] ${currentModel} rate limited. Waiting ${retryAfter}s...`);
          await sleep(retryAfter * 1000);
          try {
            const response = await openrouter.chat.completions.create({
              model: currentModel,
              messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
              ],
              temperature: 0.3,
            });
            const content = response.choices[0]?.message?.content;
            if (content) {
              try {
                return JSON.parse(content);
              } catch {
                return extractJSON(content);
              }
            }
          } catch {}
        }
        console.warn(`[LLM] ${currentModel}: unavailable.`);
        continue;
      }
      console.error(`[LLM] ${currentModel}: ${error?.message || error}`);
    }
  }
  return null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function extractJSON(text: string): unknown {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) return JSON.parse(jsonMatch[0]);
  const arrayMatch = text.match(/\[[\s\S]*\]/);
  if (arrayMatch) return JSON.parse(arrayMatch[0]);
  throw new Error("No JSON found in response");
}

function parseRetryAfter(error: any): number | null {
  try {
    const metadata = error?.error?.metadata || error?.metadata;
    if (metadata?.retry_after_seconds) return metadata.retry_after_seconds;
    if (metadata?.retry_after_seconds_raw) return metadata.retry_after_seconds_raw;
    const headers = metadata?.headers || {};
    if (headers["X-RateLimit-Reset"]) {
      const resetMs = parseInt(headers["X-RateLimit-Reset"]);
      return Math.max(1, Math.ceil((resetMs - Date.now()) / 1000));
    }
    if (headers["retry-after"]) return parseInt(headers["retry-after"]);
  } catch {}
  return null;
}

function isRetryableError(error: any): boolean {
  if (!error) return false;
  const msg = (error.message || "").toLowerCase();
  const status = error.status || error.error?.code || 0;
  return (
    status === 402 ||
    status === 429 ||
    status === 503 ||
    msg.includes("insufficient") ||
    msg.includes("credit") ||
    msg.includes("quota") ||
    msg.includes("rate limit") ||
    msg.includes("exceeded") ||
    msg.includes("payment") ||
    msg.includes("billing") ||
    msg.includes("temporarily") ||
    msg.includes("provider returned error")
  );
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Local (Ollama) ───────────────────────────────────────────────────────

const LOCAL_BASE_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434/v1";

function getLocalClient(): OpenAI {
  return new OpenAI({
    baseURL: LOCAL_BASE_URL,
    apiKey: "ollama",
    maxRetries: 1,
  });
}

async function callLocal(
  systemPrompt: string,
  userPrompt: string,
  model: string
): Promise<unknown | null> {
  try {
    const client = getLocalClient();
    const response = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error("Empty response from local model");

    try {
      return JSON.parse(content);
    } catch {
      return extractJSON(content);
    }
  } catch (error: any) {
    const msg = error?.message || String(error);
    if (msg.includes("ECONNREFUSED") || msg.includes("fetch failed")) {
      throw new Error(
        `Cannot reach local API at ${LOCAL_BASE_URL}. Make sure your local model server is running.`
      );
    }
    if (msg.includes("model") && (msg.includes("not found") || msg.includes("404"))) {
      throw new Error(
        `Model "${model}" not found. Make sure it's loaded in your local model server.`
      );
    }
    // Surface all other errors directly
    throw new Error(`Local model "${model}": ${msg}`);
  }
}

// ─── Public API ──────────────────────────────────────────────────────────

export async function callLLM(
  systemPrompt: string,
  userPrompt: string,
  model?: string,
  maxTokens?: number
): Promise<unknown> {
  // If no explicit model, try reading from cookie
  const activeModel = model || await getConfiguredModel();

  if (activeModel) {
    const [provider, ...rest] = activeModel.split(":");
    const modelName = rest.join(":");

    switch (provider) {
      case "zen": {
        const result = await callZen(systemPrompt, userPrompt, modelName || undefined, maxTokens);
        if (result !== null) return result;
        throw new Error(`Zen model "${modelName}" failed`);
      }
      case "gemini": {
        const result = await callGemini(systemPrompt, userPrompt, modelName || undefined);
        if (result !== null) return result;
        throw new Error(`Gemini model "${modelName}" failed`);
      }
      case "openrouter": {
        const result = await callOpenRouter(systemPrompt, userPrompt, modelName || undefined);
        if (result !== null) return result;
        throw new Error(`OpenRouter model "${modelName}" failed`);
      }
      case "local": {
        if (!modelName) throw new Error("Local model name is required (e.g. local:llama-3.2-3b-instruct)");
        const result = await callLocal(systemPrompt, userPrompt, modelName);
        if (result !== null) return result;
        throw new Error(`Local model "${modelName}" failed`);
      }
      default:
        throw new Error(`Unknown provider "${provider}". Use zen:, gemini:, openrouter:, or local:`);
    }
  }

  // Default fallback chain
  const zenResult = await callZen(systemPrompt, userPrompt, undefined, maxTokens);
  if (zenResult !== null) return zenResult;

  const geminiResult = await callGemini(systemPrompt, userPrompt);
  if (geminiResult !== null) return geminiResult;

  const openRouterResult = await callOpenRouter(systemPrompt, userPrompt);
  if (openRouterResult !== null) return openRouterResult;

  throw new Error("All LLM providers failed");
}
