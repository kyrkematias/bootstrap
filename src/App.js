import NavBar from "./NavBar";
import Banner from "./Banner";
import { Skills } from "./Skills";
import {Projects} from "./Projects";
import { Contact } from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Footer } from "./Fotter";


function App() {
  return (
    <div>
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
