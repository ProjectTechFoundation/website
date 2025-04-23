import { useEffect, useState } from 'react';

const messages = [
  'Every student deserves access to computer science education.',
  'Every senior deserves access to technology.',
  'Every community deserves access to digital literacy.'
];

export default function RotatingText() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const currentMessage = messages[currentMessageIndex];
      
      if (!isDeleting) {
        if (currentText === currentMessage) {
          // Start deleting after a pause
          timeout = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setCurrentText(currentMessage.slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          return;
        }
        setCurrentText(currentMessage.slice(0, currentText.length - 1));
      }
    };

    timeout = setTimeout(type, isDeleting ? 30 : typingSpeed);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, isDeleting, currentMessageIndex, typingSpeed]);

  return (
    <div className="h-20 sm:h-24 flex items-center justify-center lg:justify-start">
      <span className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-medium">
        {currentText}
        <span className="inline-block w-0.5 h-8 bg-blue-100 ml-1 animate-pulse"></span>
      </span>
    </div>
  );
}