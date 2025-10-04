import { Github, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#060A11]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Vanish Auth</p>
            <p className="text-xs text-white/60">Auth that disappears.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="mailto:hello@vanish.dev" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
          <span className="text-xs">© {new Date().getFullYear()} Vanish Labs</span>
        </div>
      </div>
    </footer>
  );
}
