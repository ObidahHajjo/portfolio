import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title, children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-terminal-red" />
        <div className="terminal-dot bg-terminal-amber" />
        <div className="terminal-dot bg-terminal-green" />
        <span className="text-xs text-muted-foreground ml-2 flex-1">{title}</span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
};

export default TerminalWindow;
