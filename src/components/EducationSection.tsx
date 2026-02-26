import { motion } from "framer-motion";

const education = [
  {
    title: "BTS SIO SLAM",
    school: "Lycée Lesage, Vannes",
    desc: "Solutions Logicielles et Applications Métiers",
    icon: "🎓",
  },
  {
    title: "BTS Systèmes Numériques",
    school: "Lycée Lesage, Vannes",
    desc: "Informatique et Réseaux",
    icon: "💻",
  },
  {
    title: "BAC PRO MELEC",
    school: "Lycée Lesage, Vannes",
    desc: "Métiers de l'Électricité et Environnements Connectés",
    icon: "⚡",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-muted-foreground mb-1">$ cat ~/.education</p>
          <h2 className="text-3xl md:text-4xl font-bold glow-green">Formations</h2>
        </motion.div>

        <div className="grid gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="terminal-window group hover:border-primary/40 transition-colors"
            >
              <div className="p-5 flex items-start gap-4">
                <span className="text-2xl">{edu.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-terminal-cyan text-xs mt-0.5">{edu.school}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
