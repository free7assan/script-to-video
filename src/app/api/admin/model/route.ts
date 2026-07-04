import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const MODEL_COOKIE = "vs_ai_model";

const PRESET_MODELS = [
  { value: "zen:big-pickle", label: "OpenCode Zen — Big Pickle" },
  { value: "gemini:gemini-2.0-flash", label: "Google Gemini 2.0 Flash" },
  { value: "openrouter:openrouter/auto", label: "OpenRouter Auto" },
  { value: "openrouter:google/gemma-4-31b-it:free", label: "OpenRouter — Gemma 4 31B (free)" },
  { value: "openrouter:meta-llama/llama-3.3-70b-instruct:free", label: "OpenRouter — Llama 3.3 70B (free)" },
  { value: "openrouter:qwen/qwen3-coder:free", label: "OpenRouter — Qwen 3 Coder (free)" },
  { value: "local:qwen3.5:4b", label: "Local — Qwen 3.5 4B (Ollama)" },
] as const;

export async function GET() {
  const cookieStore = await cookies();
  const current = cookieStore.get(MODEL_COOKIE)?.value || "zen:big-pickle";

  return NextResponse.json({
    current,
    presets: PRESET_MODELS,
  });
}

export async function POST(request: NextRequest) {
  const { model } = await request.json();

  if (!model || typeof model !== "string") {
    return NextResponse.json({ error: "model is required" }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set(MODEL_COOKIE, model, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: "lax",
  });

  return NextResponse.json({ current: model });
}
