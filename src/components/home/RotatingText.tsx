import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const messages = [
  'Every student deserves access to computer science education.',
  'Every senior deserves access to technology.',
  'Every community deserves access to digital literacy.'
];

export default function RotatingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: messages,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-20 sm:h-24">
      <span ref={el} className="text-xl sm:text-2xl md:text-3xl text-blue-100" />
    </div>
  );
}