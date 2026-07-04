import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { VideoAnalyzer } from "@/components/VideoAnalyzer";

export default function VideoAnalyzePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in">
      <Link href="/dashboard" className="btn-ghost text-sm w-fit">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
      <VideoAnalyzer />
    </div>
  );
}
