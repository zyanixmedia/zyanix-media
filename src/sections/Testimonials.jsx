import { useState, useRef } from "react";
import gsap from "gsap";
import useSectionAnimation from "../hooks/useSectionAnimation";

const testimonials = [
  {
    name: "Jaya Premkumar",
    company: "Founder, Padhumai Organics",
    review: `I am very happy with the design work done for my products and videos by Shahul (ZYANIX) for Padhumai Organics. His creativity, design sense, and attention to detail are truly impressive.

Being a student who is passionately pursuing a career in design, his dedication and commitment are highly appreciable. I genuinely admire his enthusiasm and professionalism at such an early stage.

I wish Shahul all the very best for a successful career and a fulfilling life ahead.`,
  },
  {
    name: "Priya Menon",
    company: "Marketing Manager, Bloom Studio",
    review:
      "Their social media creatives and video editing significantly improved our engagement. Highly recommended for businesses looking for premium quality.",
  },
];

export default function Testimonials() {
  const sectionRef = useSectionAnimation();

  const cardRef = useRef(null);

  const [current, setCurrent] = useState(0);

  const changeTestimonial = (newIndex, direction) => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      opacity: 0,
      x: direction === "next" ? -60 : 60,
      duration: 0.3,
      ease: "power2.in",
    });

    tl.call(() => {
      setCurrent(newIndex);
    });

    tl.fromTo(
      cardRef.current,
      {
        opacity: 0,
        x: direction === "next" ? 60 : -60,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  };

  const nextTestimonial = () => {
    const next =
      current === testimonials.length - 1 ? 0 : current + 1;

    changeTestimonial(next, "next");
  };

  const previousTestimonial = () => {
    const prev =
      current === 0 ? testimonials.length - 1 : current - 1;

    changeTestimonial(prev, "prev");
  };

  return (
    <section
      className="testimonials"
      id="testimonials"
      ref={sectionRef}
    >
     <div className="testimonials-header">
  <span className="section-tag">TESTIMONIALS</span>

  <h2>
    What Our <span>Clients Say</span>
  </h2>

  <p>
    Trusted by businesses to deliver creative,
    professional and impactful digital solutions.
  </p>
</div>

<div className="testimonial-slider">

  <div
    className="testimonial-card"
    ref={cardRef}
  >
    <div className="quote-mark">❝</div>

    <div className="stars">
      ★★★★★
    </div>

    <p className="testimonial-text">
      {testimonials[current].review}
    </p>

    <div className="testimonial-user">
      <div className="avatar">
        {testimonials[current].name.charAt(0)}
      </div>

      <h4>{testimonials[current].name}</h4>

      <span>{testimonials[current].company}</span>
    </div>
  </div>

  <div className="testimonial-controls">

    <button
      className="testimonial-btn"
      onClick={previousTestimonial}
    >
      ❮
    </button>

    <span className="testimonial-count">
      {current + 1} / {testimonials.length}
    </span>

    <button
      className="testimonial-btn"
      onClick={nextTestimonial}
    >
      ❯
    </button>

  </div>

</div>
    </section>
  );
}