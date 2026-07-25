import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyTFOLjO42aGHfqOyM7tVW0FMavg2q_y3JuAZjrsPrn9kS_Dp4PITmOEVzzXAgHRZFt/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Thank you! Your enquiry has been sent.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send your enquiry.");
    }

    setLoading(false);
  };

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

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Video Editing</option>
            <option>Graphic Design</option>
            <option>Branding</option>
            <option>Personal content shooting</option>
            <option>Running adds</option>
            <option>Social Media Management</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Estimated Budget</option>
            <option>Under ₹6,000</option>
            <option>₹6,000 - ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>₹20,000+</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;