import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  lines: { prefix?: string; text: string; className?: string }[];
  speed?: number;
  startDelay?: number;
}

const Typewriter = ({ lines, speed = 40, startDelay = 500 }: TypewriterProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, speed + Math.random() * 30);
      return () => clearTimeout(timer);
    } else {
      // Line complete
      setDisplayedLines((prev) => [...prev, line.text]);
      setCurrentChar(0);
      setCurrentLine((l) => l + 1);
    }
  }, [started, currentLine, currentChar, lines, speed]);

  return (
    <div ref={containerRef} className="space-y-1">
      {displayedLines.map((text, i) => (
        <div key={i} className="flex gap-2">
          {lines[i].prefix && (
            <span className="text-terminal-green shrink-0">{lines[i].prefix}</span>
          )}
          <span className={lines[i].className || "text-foreground"}>{text}</span>
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="flex gap-2">
          {lines[currentLine].prefix && (
            <span className="text-terminal-green shrink-0">{lines[currentLine].prefix}</span>
          )}
          <span className={lines[currentLine].className || "text-foreground"}>
            {lines[currentLine].text.slice(0, currentChar)}
            <span className="animate-blink text-primary">█</span>
          </span>
        </div>
      )}
      {currentLine >= lines.length && (
        <div className="flex gap-2">
          <span className="text-terminal-green">❯</span>
          <span className="animate-blink text-primary">█</span>
        </div>
      )}
    </div>
  );
};

export default Typewriter;
