import { useEffect, useRef } from "react";
import gsap from "gsap";

const useSectionAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return ref;
};

export default useSectionAnimation;