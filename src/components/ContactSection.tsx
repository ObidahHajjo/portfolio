import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-wider">// contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Travaillons ensemble</h3>
          <p className="text-muted-foreground text-lg mb-10">
            Disponible pour des opportunités de développement. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="mailto:hajjoobidah@gmail.com" className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/50 transition-colors group">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">hajjoobidah@gmail.com</span>
          </a>
          <a href="tel:+33661559552" className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/50 transition-colors group">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">06 61 55 95 52</span>
          </a>
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-secondary-foreground">Saint-Avé, France</span>
          </div>
        </motion.div>

        <p className="mt-16 text-muted-foreground text-xs font-mono">
          © {new Date().getFullYear()} Obidah Hajjo — Tous droits réservés
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
