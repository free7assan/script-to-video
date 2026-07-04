import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getUsage } from "@/lib/subscription";

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const usage = user ? await getUsage(user.id).catch(() => null) : null;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in py-8">
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors w-fit">
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Dashboard
      </Link>

      <div className="text-center">
        <h1 className="text-2xl font-display font-semibold">Pricing</h1>
        <p className="text-sm text-muted-foreground mt-1">Choose the plan that fits your workflow</p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-xl border border-orange/30 bg-card/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-lg">Free</h3>
              <p className="text-sm text-muted-foreground">For getting started</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-display font-bold">$0</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              5 channels analyzed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              5 videos analyzed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              5 generated scripts
            </li>
          </ul>
          {usage && (
            <div className="mt-4 text-xs text-muted-foreground/60">
              Current usage: {usage.channels}/{usage.channelsLimit} channels &middot; {usage.videos}/{usage.videosLimit} videos &middot; {usage.scripts}/{usage.scriptsLimit} scripts
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border/50 bg-card/50 p-6 opacity-60">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-lg">Pro</h3>
              <p className="text-sm text-muted-foreground">Coming soon</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-display font-bold">—</span>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              Unlimited analyses
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              Unlimited scripts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              Priority support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
