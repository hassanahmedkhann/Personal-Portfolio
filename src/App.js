import "./App.css";
import About from "./Components/About/About";
import Cards from "./Components/Card/Cards";
import Dummy from "./Components/Dummy";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Certificates from "./Components/Certification/Certificates";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header id="header" />
      <About id="about" />
      <Quotes />
      <Cards id="work" />
      <Certificates id="crtificates" />
      <Contact id="contactme" />
      <Dummy />
    </div>
  );
}

export default App;
