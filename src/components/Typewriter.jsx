import { useState, useEffect } from 'react';

const Typewriter = ({ text, typeSpeed = 50, deleteSpeed = 30, startDelay = 1000, cursorColor = '#0ea5e9' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) {
      const timer = setTimeout(() => {
        setIsStarted(true);
      }, startDelay);
      return () => clearTimeout(timer);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === text.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, typeSpeed, deleteSpeed, startDelay, isStarted]);

  return (
    <span>
      {displayedText}
      <span
        className="animate-pulse"
        style={{ color: cursorColor }}
      >
        |
      </span>
    </span>
  );
};

export default Typewriter;

