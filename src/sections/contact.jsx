const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">

        <span className="section-tag">
          CONTACT US
        </span>

        <h2>
          Let's Build
          <span> Something Great.</span>
        </h2>

        <p>
          Have an idea, brand, startup, or project?
          Let's discuss how we can bring it to life.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;