import { useRef, useState } from "react";
import gsap from "gsap";
import Counter from "../components/Counter";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { useEffect } from "react";
const team = [
  {
    name: "ZYANIX",
    role: "Creative Digital Agency",
    image: "/zyanix.png",
    description:
      "We build premium digital experiences through branding, websites, UI/UX, motion graphics and content creation.",
  },
  {
    name: "Shahul Hameed Irshath",
    role: "Founder & Creative Director",
    image: "/sha1.png",
    description:
      "Founder of ZYANIX. I help businesses build premium websites, digital brands and modern experiences that attract customers and drive growth. My mission is simple: create work that looks world-class and delivers real results.",
  },
  {
    name: "Yapase",
    role: "Frontend Developer",
    image: "/yaps.png",
    description:
      "Builds fast, modern and responsive web applications with clean code and a focus on user experience.",
  },
  {
    name: "Ram Prasath",
    role: "Video Editor",
    image: "/ram.png",
    description:
      "Creates cinematic edits, motion graphics and promotional videos for brands.",
  },
  {
    name: "Mohan Priyan",
    role: "Graphic Designer",
    image: "/mohan.png",
    description:
      "Designs premium branding, posters and visual identities.",
  },
  {
    name: "Akshay",
    role: "Graphic Designer",
    image: "/akshai.png",
    description:
      "Creates modern social media creatives and marketing designs.",
  },
  {
    name: "Ravi Varman",
    role: "Graphic Designer",
    image: "/ravi.png",
    description:
      "Specializes in creative branding and visual communication.",
  },
  {
    name: "Prateesh",
    role: "Graphic Designer",
    image: "/prateesh.png",
    description:
      "Passionate about modern UI design and branding solutions.",
  },
  {
    name: "Harish",
    role: "Graphic Designer",
    image: "/harish.png",
    description:
      "Creates attractive visual identities and promotional designs.",
  },
];

const About = () => {
  const aboutRef = useSectionAnimation();

  const imageRef = useRef(null);
const contentRef = useRef(null);

  const [current, setCurrent] = useState(0);

 const changeMember = (newIndex, direction) => {
  const tl = gsap.timeline();

  tl.to(imageRef.current, {
    opacity: 0,
    scale: 0.95,
    duration: 0.25,
    ease: "power2.in",
  });

  tl.to(
    contentRef.current,
    {
      opacity: 0,
      x: direction === "next" ? -30 : 30,
      duration: 0.25,
      ease: "power2.in",
    },
    "<"
  );

  tl.call(() => {
    setCurrent(newIndex);
  });

  tl.fromTo(
    imageRef.current,
    {
      opacity: 0,
      scale: 1.05,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    }
  );

  tl.fromTo(
    contentRef.current,
    {
      opacity: 0,
      x: direction === "next" ? 30 : -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.45,
      ease: "power3.out",
    },
    "<"
  );
};

  const previousMember = () => {
    changeMember(
      current === 0 ? team.length - 1 : current - 1,
      "prev"
    );
  };

  const nextMember = () => {
    changeMember(
      current === team.length - 1 ? 0 : current + 1,
      "next"
    );
  };
useEffect(() => {
  team.forEach((member) => {
    const img = new Image();
    img.src = member.image;
  });
}, []);
  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-left">

        <button className="arrow" onClick={previousMember}>
          ❮
        </button>

        <div className="about-image-card">
          <img
  ref={imageRef}
  src={team[current].image}
  alt={team[current].name}
  className="about-image"
  draggable="false"
/>
        </div>

        <button className="arrow" onClick={nextMember}>
          ❯
        </button>

      </div>

      <div className="about-right">

  <div ref={contentRef}>

    <span className="section-tag">
      ABOUT ZYANIX
    </span>

    <h2>
      {team[current].name}
    </h2>

    <h4>
      {team[current].role}
    </h4>

    <p>
      {team[current].description}
    </p>

  </div>

  <div className="about-stats">

    <div>
      <Counter end={35} suffix="+" />
      <span>Projects</span>
    </div>

    <div>
      <Counter end={15} suffix="+" />
      <span>Clients</span>
    </div>

    <div>
      <Counter end={100} suffix="%" />
      <span>Passion</span>
    </div>

  </div>

</div>
    </section>
  );
};

export default About;