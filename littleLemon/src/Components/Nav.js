import { useState } from 'react';
import Navigation from './Navigation';
import hamburger from '../likeness/hamburger.png';
import Close from '../likeness/close.png';


function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen)
  }
  return(
    <nav>
      <nav className='burger'>
        <img src={require('../likeness/nav-logo.png')}
          alt='Little Lemon Logo'
          className=''>
        </img>
        <button className="burger-icon" onClick = {handleToggle}>
          <img src={navbarOpen ? Close : hamburger} alt="Navigation Bar"/>
        </button> 
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  );
}


export default Navbar;