import { useEffect } from "react";
import gsap from "gsap";

export default function useHeroAnimation({
  titleRef,
  textRef,
  buttonRef,
  imageRef,
}) {
  useEffect(() => {
    if (
      !titleRef.current ||
      !textRef.current ||
      !buttonRef.current ||
      !imageRef.current
    ) {
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      );
  }, []);
}