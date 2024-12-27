import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Smooth Scrolling
import { ReactLenis } from "lenis/react";

export default function App() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <div className="min-h-screen bg-background text-text-primary">
          <Navbar />
          <main>
            <Hero />
            <Features />
            <FAQ />
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
