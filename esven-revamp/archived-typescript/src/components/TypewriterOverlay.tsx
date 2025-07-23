import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/navigation";

interface TypewriterOverlayProps {
  lines?: string[];
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  typingSpeed?: number;
  pauseBetween?: number;
  maxVisibleLines?: number;
  onEnter?: () => void;
}

const DEFAULT_LINES = [
  "We know people",
  "We invest in people",
  "We can spot the people who will succeed",
  "who live, eat and breathe their ideas",
  "and will stop at nothing to achieve them",
  "who understand the need for a compounding advantage",
  "have a compelling vision that is disruptive",
  "who can and will attract talent and capital",
];

export const TypewriterOverlay: React.FC<TypewriterOverlayProps> = ({
  lines = DEFAULT_LINES,
  logoSrc = "/EsalenLogo_V_wht_edited_edited_edited_ed.png",
  logoAlt = "Esalen Ventures",
  logoWidth = 120,
  logoHeight = 120,
  typingSpeed = 80,
  pauseBetween = 250,
  maxVisibleLines = 5,
  onEnter,
}) => {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [showEnter, setShowEnter] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Start typing after logo animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentLine < lines.length) {
        setIsTyping(true);
      }
    }, 1500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping || currentLine >= lines.length) return;
    if (currentChar < lines[currentLine].length) {
      typingTimeout.current = setTimeout(() => {
        setTypedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length < currentLine + 1) newLines.push("");
          newLines[currentLine] =
            (newLines[currentLine] || "") + lines[currentLine][currentChar];
          return newLines.slice(-maxVisibleLines);
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
    } else {
      pauseTimeout.current = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        if (currentLine + 1 === lines.length) {
          setIsTyping(false);
          setTimeout(() => setShowEnter(true), 1000);
        }
      }, pauseBetween);
    }
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
    // eslint-disable-next-line
  }, [currentChar, currentLine, isTyping]);

  // Navigate on click
  const handleEnter = () => {
    setFadeOut(true);
    if (onEnter) {
      setTimeout(() => onEnter(), 1000);
    }
  };

  return (
    <div className={classNames(
      "flex flex-col items-center justify-center w-full h-full max-w-[800px] p-10 text-center relative",
      fadeOut && "animate-[fadeOut_1s_ease_forwards]"
    )}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
        className="mb-[60px] opacity-0 animate-[fadeInUp_1s_ease_0.5s_forwards]"
        priority
        style={{ width: logoWidth, height: 'auto' }}
      />
      <div className="min-h-[200px] flex flex-col justify-center w-full">
        {typedLines.map((line, idx) => (
          <div
            key={idx}
            className={classNames(
              "text-white text-[32px] font-light leading-[1.4] tracking-[0.5px] mb-5 opacity-0",
              idx === typedLines.length - 1 && isTyping && "opacity-100"
            )}
          >
            {line}
            {idx === typedLines.length - 1 && isTyping && (
              <span className="inline-block w-[2px] h-[1.2em] bg-white ml-[2px] animate-blink" />
            )}
          </div>
        ))}
      </div>
      {/* Enter Prompt */}
      <div
        className={classNames(
          "absolute bottom-[60px] left-1/2 -translate-x-1/2 text-white/70 text-base font-light tracking-wider opacity-0 select-none",
          showEnter &&
            "animate-[fadeInUp_1s_ease_8s_forwards,pulse_2s_ease-in-out_9s_infinite]"
        )}
      >
        CLICK TO ENTER
      </div>
      {/* Click Area */}
      <div
        className="absolute inset-0 z-[4] cursor-pointer"
        onClick={showEnter ? handleEnter : undefined}
      />
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: scale(1.1);
          }
        }
        @media (max-width: 768px) {
          .text-[32px] {
            font-size: 24px;
          }
          .px-10 {
            padding-left: 20px;
            padding-right: 20px;
          }
          .mb-[60px] {
            width: 80px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};
