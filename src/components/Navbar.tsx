import { useState, useEffect } from "react";

const links = [
  { label: "console", href: "#console" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-primary font-bold text-sm glow-green">
            {"<OH />"}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary px-3 py-1.5 rounded transition-colors"
                >
                  <span className="text-terminal-dim">{i}:</span> {link.label}
                </a>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-primary text-xs">
            {open ? "[close]" : "[menu]"}
          </button>
        </div>

        {open && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-3 space-y-2">
              {links.map((link, i) => (
                  <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-xs text-muted-foreground hover:text-primary py-1 transition-colors"
                  >
                    <span className="text-terminal-dim">{i}:</span> {link.label}
                  </a>
              ))}
            </div>
        )}
      </nav>
  );
};

export default Navbar;