import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Team from "../sections/Team";
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
       <Team />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;