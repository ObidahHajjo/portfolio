import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const projects = [
  {
    name: "E-Commerce Platform",
    desc: "Full-stack marketplace with real-time inventory, Stripe payments & admin dashboard.",
    tech: ["Laravel", "React", "MySQL", "Docker", "Stripe"],
    branch: "main",
    commits: 342,
    status: "deployed",
    github: "#",
    demo: "#",
  },
  {
    name: "Fleet Management App",
    desc: "GPS tracking, route optimization & driver management for logistics companies.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Leaflet"],
    branch: "production",
    commits: 218,
    status: "deployed",
    github: "#",
    demo: "#",
  },
  {
    name: "Patient Portal",
    desc: "Healthcare appointment booking, medical records & secure messaging system.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    branch: "main",
    commits: 156,
    status: "deployed",
    github: "#",
    demo: null,
  },
  {
    name: "DevOps Dashboard",
    desc: "CI/CD pipeline monitoring, container orchestration & log aggregation tool.",
    tech: ["React", "Go", "Docker", "Kubernetes", "Grafana"],
    branch: "develop",
    commits: 89,
    status: "beta",
    github: "#",
    demo: null,
  },
];

const statusColor: Record<string, string> = {
  deployed: "text-terminal-green",
  beta: "text-terminal-amber",
  wip: "text-terminal-magenta",
};

const ProjectsSection = () => {
  return (
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
          >
            <p className="text-xs text-muted-foreground mb-1">
              <span className="text-terminal-dim">$</span> ls ~/projects --detailed
            </p>
            <h2 className="text-2xl md:text-3xl font-bold glow-green">
              {"{ Projects }"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <TerminalWindow title={`~/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-foreground">{project.name}</h3>
                        <span className={`text-[10px] uppercase font-bold ${statusColor[project.status]}`}>
                      [{project.status}]
                    </span>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">{project.desc}</p>

                      <div className="flex items-center gap-3 text-[10px] text-terminal-dim">
                    <span>
                      <span className="text-terminal-cyan">branch:</span> {project.branch}
                    </span>
                        <span>
                      <span className="text-terminal-cyan">commits:</span> {project.commits}
                    </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 rounded border border-border bg-muted/50 text-terminal-amber"
                            >
                        {t}
                      </span>
                        ))}
                      </div>

                      {/* Action links */}
                      <div className="flex gap-2 pt-1 border-t border-border">
                        <a
                            href={project.github}
                            className="text-[10px] px-2.5 py-1 rounded border border-border text-terminal-cyan hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          $ git clone
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                className="text-[10px] px-2.5 py-1 rounded border border-border text-terminal-green hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors"
                            >
                              ./run --live
                            </a>
                        )}
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ProjectsSection;