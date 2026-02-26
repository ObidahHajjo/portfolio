import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const API_URL = "https://contact.ohajjo.online/";

type FormState = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.from_name,
          email: form.from_email,
          subject: form.subject || "(no subject)",
          message: form.message,
          to_email: "contact@ohajjo.online",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  // All styling via className only — no JS focus tracking
  const inputClass = [
    "peer w-full font-mono text-sm py-2.5 px-3 rounded-md outline-none transition-all duration-200",
    "bg-[hsl(120_30%_6%)] border border-[hsl(120_30%_18%)]",
    "text-[hsl(120_80%_75%)] caret-[hsl(120_100%_45%)]",
    "placeholder:text-[hsl(120_15%_28%)]",
    "focus:border-[hsl(120_100%_45%)] focus:bg-[hsl(120_20%_8%)]",
    "focus:shadow-[0_0_0_1px_hsl(120_100%_45%/0.3),0_0_14px_hsl(120_100%_45%/0.08)]",
  ].join(" ");

  return (
      <section id="contact" className="section-padding relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
          >
            <p className="text-xs text-muted-foreground mb-1">
              // ready to collaborate?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold glow-green">
              {"<Contact />"}
            </h2>
          </motion.div>

          {/* Contact info */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-5"
          >
            <TerminalWindow title="api/contact — GET">
            <pre className="text-sm leading-relaxed">
              <span className="text-terminal-magenta">{"{"}</span>{"\n"}
              {"  "}
              <span className="text-terminal-cyan">"status"</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-terminal-green">"available for hire"</span>
              <span className="text-muted-foreground">,</span>{"\n"}
              {"  "}
              <span className="text-terminal-cyan">"email"</span>
              <span className="text-muted-foreground">:</span>{" "}
              <a
                  href="mailto:contact@ohajjo.online"
                  className="text-terminal-green hover:underline"
              >
                "contact@ohajjo.online"
              </a>
              <span className="text-muted-foreground">,</span>{"\n"}
              {"  "}
              <span className="text-terminal-cyan">"phone"</span>
              <span className="text-muted-foreground">:</span>{" "}
              <a
                  href="tel:+33751570457"
                  className="text-terminal-green hover:underline"
              >
                "+33 7 51 57 04 57"
              </a>
              <span className="text-muted-foreground">,</span>{"\n"}
              {"  "}
              <span className="text-terminal-cyan">"location"</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-terminal-amber">
                "Saint-Avé, Vannes — France 🇫🇷"
              </span>
              <span className="text-muted-foreground">,</span>{"\n"}
              {"  "}
              <span className="text-terminal-cyan">"response_time"</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-terminal-amber">"&lt; 24h"</span>{"\n"}
              <span className="text-terminal-magenta">{"}"}</span>
            </pre>
            </TerminalWindow>
          </motion.div>

          {/* Contact form */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            <TerminalWindow title="api/contact — POST">
              {status === "success" ? (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8 text-center space-y-3"
                  >
                    <p className="text-4xl text-terminal-green">✓</p>
                    <p className="font-mono text-sm text-terminal-green">
                      Message sent successfully!
                    </p>
                    <p className="text-muted-foreground text-xs">
                      // I'll get back to you within 24h
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-2 text-[11px] text-terminal-cyan hover:text-primary transition-colors"
                    >
                      $ send another message
                    </button>
                  </motion.div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold font-mono uppercase tracking-widest text-terminal-green">
                          // name <span className="text-terminal-green">*</span>
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            value={form.from_name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className={inputClass}
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold font-mono uppercase tracking-widest text-terminal-green">
                          // email <span className="text-terminal-green">*</span>
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            value={form.from_email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold font-mono uppercase tracking-widest text-terminal-green">
                        // subject
                      </label>
                      <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Let's work together"
                          className={inputClass}
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold font-mono uppercase tracking-widest text-terminal-green">
                        // message <span className="text-terminal-green">*</span>
                      </label>
                      <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell me about your project..."
                          className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                        <p className="text-terminal-red text-xs font-mono">
                          ✗ Failed to send. Please try emailing directly at
                          contact@ohajjo.online
                        </p>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <p className="text-[10px] text-[hsl(120_30%_35%)] font-mono">
                        * required fields
                      </p>
                      <button
                          type="submit"
                          disabled={status === "sending"}
                          className="inline-flex items-center gap-2 border border-primary bg-primary/10 text-primary px-5 py-2 rounded-md text-sm hover:bg-primary/20 transition-colors glow-box disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                            <>
                              <span className="animate-blink">█</span> sending...
                            </>
                        ) : (
                            <>
                              <span className="text-terminal-dim">$</span> send
                              --message
                            </>
                        )}
                      </button>
                    </div>
                  </form>
              )}
            </TerminalWindow>
          </motion.div>

          <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 text-muted-foreground text-xs"
          >
            <span className="text-terminal-dim">/*</span> ©{" "}
            {new Date().getFullYear()} Obidah Hajjo — Built with React + TypeScript{" "}
            <span className="text-terminal-dim">*/</span>
          </motion.p>
        </div>
      </section>
  );
};

export default ContactSection;