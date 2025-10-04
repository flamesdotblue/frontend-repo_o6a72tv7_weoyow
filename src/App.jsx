import Hero from './components/Hero';
import CodeSnippets from './components/CodeSnippets';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B12] font-inter text-white">
      <Hero />
      <main>
        <CodeSnippets />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
