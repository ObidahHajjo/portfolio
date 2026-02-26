import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import Typewriter from "./Typewriter";
import TerminalWindow from "./TerminalWindow";
import profileImg from "@/assets/profile.png";

const terminalLines = [
  { prefix: "❯", text: "whoami", className: "text-terminal-cyan" },
  { prefix: "", text: "Obidah Hajjo — Concepteur Développeur d'Applications", className: "text-foreground" },
  { prefix: "❯", text: "cat skills.txt", className: "text-terminal-cyan" },
  { prefix: "", text: "React · Laravel · Next.js · Spring Boot · Flutter · Docker", className: "text-terminal-amber" },
  { prefix: "❯", text: "echo $LOCATION", className: "text-terminal-cyan" },
  { prefix: "", text: "Saint-Avé, Vannes — France 🇫🇷", className: "text-foreground" },
  { prefix: "❯", text: "cat mission.txt", className: "text-terminal-cyan" },
  { prefix: "", text: "Building clean, performant web apps from backend to frontend.", className: "text-terminal-green" },
  { prefix: "❯", text: "Try the console below",  className: "text-terminal-amber" },
  {prefix: "", text: "", className: "text-terminal-green"},
];

const HeroSection = () => {
  return (
      <section className="min-h-screen flex items-center section-padding relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/50 glow-box">
              <img src={profileImg} alt="Obidah Hajjo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">// developer portfolio</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold glow-green animate-flicker">
                <GlitchText text="OBIDAH HAJJO" />
              </h1>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TerminalWindow title="~/obidah — bash — 80×24" className="max-w-3xl">
              <Typewriter lines={terminalLines} speed={35} startDelay={800} />
            </TerminalWindow>
          </motion.div>

          {/* Fixed: reduced delay from 5s to 1.5s */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-8 flex gap-4 flex-wrap"
          >
            <a href="mailto:hajjoobidah@gmail.com" className="inline-flex items-center gap-2 border border-primary bg-primary/10 text-primary px-5 py-2.5 rounded-md text-sm hover:bg-primary/20 transition-colors glow-box">
              <span className="text-terminal-dim">[</span> contact@reach <span className="text-terminal-dim">]</span>
            </a>
            <a href="#skills" className="inline-flex items-center gap-2 border border-border text-muted-foreground px-5 py-2.5 rounded-md text-sm hover:text-foreground hover:border-primary/50 transition-colors">
              <span className="text-terminal-dim">&lt;</span> explore <span className="text-terminal-dim">/&gt;</span>
            </a>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;