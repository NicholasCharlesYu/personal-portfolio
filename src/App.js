import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
