import { useEffect, useRef, useState } from "react";

export default function LazySection({ children, rootMargin = "0px", className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Intentional one-shot: React Router unmounts/remounts pages on each
          // navigation, so each visit creates a fresh component instance and
          // the fade-in naturally resets without needing the observer to re-trigger.
          observer.disconnect();
        }
      },
      {
        rootMargin, // Load content before entering viewport
        threshold: 0,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}
