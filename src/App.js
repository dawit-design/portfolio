import Navbar from './components/Navbar'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
            density: {
              enabled: true,
              value_area: 900
            }
          },
            shape: {
              type: 'star',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
      }}
      />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
