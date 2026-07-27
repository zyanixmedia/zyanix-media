import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Gigs from "../sections/Gigs";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Team from "../sections/Team";
import Contact from "../sections/contact";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gigs />
      <About />
      <Contact />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
};

export default Home;