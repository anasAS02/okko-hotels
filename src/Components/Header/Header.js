import './Header.css';
import './Menu.css';
import './Search.css';
import Search from '../Search/Search';
import Logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import{loginContext} from '../../App';

export default function Header() {
const [isMenuActive, setIsMenuActive] = useState(false);
const [isSearchActive, setIsSearchActive] = useState(false);
const login = useContext(loginContext);

function logout(){
    localStorage.removeItem('isUserLoggedIn');
    window.location.pathname = '/';
}

function activeMenu(){
  setIsMenuActive(true);
  setIsSearchActive(false);
}

function deActiveMenu(){
  setIsMenuActive(false);
}

function activeSearch(){
  setIsMenuActive(false);
  setIsSearchActive(true);
}

useEffect(() => {
  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      setIsSearchActive(false);
    }
  };

  window.addEventListener('keydown', handleEsc);

  return () => {
    window.removeEventListener('keydown', handleEsc);
  };

}, []);

const [logoWidth, setLogoWidth] = useState("35%");
const [saleHide, setSaleHide] = useState("");

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScroll = () => {
  if (window.scrollY > 250) {
    setLogoWidth("20%");
    setSaleHide("none");
  } else {
    setLogoWidth("35%");
    setSaleHide("block");
  }
};

return (
  <span className="con">
    <Search search={isSearchActive} />

    <div className={`list${isMenuActive ? " active" : ""}`}>
      <div className='left-side'>
        <div className='head'>
          <Link to="">RÉSERVER</Link>
          <p id='sale'>Offres <span> -10% </span> et tarifs exclusifs <br/> disponibles</p>
        </div>
          <div className='text'>
              <p>YOUR STAY 4* AND NO CLOUDS</p>
              <Link to=''>Our rooms</Link>
              <Link to=''>The club and its services</Link>
              <Link to=''>Restaurant</Link>
              <Link to=''>Gallery</Link>
              <Link to=''>Groups & Events</Link>
              <Link to=''>10% off web offer</Link>
              <Link to=''>The company</Link>
              <Link to=''>Press contact</Link>
              <Link to=''>The news</Link>
              <Link to=''>Contact us</Link>
          </div>
        </div>
          <div className='right-side'>
              <img id='logoo' src={Logo}></img>
              <i className="fa-solid fa-rectangle-xmark close" onClick={deActiveMenu}></i>
              <div className='text'>
                  <Link to="/Bayonne">Bayonne Centre</Link>
                  <Link to="/Cannes">Cannes Centre</Link>
                  <Link to="/Grenoble">Grenoble Jardin Hoche</Link>
                  <Link to="/Lille">Lille Centre</Link>
                  <Link to="/Lyon">Lyon Pont Lafayette</Link>
                  <Link to="/Nantes">Nantes Château</Link>
                  <Link to="/Nice">Nice Aéroport</Link>
                  <Link to="/Gare">Paris Gare de l'Est</Link>
                  <Link to="/Defense">Paris La Défense</Link>
                  <Link to="/Versailles">Paris Porte de Versailles</Link>
                  <Link to="/Rueil">Paris Rueil-Malmaison</Link>
                  <Link to="/Strasbourg">Strasbourg Centre</Link>
                  <Link to="/Toulon">Toulon Centre</Link>
              </div>
              <div className='sale'>
                  <i className="fa-solid fa-ticket-simple"></i>
                  <Link to=''>The <br/>Shop</Link>
              </div>
          </div>
      </div>
  <div className='header'>
      <div className='start'>
          <div className='menu'>
            <i className="fa-solid fa-bars" onClick={activeMenu}></i>
            <i className="fa-solid fa-magnifying-glass" onClick={activeSearch}></i>
          </div>
        </div>

      <div className='logo'>
          <img src={Logo} alt='' style={{ width: logoWidth }}></img>
      </div>

      <div className='end'>
          <Link to='/MyBooking'>My booking</Link>
          {login ? 
          <button className='logoutBtn' onClick={logout}>Logout</button>
          :
          <Link to='/login'>Login</Link>
          }
          <Link>EN
            <span className='languages'>
              <p className='fr'>Français</p>
              <p>English</p>
            </span>
          </Link>
      </div>
  <p className='sale' style={{ display: saleHide }}><span>-10%</span> off offers and exclusive rates available</p>
</div>
</span>
);
}