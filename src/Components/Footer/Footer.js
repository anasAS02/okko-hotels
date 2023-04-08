import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <div className='footer'>
            <div className='head'>
                <span className='info'>
                    <p>INFORMATION</p>
                    <Link to=''>OKKO HOTELS company</Link>
                    <Link to=''>Contact us</Link>
                    <Link to=''>Our loyalty program</Link>
                    <Link to=''>FAQ</Link>
                    <Link to=''>Disabled access</Link>
                    <div>
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
                <span className='logo'>
                    <img src={require('../../imgs/logo.png')}></img>
                    <img src={require('../../imgs/landing.png')}></img>
                    <div className='text'>
                        <p>FOUR STARS, <br/>NO CLOUD</p>
                    </div>
                </span>
                <span className='links'>
                    <p>OUR HOTELS</p>
                    <Link target='_blank' to="/Bayonne">Bayonne Centre</Link>
                    <Link target='_blank' to="/Cannes">Cannes Centre</Link>
                    <Link target='_blank' to="/Grenoble">Grenoble Jardin Hoche</Link>
                    <Link target='_blank' to="/Lille">Lille Centre</Link>
                    <Link target='_blank' to="/Lyon">Lyon Pont Lafayette</Link>
                    <Link target='_blank' to="/Nantes">Nantes Château</Link>
                    <Link target='_blank' to="/Nice">Nice Aéroport</Link>
                    <Link target='_blank' to="/Gare">Paris Gare de l'Est</Link>
                    <Link target='_blank' to="/Defense">Paris La Défense</Link>
                    <Link target='_blank' to="/Versailles">Paris Porte de Versailles</Link>
                    <Link target='_blank' to="/Rueil">Paris Rueil-Malmaison</Link>
                    <Link target='_blank' to="/Strasbourg">Strasbourg Centre</Link>
                    <Link target='_blank' to="/Toulon">Toulon Centre</Link>
                </span>
            </div>
            <div className='text'>
                <Link to=''>Practical Guide for travelers during the COVID-19 outbreak - </Link>
                <Link to=''> Personal data - </Link>
                <Link to=''> Cookie policy - </Link>
                <Link to=''> General terms and conditions of sale -</Link>
                <Link to=''> Legal information - </Link>
                <Link to=''> Cookies - </Link>
            </div>
        </div>
    );
}