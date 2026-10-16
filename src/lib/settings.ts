import { getSupabaseAdmin } from "@/lib/supabase/client";

export const MODEL_SETTING_KEY = "ai_model";
export const DEFAULT_MODEL = "zen:big-pickle";

const CACHE_TTL_MS = 30_000;
let cached: { value: string; at: number } | null = null;

export async function getAiModel(): Promise<string> {
  const now = Date.now();
  if (cached && now - cached.at < CACHE_TTL_MS) {
    return cached.value;
  }
  try {
    const { data } = await getSupabaseAdmin()
      .from("app_settings")
      .select("value")
      .eq("key", MODEL_SETTING_KEY)
      .maybeSingle();
    const value = data?.value || DEFAULT_MODEL;
    cached = { value, at: now };
    return value;
  } catch {
    return cached?.value || DEFAULT_MODEL;
  }
}

export async function setAiModel(value: string): Promise<boolean> {
  const { error } = await getSupabaseAdmin()
    .from("app_settings")
    .upsert(
      { key: MODEL_SETTING_KEY, value, updated_at: new Date().toISOString() },
      { onConflict: "key" }
    );
  if (!error) cached = { value, at: Date.now() };
  return !error;
}
