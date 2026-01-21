import { useEffect, useState } from 'react';

const FloatingCodeBlock = ({ code, language = 'jsx', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        bg-card/80 border border-primary/30 rounded-lg p-4 font-mono text-sm
        backdrop-blur-sm transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{ 
        boxShadow: '0 0 20px hsl(120 100% 50% / 0.15), inset 0 0 30px hsl(120 100% 50% / 0.05)',
      }}
    >
      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
        <span className="text-terminal-amber">{language}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <pre className="text-primary/90 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const codeSnippets = [
  {
    code: `<div className="hero">
  <h1>Welcome</h1>
  <Button>Start</Button>
</div>`,
    language: 'jsx',
    position: 'top-left',
  },
  {
    code: `function learn(topic) {
  return knowledge++;
}`,
    language: 'javascript',
    position: 'top-right',
  },
  {
    code: `.button {
  background: #00FF41;
  box-shadow: glow;
}`,
    language: 'css',
    position: 'bottom-left',
  },
  {
    code: `const skills = [
  "HTML", "CSS", 
  "JavaScript"
];`,
    language: 'javascript',
    position: 'bottom-right',
  },
];

const AnimatedCodeDisplay = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Central Terminal Display */}
      <div className="relative z-10 bg-card border-2 border-blue-500 rounded-lg overflow-hidden animate-pulse-glow">
        {/* Terminal header */}
        <div className="bg-muted/50 border-b border-blue-500 border-primary/30 p-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">code-editor.tsx</span>
        </div>
        
        {/* Code content with typing animation */}
        <div className="p-4 font-mono text-sm min-h-[200px]">
          <TypingCodeBlock />
        </div>
      </div>

      {/* Floating code blocks */}
      
   
    </div>
  );
};

const TypingCodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const codeLines = [
    'const student = {',
    '  name: "You",',
    '  level: 1,',
    '  xp: 0,',
    '  skills: []',
    '};',
    '',
    'function levelUp(student) {',
    '  student.level++;',
    '  student.xp = 0;',
    '  console.log("🎉 Level Up!");',
    '  return student;',
    '}',
  ];

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setDisplayedCode('');
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = codeLines[lineIndex];
    
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => prev + currentLine[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 30 + Math.random() * 20);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => prev + '\n');
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, charIndex, codeLines]);

  const highlightCode = (code) => {
    return code
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|new|class|extends|import|export)\b/g, '<span class=>$1</span>')
      // Strings
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-[#CE9178]">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="text-[#B5CEA8]">$1</span>')
      // Functions / methods
      .replace(/\b(console|Math|JSON|levelUp)\b/g, '<span class="text-[#DCDCAA]">$1</span>')
      // Objects / variables
      .replace(/\b(student|skills|xp|name|level)\b/g, '<span class="text-[#9CDCFE]">$1</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="text-[#6A9955]">$1</span>');
  };
  

  return (
    <div className="relative">
      <pre 
        className="text-foreground/80"
        dangerouslySetInnerHTML={{ __html: highlightCode(displayedCode) }}
      />
      <span className="inline-block w-2 h-4 bg-primary animate-blink ml-0.5" />
    </div>
  );
};

export default AnimatedCodeDisplay;
