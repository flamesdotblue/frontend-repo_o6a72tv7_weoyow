import Spline from '@splinetool/react-spline';
import { Github, Shield, Fingerprint, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#070B12]">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block the Spline */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/30 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <Fingerprint className="h-5 w-5 text-cyan-400" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Vanish Auth</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#snippets" className="text-sm text-white/70 hover:text-white">Docs</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero copy */}
        <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            Built on WebAuthn & Passkeys
          </div>
          <h1 className="mt-6 max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-white/70">
            Passwordless authentication SDK with biometric logins in a single line of code. Delight users, reduce fraud, and ship faster.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="#snippets" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-[#070B12] shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              <Zap className="h-4 w-4" />
              Get started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              See how it works
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-3 text-xs text-white/60 sm:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">No passwords stored</div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">Device biometrics</div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">End-to-end encryption</div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">FIDO2 / WebAuthn</div>
          </div>
        </div>
      </div>
    </section>
  );
}
