import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import ProjectGallery from "./pages/ProjectGallery.js";
import Contact from "./pages/Contact.js";
import Header from './components/Header';
import Project from './components/Project';


function App() {
  return (
    <Router>
      <body>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
