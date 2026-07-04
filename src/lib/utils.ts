import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractYouTubeChannelIdentifier(url: string): {
  type: "id" | "handle" | "custom" | "user";
  value: string;
} | null {
  const patterns: Array<{ regex: RegExp; type: "id" | "handle" | "custom" | "user" }> = [
    { regex: /youtube\.com\/channel\/([^/?&]+)/, type: "id" },
    { regex: /youtube\.com\/@([^/?&]+)/, type: "handle" },
    { regex: /youtube\.com\/c\/([^/?&]+)/, type: "custom" },
    { regex: /youtube\.com\/user\/([^/?&]+)/, type: "user" },
    { regex: /youtu\.be\/([^/?&]+)/, type: "handle" },
    { regex: /(?:www\.)?youtube\.com\/([^/?&]+)/, type: "handle" },
  ];

  for (const { regex, type } of patterns) {
    const match = url.match(regex);
    if (match) {
      return { type, value: match[1] };
    }
  }

  return null;
}

export function extractYouTubeChannelId(url: string): string | null {
  const result = extractYouTubeChannelIdentifier(url);
  if (!result) return null;
  if (result.type === "id") return result.value;
  return result.value;
}

export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/embed\/([^/?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
