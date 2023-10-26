import { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { getRooms } from "../../Utils/Rooms/GetRooms";
import { PacmanLoader } from "react-spinners";
import { useUpdates } from "../../Utils/UpdatesContext";

export default function Header(){
    const [rooms, setRooms] = useState([]);
    const {updates, setUpdates} = useUpdates();
    useEffect(() => {
        getRooms(setUpdates)
        .then((data) => setRooms(data.data));
    }, [])

return(
<div className='footer'>
    <div className='head'>
        <span className='links'>
            <p>OUR HOTELS</p>
            {
              updates == 'loading' ?
              <PacmanLoader color="rgba(199, 192, 47, 1)" />  
              :
              rooms.slice(0, 7).map((room) => <Link to={`/Room/${room.CityName}`}>{room.CityName}</Link>)
            }
        </span>
        <span className='logo'>
            <img src={require('../../imgs/logo.png')}></img>
            <img src={require('../../imgs/landing.png')}></img>
            <div className='text'>
                <p>FOUR STARS, <br/>NO CLOUD</p>
            </div>
            <div className='contact'>
                <Link target='_blank' to='https://www.instagram.com/okkohotels/'>
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link target='_blank' to='https://www.facebook.com/OKKO.HOTELS'>
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link target='_blank' to='https://twitter.com/okkohotels'>
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link target='_blank' to='https://www.youtube.com/channel/UCasggtAG7fRPenfE5i2bn2g'>
                    <i className="fas fa-play"></i>
                </Link>
                <Link target='_blank' to='https://www.linkedin.com/company/okko'>
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link target='_blank' to='https://www.pinterest.com/okkohotels/'>
                    <i className="fab fa-pinterest-p"></i>
                </Link>
            </div>
        </span>
        <span className='links'>
            <p>OUR HOTELS</p>
            {
              updates == 'loading' ?
              <PacmanLoader color="rgba(199, 192, 47, 1)" />    
            :
              rooms.slice(7).map((room) => <Link to={`/Room/${room.CityName}`}>{room.CityName}</Link>)
            }
        </span>
    </div>
</div>
);
}