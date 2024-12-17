import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';  // No need to import Router here

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content"> {/* This ensures footer stays at the bottom */}
        <Routes>  {/* Use Routes and Route to define navigation */}
          <Route path="/" element={<Header />} />  {/* Home Route */}
          <Route path="/projects-dev" element={<Projects />} />  {/* Projects Route */}
          <Route path="/contact" element={<Contact />} />  {/* Contact Route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;