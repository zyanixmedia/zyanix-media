import { useRef } from "react";
import useSectionAnimation from "../hooks/useSectionAnimation";

const Services = () => {
  const servicesRef = useRef(null);

  useSectionAnimation(servicesRef);

 const services = [
  {
    title: "Graphic Designing",
    desc: "Professional designs for social media, branding, marketing, and promotional campaigns.",
  },
  {
    title: "Video Editing",
    desc: "Cinematic video editing with motion graphics, color grading, and engaging storytelling.",
  },
  {
    title: "Personal Branding",
    desc: "Complete brand identity solutions including logos, visual systems, and brand strategy.",
  },
  {
    title: "Content Creation",
    desc: "Creative reels, product shoots, promotional content, and digital storytelling for modern brands.",
  },
];
  return (
    <section
      id="services"
      className="services"
      ref={servicesRef}
    >
      <div className="services-header">
        <span className="section-tag">
          OUR SERVICES
        </span>

        <h2>
          What We <span>Deliver</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;