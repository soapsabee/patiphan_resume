import React, { useEffect, useRef, useState } from 'react';
import './FadeComponent.css';

const FadeComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Element is visible');
            setIsVisible(true);
          } else {
            console.log('Element is not visible');
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Adjust as needed
        rootMargin: '0px 0px -50px 0px' // Adjust rootMargin to fine-tune detection
      }
    );

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={fadeRef}
      className={`fade-element ${isVisible ? 'fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeComponent;