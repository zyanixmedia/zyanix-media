import useSectionAnimation from "../hooks/useSectionAnimation";

const plans = [
  {
    title: "Starter",
    badge: "",
    icon: "🚀",
    features: [
      "1 Social Media Post",
      "Basic Graphic Design",
      "Fast Delivery",
      "Email Support",
    ],
  },
  {
    title: "Growth",
    badge: "POPULAR",
    icon: "🔥",
    features: [
      "4 Social Media Posts",
      "2 Professional Reels",
      "Brand Strategy",
      "Priority Support",
    ],
  },
  {
    title: "Business",
    badge: "",
    icon: "💼",
    features: [
      "Monthly Content",
      "Professional Video Editing",
      "Poster Designs",
      "Content Planning",
    ],
  },
  {
    title: "Enterprise",
    badge: "",
    icon: "👑",
    features: [
      "Complete Brand Management",
      "Website Development",
      "UI/UX Design",
      "Motion Graphics",
      "Dedicated Team",
    ],
  },
];

export default function Gigs() {
  const ref = useSectionAnimation();

  return (
    <section className="gigs" id="gigs" ref={ref}>
      <div className="gigs-header">
        <span className="section-tag">OUR SOLUTIONS</span>

        <h2>
          Creative <span>Service Plans</span>
        </h2>

        <p>
          Every business is different. We create customized digital solutions
          that fit your goals. Contact us to receive a personalized quotation.
        </p>
      </div>

      <div className="gigs-grid">
        {plans.map((plan) => (
          <div className="gig-card" key={plan.title}>
            {plan.badge && (
              <div className="gig-badge">
                {plan.badge}
              </div>
            )}

            <div className="gig-icon">
              {plan.icon}
            </div>

            <h3>{plan.title}</h3>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="gig-btn"
            >
              Contact For Quote
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}