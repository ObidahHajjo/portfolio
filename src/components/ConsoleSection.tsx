import {useState, useRef, useEffect, KeyboardEvent} from "react";
import {motion} from "framer-motion";

const COMMANDS: Record<string, string | string[] | (() => string)> = {
    help: [
        "Available commands:",
        "  whoami        — Who is Obidah?",
        "  pwd           — Current working directory",
        "  ls            — List portfolio sections",
        "  cat about.txt — Read about me",
        "  cat skills.txt— List technical skills",
        "  uname -a      — System info",
        "  date          — Current date",
        "  uptime        — Developer uptime",
        "  echo <msg>    — Echo a message",
        "  history       — Command history",
        "  clear         — Clear terminal",
        "  neofetch      — System summary",
        "  man           — Show this help",
        "  exit          — Close session",
    ].join("\n"),
    whoami: "Obidah Hajjo — Concepteur Développeur d'Applications\nFull-stack developer based in Vannes, France 🇫🇷",
    pwd: "/home/obidah/portfolio",
    ls: [
        "drwxr-xr-x  about.txt",
        "drwxr-xr-x  skills.txt",
        "drwxr-xr-x  projects/",
        "drwxr-xr-x  experience/",
        "drwxr-xr-x  education/",
        "drwxr-xr-x  contact.json",
        "-rw-r--r--  README.md",
    ].join("\n"),
    "cat about.txt": [
        "╔══════════════════════════════════════════╗",
        "║  OBIDAH HAJJO                            ║",
        "║  Full-Stack Developer & Problem Solver    ║",
        "╚══════════════════════════════════════════╝",
        "",
        "Passionate about building performant,",
        "clean web applications from backend to",
        "frontend. Experienced in React, Laravel,",
        "Spring Boot, Next.js, Flutter & Docker.",
        "",
        "Currently seeking new challenges in France.",
    ].join("\n"),
    "cat skills.txt": [
        "── Frontend ──────────────────────────",
        "  React, Next.js, Vue.js, Flutter, Tailwind CSS",
        "",
        "── Backend ───────────────────────────",
        "  Laravel, Spring Boot, Node.js, PHP, Java",
        "",
        "── Database ──────────────────────────",
        "  MySQL, PostgreSQL, MongoDB, Firebase",
        "",
        "── DevOps ────────────────────────────",
        "  Docker, Git, CI/CD, Linux, Nginx",
    ].join("\n"),
    "uname -a": "ObidahOS 4.2.0-dev x86_64 GNU/Linux (Portfolio Edition)",
    date: () => new Date().toString(),
    uptime: "5+ years coding, 0 burnouts (almost), mass café consumed ☕",
    neofetch: [
        "        .--.          obidah@portfolio",
        "       |o_o |         ─────────────────",
        "       |:_/ |         OS: ObidahOS v4.2",
        "      //   \\ \\        Host: Vannes, FR",
        "     (|     | )       Kernel: React 18",
        "    /'\\_   _/`\\       Shell: bash 5.1",
        "    \\___)=(___/       Languages: FR, EN, AR",
        "                      Stack: React, Laravel, Spring",
        "                      Editor: VS Code",
        "                      Coffee: ████████████ 99%",
    ].join("\n"),
    man: "Usage: type 'help' to see all available commands.",
    exit: "Session terminated. Thanks for visiting! 👋\n(Just kidding, you can keep typing.)",
    "cat contact.json": [
        "{",
        '  "email": "hajjoobidah@gmail.com",',
        '  "phone": "+33 7 51 57 04 57",',
        '  "location": "Saint-Avé, Vannes",',
        '  "github": "github.com/obidah",',
        '  "linkedin": "linkedin.com/in/obidah-hajjo"',
        "}",
    ].join("\n"),
    "cat README.md": "# Obidah Hajjo Portfolio\n\nWelcome! Type `help` to explore.",
    sudo: "Nice try. You don't have root access here. 😏",
};

interface Line {
    type: "input" | "output";
    text: string;
}

