import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">Bonjour, je suis</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-gradient">Obidah Hajjo</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground mb-6">
            Concepteur Développeur d'Applications
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-8">
            Développeur passionné basé à Saint-Avé, France. Je conçois et développe des applications web modernes, du backend au frontend, avec rigueur et créativité.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:hajjoobidah@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Me contacter
            </a>
            <a href="tel:+33661559552" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
              06 61 55 95 52
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-border glow">
            <img src={profileImg} alt="Obidah Hajjo" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
