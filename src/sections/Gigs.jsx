import useSectionAnimation from "../hooks/useSectionAnimation";

const plans = [
  {
    title: "Starter",
    badge: "",
    icon: "🚀",
    features: [
      "4 Social Media Posts",
      "4 Social Media Reels ",
    ],
  },
  {
    title: "Growth",
    badge: "POPULAR",
    icon: "🔥",
    features: [
      "4 Social Media Posts",
      "6 Professional Reels",
      "Written Scripts",
      "Priority Support",
    ],
  },
  {
    title: "Business",
    badge: "",
    icon: "💼",
    features: [
      "6 Social Media Posts",
      "10 Professional Reels",
      "Written Scripts",
      "Monthly Content",
      "Content Planning",
    ],
  },
  {
    title: "Enterprise",
    badge: "",
    icon: "👑",
    features: [
      "8 Social Media Posts",
      "12 Professional Reels",
      "Written Scripts",
      "Content Planning",
      "Dedicated Team",
      "Complete Brand Management",
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
        <div className="starting-prices">

 
</div>
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