const ConsoleSection = () => {
    const [lines, setLines] = useState<Line[]>([
        {type: "output", text: "Welcome to ObidahOS v4.2 — Type 'help' for available commands.\n"},
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        el.scrollTo({top: el.scrollHeight, behavior: "smooth"});
    }, [lines]);

    const processCommand = (cmd: string) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory((prev) => [...prev, trimmed]);
        setHistoryIndex(-1);

        const newLines: Line[] = [{type: "input", text: trimmed}];

        if (trimmed === "clear") {
            setLines([]);
            setInput("");
            return;
        }

        if (trimmed === "history") {
            const output = history.map((h, i) => `  ${i + 1}  ${h}`).join("\n") || "  (empty)";
            newLines.push({type: "output", text: output});
        } else if (trimmed.startsWith("echo ")) {
            newLines.push({type: "output", text: trimmed.slice(5)});
        } else if (trimmed.startsWith("sudo ")) {
            newLines.push({type: "output", text: COMMANDS["sudo"] as string});
        } else if (trimmed === "date") {
            newLines.push({type: "output", text: new Date().toString()});
        } else if (COMMANDS[trimmed]) {
            const val = COMMANDS[trimmed];
            const text = typeof val === "function" ? val() : typeof val === "string" ? val : val.join("\n");
            newLines.push({type: "output", text});
        } else {
            const trimmedVal = trimmed.split(" ");
            newLines.push({
                type: "output",
                text: trimmedVal.includes('cat')
                    ? `bash: ${trimmedVal[1]}: No such file or directory`
                    : `bash: ${trimmedVal[0]}: command not found\nType 'help' for available commands.`,
            });
        }

        setLines((prev) => [...prev, ...newLines]);
        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();      // prevents form submit / default enter behavior
            e.stopPropagation();     // prevents parent key handlers (common cause)
            processCommand(input);
            return;
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= history.length) {
                    setHistoryIndex(-1);
                    setInput("");
                } else {
                    setHistoryIndex(newIndex);
                    setInput(history[newIndex]);
                }
            }
        }
    };

    const authorizedCommands = [
        "help", "whoami", "pwd", "ls", "cat about.txt", "cat skills.txt",
        "cat contact.json", "cat README.md", "uname -a", "date", "uptime",
        "echo <msg>", "history", "clear", "neofetch", "man", "exit", "sudo",
    ];

    return (
        <section id="console" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="mb-10"
                >
                    <p className="text-xs text-muted-foreground mb-1">
                        <span className="text-terminal-dim">$</span> ./interactive-console.sh
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold glow-green">
                        {"{ Console }"}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.1}}
                >
                    <div className="terminal-window max-w-4xl">
                        <div className="terminal-header">
                            <div className="terminal-dot bg-terminal-red"/>
                            <div className="terminal-dot bg-terminal-amber"/>
                            <div className="terminal-dot bg-terminal-green"/>
                            <span className="text-xs text-muted-foreground ml-2 flex-1">
                obidah@portfolio:~$ — bash — interactive
              </span>
                        </div>

                        <div
                            ref={containerRef}
                            className="p-4 h-80 md:h-96 overflow-y-auto font-mono text-xs md:text-sm cursor-text"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {lines.map((line, i) => (
                                <div key={i} className="whitespace-pre-wrap mb-1">
                                    {line.type === "input" ? (
                                        <span>
                      <span className="text-terminal-green">obidah</span>
                      <span className="text-terminal-dim">@</span>
                      <span className="text-terminal-cyan">portfolio</span>
                      <span className="text-muted-foreground">:~$ </span>
                      <span className="text-foreground">{line.text}</span>
                    </span>
                                    ) : (
                                        <span className="text-muted-foreground">{line.text}</span>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center">
                                <span className="text-terminal-green">obidah</span>
                                <span className="text-terminal-dim">@</span>
                                <span className="text-terminal-cyan">portfolio</span>
                                <span className="text-muted-foreground">:~$ </span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </div>
                            <div ref={bottomRef}/>
                        </div>
                    </div>
                </motion.div>

                {/* Authorized commands list */}
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.4, delay: 0.2}}
                    className="mt-6 max-w-4xl"
                >
                    <p className="text-[10px] uppercase tracking-widest text-terminal-dim mb-3">
                        // authorized commands
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {authorizedCommands.map((cmd) => (
                            <button
                                key={cmd}
                                onClick={() => {
                                    if (cmd === "echo <msg>") {
                                        setInput("echo ");
                                    } else {
                                        processCommand(cmd);
                                    }
                                    inputRef.current?.focus();
                                }}
                                className="text-[10px] md:text-xs px-2.5 py-1 rounded border border-border bg-muted/30 text-terminal-cyan hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsoleSection;
