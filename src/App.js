import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
