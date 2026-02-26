import { motion } from "framer-motion";

const commits = [
  {
    hash: "a3f7e21",
    date: "2024",
    branch: "main",
    title: "feat: Application web de gestion de chantier",
    company: "Tersys — Vannes",
    files: [
      "+ Backend Laravel (MVC, gestion des données, logique métier)",
      "+ Frontend React (interface dynamique et ergonomique)",
      "+ Analyse des besoins avec l'équipe technique",
      "+ Suivi opérationnel des projets de chantier",
    ],
  },
  {
    hash: "b8c4d12",
    date: "Mai–Juin 2021",
    branch: "internship",
    title: "feat: Infrastructure réseau & fibre optique",
    company: "ECOMS Informatique — Vannes",
    files: [
      "+ Surveillance et amélioration de la communication réseau",
      "+ Installation de la fibre optique",
    ],
  },
  {
    hash: "c1d9e56",
    date: "2019–2024",
    branch: "develop",
    title: "chore: Expériences complémentaires",
    company: "Intérim & stages — France",
    files: [
      "+ Missions en électricité et services",
      "+ Développement de rigueur et autonomie",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-muted-foreground mb-1">$ git log --oneline --graph</p>
          <h2 className="text-3xl md:text-4xl font-bold glow-green">Parcours</h2>
        </motion.div>

        <div className="space-y-6">
          {commits.map((commit, i) => (
            <motion.div
              key={commit.hash}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-6 border-l border-terminal-dim"
            >
              {/* Git graph node */}
              <div className="absolute left-[-5px] top-3 w-[9px] h-[9px] rounded-full bg-primary glow-box" />

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-terminal-red" />
                  <div className="terminal-dot bg-terminal-amber" />
                  <div className="terminal-dot bg-terminal-green" />
                  <span className="text-xs text-muted-foreground ml-2">
                    commit {commit.hash} <span className="text-terminal-cyan">({commit.branch})</span>
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">{commit.date}</span>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-terminal-amber text-sm font-semibold mb-1">{commit.title}</p>
                  <p className="text-muted-foreground text-xs mb-3">{commit.company}</p>
                  <div className="space-y-1 font-mono text-xs">
                    {commit.files.map((file, j) => (
                      <p key={j} className="text-terminal-green">{file}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
