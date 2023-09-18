import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Home from './Pges/Home';
import About from './Pges/About'; // Import the About component (create this component)
import Projects from './Pges/Projects';
import Contact from './Pges/Contact';
import Resume from './Pges/Resume';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/projects" element={<Projects />} /> {/* About page */}
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/resume" element={<Resume />} />{/* About page */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
