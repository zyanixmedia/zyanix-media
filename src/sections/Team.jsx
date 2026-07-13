import useTeamAnimation from "../hooks/useTeamAnimation";

const Team = () => {
  useTeamAnimation();

  const team = [
    {
      name: "Shahul",
      role: "Senior Editor / Designer",
      icon: "👑",
      image: "/sha1.png",
    },
    {
      name: "Ram",
      role: "Content Creator & Social Media Handling",
      icon: "🎨",
      image: "/ram.png",
    },
    {
      name: "Yapase",
      role: "Camera Man",
      icon: "📸",
      image: "/yaps.png",
    },
    {
      name: "Mohan",
      role: "Junior Editor",
      icon: "✂️",
      image: "/mohan.png",
    },
    {
      name: "Akshai",
      role: "Data & Social Media Handling",
      icon: "📊",
      image: "/akshai.png",
    },
    {
      name: "Prateesh",
      role: "Brand Strategist",
      icon: "🚀",
      image: "/prateesh.png",
    },
    {
      name: "Harish",
      role: "Content Creator",
      icon: "✏️",
      image: "/harish.png",
    },
    {
      name: "Ravi",
      role: "Marketing Lead",
      icon: "📈",
      image: "/ravi.png",
    },
  ];

  return (
    <section id="team" className="team">
      <div className="team-header">
        <span className="section-tag">
          OUR TEAM
        </span>

        <h2>
          Meet The <span>ZYANIX Team.</span>
        </h2>

        <p>
          A passionate group of creators,
          designers and developers building
          world-class digital experiences.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div
            className="team-card"
            key={index}
          >
            <div className="team-role-icon">
              {member.icon}
            </div>

            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />

            <h3>{member.name}</h3>

            <span>{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;