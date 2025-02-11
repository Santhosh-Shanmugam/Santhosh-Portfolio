import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Education />
      <Skills/>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
