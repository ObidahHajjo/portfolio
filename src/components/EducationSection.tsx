import { motion } from "framer-motion";

const education = [
  { title: "BTS SIO SLAM", school: "Lycée Lesage, Vannes", desc: "Solutions Logicielles et Applications Métiers" },
  { title: "BTS Systèmes Numériques", school: "Lycée Lesage, Vannes", desc: "Informatique et Réseaux" },
  { title: "BAC PRO MELEC", school: "Lycée Lesage, Vannes", desc: "Métiers de l'Électricité et de ses Environnements Connectés" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-wider">// formation</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Formations</h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{edu.title}</h4>
              <p className="font-mono text-primary text-xs mb-3">{edu.school}</p>
              <p className="text-muted-foreground text-sm">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
