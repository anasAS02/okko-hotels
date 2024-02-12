import './Header.css';
import './Menu.css';
import './Search.css';
import Search from '../Search/Search';
import Logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRooms } from '../../Utils/Rooms/GetRooms';
import { useAuth } from '../../Utils/Auth/AuthContext';
import { handleLogout } from '../../Utils/Auth/Auth';
import Cookies from 'js-cookie';
import { useUpdates } from '../../Utils/UpdatesContext';
import { PacmanLoader } from 'react-spinners';

export default function Header() {
const [isMenuActive, setIsMenuActive] = useState(false);
const [isSearchActive, setIsSearchActive] = useState(false);
const [rooms, setRooms] = useState([]);
const token = Cookies.get('token');
const role = Cookies.get('role');

const {isLoggedIn, setIsLoggedIn} = useAuth();
const {updates, setUpdates} = useUpdates();

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
  getRooms(setUpdates)
  .then((data) => setRooms(data.data));

  showDelayAlert();

  if(token){
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }

  const refreshToken = () => {
    console.log('Token');
  }

  const refreshInterval = setInterval(() => {
    refreshToken();
  }, 3480000);

  
  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      setIsSearchActive(false);
      setIsMenuActive(false)
    }
  };

  window.addEventListener('keydown', handleEsc);
  window.addEventListener("scroll", handleScroll);

  return () => {
    clearInterval(refreshInterval);
    window.removeEventListener('keydown', handleEsc);
    window.removeEventListener("scroll", handleScroll);
  };


}, [token]);

const showDelayAlert = () => {
  setTimeout(() => {
    alert("Please note: Data may take a few seconds to load due to server limitations.");
  }, 3000);
};

const [logoWidth, setLogoWidth] = useState("35%");

const handleScroll = () => {
  if (window.scrollY > 250) {
    setLogoWidth("20%");
  } else {
    setLogoWidth("35%");
  }
};

return (
  <span className="con">
    <Search search={isSearchActive} />
    <div className={`list${isMenuActive ? " active" : ""}`}>
          <div className='list-con'>
              <img id='logo' src={Logo} alt='logo..'></img>
              <i className="fa-solid fa-rectangle-xmark close" onClick={deActiveMenu}></i>
              <div className='text'>
              {
              updates === 'loading' ?
              <PacmanLoader color="rgba(199, 192, 47, 1)" /> 
              :
              rooms.map((room) => <Link key={room._id} to={`/Room/${room.CityName}`}>{room.CityName}</Link>)
              }
              </div>
          </div>
      </div>
      
  <div className='header'>
          <div className='menu'>
            <i className="fa-solid fa-bars" onClick={activeMenu}></i>
            {isSearchActive ? 
            <i className="fa-solid fa-xmark" onClick={() => setIsSearchActive(false)}></i>
            : 
            <i className="fa-solid fa-magnifying-glass" onClick={activeSearch}></i>
            }
          </div>

      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='' style={{ width: logoWidth }}></img>
        </Link>
      </div>

      <div className='header-buttons'>
        {role === 'ADMIN' && <Link to='/Dashboard'>Dashboard</Link>}
          <Link to='/MyBooking'>My booking</Link>
          {isLoggedIn ? 
            <button className='button' onClick={handleLogout}>Logout</button>
          :
          <Link to='/login' className='button'>Login</Link>
          }
      </div>
</div>
</span>
);
}