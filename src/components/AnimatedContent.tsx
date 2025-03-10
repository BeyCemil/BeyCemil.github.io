
import { useEffect, useRef } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
}

const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return <>{children}</>;
};

export default AnimatedContent;
