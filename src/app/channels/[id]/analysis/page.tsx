import { getSupabaseAdmin } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { AnalysisProgress } from "@/components/AnalysisProgress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AnalysisPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: channel } = await getSupabaseAdmin()
    .from("channels")
    .select("id, name, thumbnail_url, user_id")
    .eq("id", id)
    .single();

  if (!channel) notFound();

  if (user && channel.user_id && channel.user_id !== user.id) notFound();

  return (
    <div className="space-y-6 max-w-lg mx-auto animate-in">
      <div className="flex items-center gap-4">
        <Link href={`/channels/${id}`} className="btn-icon">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-display font-bold tracking-tight">Analysis Progress</h1>
          <p className="text-sm text-muted-foreground">{channel.name}</p>
        </div>
      </div>
      <AnalysisProgress channelId={id} />
    </div>
  );
}
