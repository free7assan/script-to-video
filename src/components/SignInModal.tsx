"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogIn, UserPlus, Eye, EyeOff, X, Mail } from "lucide-react";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  defaultMode?: "login" | "signup";
}

export function SignInModal({ open, onClose, defaultMode = "login" }: SignInModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);

  useEffect(() => {
    if (open) setMode(defaultMode);
  }, [open, defaultMode]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const [resendError, setResendError] = useState("");
  const router = useRouter();

  if (!open) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { error: msg } = await res.json();
        throw new Error(msg || "Something went wrong");
      }

      if (mode === "signup") {
        setSuccess(true);
        return;
      }

      onClose();
      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setResendError("");
    setResent(false);
    try {
      const res = await fetch("/api/auth/resend-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const { error: msg } = await res.json();
        throw new Error(msg || "Failed to resend");
      }
      setResent(true);
    } catch (err: any) {
      setResendError(err.message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-2xl border border-border/40 bg-background/90 backdrop-blur-xl shadow-2xl p-6 animate-scale-reveal">
        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mx-auto">
              <UserPlus className="w-5 h-5 text-orange" />
            </div>
            <h2 className="font-display font-semibold text-lg">Check your email</h2>
            <p className="text-sm text-muted-foreground">
              We&apos;ve sent a confirmation link to <strong className="text-foreground">{email}</strong>.
            </p>
            {resent && (
              <p className="text-sm text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                Confirmation email resent!
              </p>
            )}
            {resendError && (
              <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {resendError}
              </p>
            )}
            <button
              onClick={handleResend}
              disabled={resending}
              className="btn-secondary w-full h-11 inline-flex justify-center glow-primary"
            >
              {resending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
              {resending ? "Sending..." : "Resend confirmation email"}
            </button>
            <button
              onClick={() => { setSuccess(false); setMode("login"); }}
              className="text-sm text-orange hover:underline"
            >
              Back to sign in
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-base">
                {mode === "login" ? "Sign in" : "Create account"}
              </h2>
              <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-base"
                  required
                  autoFocus
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === "signup" ? "Min. 6 characters" : "••••••••"}
                    className="input-base pr-10"
                    minLength={mode === "signup" ? 6 : undefined}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-secondary w-full h-11 glow-primary"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading
                  ? mode === "login" ? "Signing in..." : "Creating account..."
                  : mode === "login" ? "Sign in" : "Create account"
                }
              </button>
            </form>

            <div className="flex items-center gap-3 mt-4">
              <span className="flex-1 h-px bg-border/20" />
              <button
                onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                {mode === "login" ? "No account? Sign up" : "Have an account? Sign in"}
              </button>
              <span className="flex-1 h-px bg-border/20" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
