import { motion } from "framer-motion";

const experiences = [
  {
    title: "Technicien informatique — Stage",
    company: "Tersys",
    location: "Vannes, France",
    date: "2024",
    points: [
      "Conception et développement d'une application web de gestion de chantier.",
      "Analyse des besoins et définition des fonctionnalités avec l'équipe technique.",
      "Développement backend avec Laravel (architecture MVC, gestion des données).",
      "Développement frontend avec React pour une interface dynamique et ergonomique.",
    ],
  },
  {
    title: "Technicien informatique — Stage",
    company: "ECOMS Informatique",
    location: "Vannes, France",
    date: "Mai – Juin 2021",
    points: [
      "Surveillance et amélioration de la communication réseau.",
      "Installation de la fibre optique.",
    ],
  },
  {
    title: "Expériences complémentaires",
    company: "Intérim & stages",
    location: "France",
    date: "2019 – 2024",
    points: [
      "Missions dans les domaines de l'électricité et des services.",
      "Développement de rigueur, autonomie et sens des responsabilités.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-wider">// expérience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Parcours Professionnel</h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
            >
              <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <span className="font-mono text-primary text-sm">{exp.company}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{exp.location} · {exp.date}</p>
              <ul className="space-y-1.5">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-secondary-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
