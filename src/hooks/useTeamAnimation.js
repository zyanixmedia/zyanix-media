import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useTeamAnimation() {
  useEffect(() => {
    gsap.from(".team-card", {
      opacity: 0,
      y: 80,
      rotateY: 20,
      stagger: 0.12,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%",
      },
    });
  }, []);
}