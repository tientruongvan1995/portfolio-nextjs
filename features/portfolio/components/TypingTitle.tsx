'use client';

import {useEffect, useState} from 'react';
import './TypingTitle.css';

export default function TypingTitle() {
  const fullText =
    'Senior React Native Developer • Cross-platform Architecture • Building at Scale';

  const displayText = useTypewriter(fullText, 20);

  return (
    <p className="Typewriter mt-2 text-xl text-[var(--muted-strong)]">
      {displayText}
      <span className="Typewriter__cursor animate-pulse">|</span>
    </p>
  );
}

const useTypewriter = (text = '', speed = 20) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }

      setDisplayText(prevText => prevText + text.charAt(index));
      setIndex(prevIndex => prevIndex + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, index]);

  return displayText;
};
