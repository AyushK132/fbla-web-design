import { useEffect, useState, useRef } from 'react';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'opacity-0 translate-y-8';
        case 'down': return 'opacity-0 -translate-y-8';
        case 'left': return 'opacity-0 translate-x-8';
        case 'right': return 'opacity-0 -translate-x-8';
        case 'scale': return 'opacity-0 scale-95';
        default: return 'opacity-0 translate-y-8';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
