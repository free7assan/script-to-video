import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getAiModel, setAiModel } from "@/lib/settings";

export const PRESET_MODELS = [
  { value: "zen:big-pickle", label: "OpenCode Zen — Big Pickle" },
  { value: "gemini:gemini-2.0-flash", label: "Google Gemini 2.0 Flash" },
  { value: "openrouter:openrouter/auto", label: "OpenRouter Auto" },
  { value: "openrouter:google/gemma-4-31b-it:free", label: "OpenRouter — Gemma 4 31B (free)" },
  { value: "openrouter:meta-llama/llama-3.3-70b-instruct:free", label: "OpenRouter — Llama 3.3 70B (free)" },
  { value: "openrouter:qwen/qwen3-coder:free", label: "OpenRouter — Qwen 3 Coder (free)" },
  { value: "local:qwen3.5:4b", label: "Local — Qwen 3.5 4B (Ollama)" },
] as const;

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const current = await getAiModel();

  return NextResponse.json({
    current,
    presets: PRESET_MODELS,
  });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body: { model?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { model } = body;
  if (!model || typeof model !== "string" || model.length > 200) {
    return NextResponse.json({ error: "A valid model string is required" }, { status: 400 });
  }

  const saved = await setAiModel(model);
  if (!saved) {
    return NextResponse.json({ error: "Failed to save model setting" }, { status: 500 });
  }

  return NextResponse.json({ current: model });
}
