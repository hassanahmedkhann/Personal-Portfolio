import "./App.css";
import About from "./Components/About/About";
import Cards from "./Components/Card/Cards";
import Dummy from "./Components/Dummy";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Certificates from "./Components/Certification/Certificates";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header id="header" />
        <About id="about" />
        <Quotes />
        <Cards id="work" />
        <Certificates id="crtificates" />
        <Contact id="contactme" />
        <Dummy />
      </Router>
    </div>
  );
}

export default App;
