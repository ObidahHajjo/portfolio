import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-xs text-muted-foreground mb-1">// ready to collaborate?</p>
          <h2 className="text-3xl md:text-4xl font-bold glow-green">{"<Contact />"}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TerminalWindow title="api/contact — GET">
            <pre className="text-sm leading-relaxed">
              <span className="text-terminal-magenta">{"{"}</span>{"\n"}
              {"  "}<span className="text-terminal-cyan">"status"</span><span className="text-muted-foreground">:</span> <span className="text-terminal-green">"available for hire"</span><span className="text-muted-foreground">,</span>{"\n"}
              {"  "}<span className="text-terminal-cyan">"email"</span><span className="text-muted-foreground">:</span>{" "}
              <a href="mailto:hajjoobidah@gmail.com" className="text-terminal-green hover:underline">"hajjoobidah@gmail.com"</a><span className="text-muted-foreground">,</span>{"\n"}
              {"  "}<span className="text-terminal-cyan">"phone"</span><span className="text-muted-foreground">:</span>{" "}
              <a href="tel:+33661559552" className="text-terminal-green hover:underline">"06 61 55 95 52"</a><span className="text-muted-foreground">,</span>{"\n"}
              {"  "}<span className="text-terminal-cyan">"location"</span><span className="text-muted-foreground">:</span> <span className="text-terminal-amber">"2 Rue Louise Weiss, 56890 Saint-Avé"</span><span className="text-muted-foreground">,</span>{"\n"}
              {"  "}<span className="text-terminal-cyan">"response_time"</span><span className="text-muted-foreground">:</span> <span className="text-terminal-amber">"&lt; 24h"</span>{"\n"}
              <span className="text-terminal-magenta">{"}"}</span>
            </pre>
          </TerminalWindow>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground text-xs"
        >
          <span className="text-terminal-dim">/*</span> © {new Date().getFullYear()} Obidah Hajjo — Built with React + TypeScript <span className="text-terminal-dim">*/</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
