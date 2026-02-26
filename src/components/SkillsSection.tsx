import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Langages",
    items: ["PHP", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL", "C++", "Dart"],
  },
  {
    title: "Frameworks & Bibliothèques",
    items: ["React", "Laravel", "Flutter", "Spring Boot", "Next.js"],
  },
  {
    title: "Outils",
    items: ["Docker", "Postman", "Git"],
  },
  {
    title: "Langues",
    items: ["Français", "Anglais", "Arabe"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-wider">// compétences</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Technologies & Outils</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-4">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
