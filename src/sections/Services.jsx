import { useRef } from "react";
import useSectionAnimation from "../hooks/useSectionAnimation";

const Services = () => {
  const servicesRef = useRef(null);

  useSectionAnimation(servicesRef);

 const services = [
  {
    title: "Branding & Graphic Design",
    desc: "Building memorable brand identities through logos, visual systems, social creatives, and marketing designs.",
  },
  {
    title: "Video Editing & Production",
    desc: "Creating engaging reels, promotional videos, motion graphics, and cinematic visual content that tells your story.",
  },
  {
    title: "Social Media Management",
    desc: "Managing your digital presence through strategy, content creation, publishing, engagement, and consistent brand communication.",
  },
  {
    title: "Digital Marketing",
    desc: "Growing brands through targeted campaigns, creative advertising, audience building, and performance-driven strategies.",
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