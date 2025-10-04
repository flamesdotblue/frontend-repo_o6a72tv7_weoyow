import { Shield, Fingerprint, Zap, KeyRound, Lock, Cpu } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometrics-first',
    desc: 'Native passkeys on iOS, Android, and desktop with seamless device prompts.'
  },
  {
    icon: Shield,
    title: 'Phishing-resistant',
    desc: 'WebAuthn-backed flows eliminate passwords and credential stuffing attacks.'
  },
  {
    icon: KeyRound,
    title: 'One line SDK',
    desc: 'Drop-in client that handles enrollment, login, and key lifecycle.'
  },
  {
    icon: Lock,
    title: 'Zero secret storage',
    desc: 'Nothing to steal. Keys never leave the device; no password database.'
  },
  {
    icon: Cpu,
    title: 'Edge-ready',
    desc: 'Verify tokens at the edge with micro-latency for global users.'
  },
  {
    icon: Zap,
    title: 'Dev velocity',
    desc: 'Start authenticating in minutes with clear docs and examples.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Secure by design, simple by default</h2>
        <p className="mt-3 text-white/70">Everything you need to ship production-grade, passwordless auth without the complexity.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-500/30 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/30">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-base font-medium text-white">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 text-center text-xs text-white/60 sm:grid-cols-4">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">FIDO2 / WebAuthn</div>
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">Passkeys</div>
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">SOC 2 Ready</div>
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">GDPR Aligned</div>
      </div>
    </section>
  );
}
