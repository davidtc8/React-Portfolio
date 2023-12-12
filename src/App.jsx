import Topbar from "./components/topbar/topbar";
import Menu from "./components/menu/menu";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from './components/works/works'
import Contact from './components/contact/contact'
import { useState } from "react";
import './app.scss'


function App() {
  // For the hamburger
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
