import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
      <div className="flex min-h-screen items-center justify-center bg-background scanline">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-mono"
        >
          <p className="text-xs text-muted-foreground mb-4">
            <span className="text-terminal-dim">$</span> cd {location.pathname}
          </p>
          <div className="terminal-window max-w-md mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-terminal-red" />
              <div className="terminal-dot bg-terminal-amber" />
              <div className="terminal-dot bg-terminal-green" />
              <span className="text-xs text-muted-foreground ml-2">bash — error</span>
            </div>
            <div className="p-8">
              <h1 className="text-6xl font-bold glow-green mb-2">404</h1>
              <p className="text-terminal-red text-sm mb-1">
                bash: {location.pathname}: No such file or directory
              </p>
              <p className="text-muted-foreground text-xs mb-6">
                // The page you're looking for doesn't exist
              </p>
              <a
                  href="/"
                  className="inline-flex items-center gap-2 border border-primary bg-primary/10 text-primary px-5 py-2.5 rounded-md text-sm hover:bg-primary/20 transition-colors glow-box"
              >
                <span className="text-terminal-dim">$</span> cd ~/home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
  );
};

export default NotFound;