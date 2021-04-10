import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Route exact path="/" components={Header}><Header/></Route>
        <Route exact path="/about" components={About} ><About/></Route>
        <Route exact path="/projects" components={Projects}><Projects /></Route>
        <Route exact path="/contact" components={ Contact}><Contact/></Route>
        
      </Router>
      <Footer />
    </>
  );
}

export default App;
