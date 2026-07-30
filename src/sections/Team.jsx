import useSectionAnimation from "../hooks/useSectionAnimation";

const members = [
  {
    name: "Shahul Hameed Irshath",
    role: "Founder & Creative Director",
    image: "/sha1.png",
  },
  {
    name: "Ram Prasath",
    role: "Data Handling",
    image: "/ram.png",
  },
  {
    name: "Yapase",
    role: "Camera Operator",
    image: "/yaps.png",
  },
  {
    name: "Mohan Priyan",
    role: "(J) graphic designer,editor",
    image: "/mohan.png",
  },
  {
    name: "Akshay",
    role: "Social Media Handling Executive",
    image: "/akshai.png",
  },
  {
    name: "Ravi Varman",
    role: "content writting & marketing lead ",
    image: "/ravi.png",
  },
  {
    name: "Prateesh",
    role: "(J) graphic designer,editor",
    image: "/prateesh.png",
  },
  {
    name: "Harish",
    role: "Client Acquisition Executive",
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