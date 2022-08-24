import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home /> } key="" />
            <Route exact path="/projects" element={ <Projects /> } key="projects" />
            <Route exact path="/achievements" element={ <Achievements /> } key="achievements" />
            <Route exact path="/about" element={ <About /> } key="about" />
            <Route exact path="/contactUs" element={ <ContactUs /> } key="contactUs" />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
