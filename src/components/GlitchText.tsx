interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-terminal-cyan"
        style={{ animation: "glitch-1 3s infinite linear alternate-reverse" }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-terminal-red"
        style={{ animation: "glitch-2 3s infinite linear alternate-reverse", animationDelay: "0.1s" }}
      >
        {text}
      </span>
    </span>
  );
};

export default GlitchText;
