import "./App.css";
import About from "./Components/About/About";
import Cards from "./Components/Card/Cards";
import Dummy from "./Components/Dummy";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Certificates from "./Components/Certification/Certificates";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header id="header" />

      <About id="about" />

      <Quotes />

      <Cards id="work" />
      <Certificates id="crtificates" />
      <ScrollAnimation className="scroll" animateIn="bounceInLeft">
        <Contact id="contactme" />
      </ScrollAnimation>
      <Dummy />
    </div>
  );
}

export default App;
