import logo from './components/images/logo.svg';
import './App.css';
import Hero from './components/components-js/Hero'
import Navbar from './components/components-js/Navbar';
import About from './components/components-js/About';
import Footer from './components/components-js/Footer';
import Contact from './components/components-js/Contact';
import Projects from './components/components-js/Projects';
import './components/components-css/About.css'
import './components/components-css/Contact.css'
import './components/components-css/Hero.css'
import './components/components-css/Navbar.css'
import './components/components-css/Projects.css'
import './components/components-css/Footer.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}


export default App;
