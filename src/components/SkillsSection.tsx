import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const skills = {
  languages: [
    { name: "JavaScript", level: 75 },
    { name: "PHP", level: 85 },
    { name: "Python", level: 50 },
    { name: "Java", level: 80 },
    { name: "SQL", level: 80 },
    { name: "Postgres", level: 75 },
    { name: "Dart", level: 40 },
    { name: "C++", level: 40 },
    { name: "HTML/CSS", level: 90 },
  ],
  frameworks: [
    { name: "React", level: 75 },
    { name: "Laravel", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "Spring Boot", level: 65 },
    { name: "Flutter", level: 40 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "Postman", level: 90 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="group"
  >
    <div className="flex justify-between text-xs mb-1">
      <span className="text-foreground">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-sm overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-sm"
        style={{
          background: `linear-gradient(90deg, hsl(var(--terminal-green)), hsl(var(--terminal-cyan)))`,
          boxShadow: `0 0 8px hsl(var(--terminal-green) / 0.5)`,
        }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-xs mb-1">
            <span className="text-terminal-magenta">const</span> skills <span className="text-muted-foreground">=</span> <span className="text-terminal-amber">{"{"}</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold glow-green">
            &nbsp;&nbsp;tech_stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <TerminalWindow title="languages.rs">
            <div className="space-y-3">
              {skills.languages.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.05} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="frameworks.ts">
            <div className="space-y-3">
              {skills.frameworks.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.05} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="tools.sh">
            <div className="space-y-3">
              {skills.tools.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.05} />
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">// langues</p>
              <div className="flex flex-wrap gap-2">
                {["Français 🇫🇷", "Anglais 🇬🇧", "Arabe 🇸🇦"].map((lang) => (
                  <span key={lang} className="text-xs border border-border px-2 py-1 rounded text-secondary-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-terminal-amber text-xs mt-4"
        >
          <span className="text-terminal-amber">{"}"}</span><span className="text-muted-foreground">;</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
