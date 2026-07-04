import { fetchTranscript } from "youtube-transcript";
import { delay } from "../utils";

export async function getVideoTranscript(
  videoId: string,
  retries = 3
): Promise<{ transcript: string; language: string } | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const snippets = await fetchTranscript(videoId, {
        lang: "en",
      });
      if (!snippets || snippets.length === 0) return null;

      const text = snippets.map((s: any) => s.text).join(" ");
      return { transcript: text, language: "en" };
    } catch (err: any) {
      if (attempt < retries - 1) {
        await delay(1000 * (attempt + 1));
        continue;
      }
      return null;
    }
  }
  return null;
}
