import { useRef } from "react";
import useSectionAnimation from "../hooks/useSectionAnimation";

const Services = () => {
  const servicesRef = useRef(null);

  useSectionAnimation(servicesRef);

  const services = [
    {
      title: "Web Design",
      desc: "Modern, responsive and conversion-focused websites.",
    },
    {
      title: "Designing",
      desc: "Attractive, colourful and futuristic designs.",
    },
    {
      title: "Branding",
      desc: "Brand identity, strategy and visual systems.",
    },
    {
      title: "Content Creation",
      desc: "Creative visuals, reels shoot and storytelling.",
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