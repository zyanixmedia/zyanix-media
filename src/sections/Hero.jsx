import { useRef } from "react";
import useHeroAnimation from "../hooks/useHeroAnimation";
import ReelSlider from "../components/ReelSlider";

const Hero = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useHeroAnimation({
    titleRef,
    textRef,
    buttonRef,
    imageRef,
  });

  return (
    <section id="home" className="hero">
      
      <div className="hero-left">
        <div className="hero-badge">
  🚀 Digital Agency & Creative Studio
</div>
        <h1 ref={titleRef} className="hero-title">
          We Build
          <br />
          Premium Digital
          <br />
          Experiences.
        </h1>

        <p ref={textRef} className="hero-text">
          Branding • Websites • Motion • Content
        </p>

        <button ref={buttonRef} className="hero-btn">
          Start Your Project
        </button>
      </div>
      

     <div className="hero-right">
  <ReelSlider />
</div>
    </section>
  );
};

export default Hero;