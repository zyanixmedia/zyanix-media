import useSectionAnimation from "../hooks/useSectionAnimation";

const members = [
  {
    name: "Shahul Hameed Irshath",
    role: "Founder & Creative Director",
    image: "/sha1.png",
  },
  {
    name: "Ram Prasath",
    role: "Video Editor",
    image: "/ram.png",
  },
  {
    name: "Yapase",
    role: "Frontend Developer",
    image: "/yaps.png",
  },
  {
    name: "Mohan Priyan",
    role: "Graphic Designer",
    image: "/mohan.png",
  },
  {
    name: "Akshay",
    role: "Graphic Designer",
    image: "/akshai.png",
  },
  {
    name: "Ravi Varman",
    role: "Graphic Designer",
    image: "/ravi.png",
  },
  {
    name: "Prateesh",
    role: "Graphic Designer",
    image: "/prateesh.png",
  },
  {
    name: "Harish",
    role: "Graphic Designer",
    image: "/harish.png",
  },
];

export default function Team() {
  const ref = useSectionAnimation();

  return (
    <section className="team" id="team" ref={ref}>
        
      <div className="team-header">
        <span className="section-tag">OUR TEAM</span>

        <h2>
          Meet The <span>Creative Minds</span>
        </h2>

        <p>
          Behind every exceptional brand is a team that believes in creativity,
          precision, and innovation. Meet the passionate professionals powering
          ZYANIX and transforming ideas into remarkable digital experiences.
        </p>
      </div>

      <div className="team-grid">
        {members.map((member) => (
          <div className="team-card" key={member.name}>

  {/* Background Logo */}
  <img
    src="/zyanix.png"
    alt=""
    className="team-logo"
  />

  {/* Team Member */}
  <img
    src={member.image}
    alt={member.name}
    className={`team-img ${
      member.name === "Ravi Varman" ? "ravi" : ""
    }`}
  />

  {/* Info */}
  <div className="team-info">
    <h3>{member.name}</h3>
    <p>{member.role}</p>
  </div>

</div>
          
        ))}
      </div>
    </section>
  );
}