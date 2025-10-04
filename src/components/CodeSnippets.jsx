import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

function Snippet({ language = "js", code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg border border-white/10 bg-[#0A0F18] p-4 text-sm text-white/80">
        <code className="whitespace-pre">{code}</code>
      </pre>
      <button onClick={onCopy} className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white hover:bg-white/10">
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <div className="mt-2 text-xs text-white/50">{language.toUpperCase()}</div>
    </div>
  );
}

export default function CodeSnippets() {
  const snippetJS = `import { auth } from '@vanish/sdk'

await auth.login()
// That's it — biometrics prompt, token returned, user onboarded.`;

  const snippetReact = `import { useEffect } from 'react'
import { auth } from '@vanish/sdk'

export default function SignIn() {
  useEffect(() => { auth.login() }, [])
  return <button onClick={() => auth.login()}>Sign in</button>
}`;

  const snippetNode = `import express from 'express'
import { verify } from '@vanish/sdk/server'

app.post('/verify', async (req, res) => {
  const token = req.headers.authorization
  const session = await verify(token)
  res.json(session)
})`;

  return (
    <section id="snippets" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">One line. Real security.</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Drop-in biometric login</h2>
      <p className="mt-2 max-w-2xl text-sm text-white/70">Embed passkeys in minutes. Works across devices and browsers with graceful fallbacks.</p>

      <div className="mt-8">
        <Tabs defaultValue="js">
          <TabsList className="mb-3 inline-flex gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
            <TabsTrigger value="js" className="rounded-md px-3 py-1.5 text-sm text-white data-[state=active]:bg-cyan-500 data-[state=active]:text-[#070B12]">JavaScript</TabsTrigger>
            <TabsTrigger value="react" className="rounded-md px-3 py-1.5 text-sm text-white data-[state=active]:bg-cyan-500 data-[state=active]:text-[#070B12]">React</TabsTrigger>
            <TabsTrigger value="node" className="rounded-md px-3 py-1.5 text-sm text-white data-[state=active]:bg-cyan-500 data-[state=active]:text-[#070B12]">Node</TabsTrigger>
          </TabsList>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
            <TabsContent value="js"><Snippet language="js" code={snippetJS} /></TabsContent>
            <TabsContent value="react"><Snippet language="jsx" code={snippetReact} /></TabsContent>
            <TabsContent value="node"><Snippet language="js" code={snippetNode} /></TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
