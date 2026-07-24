import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Gigs from "../sections/Gigs";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/contact";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gigs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;