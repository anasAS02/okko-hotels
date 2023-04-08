import "./Home.css";
import Header from '../../Components/Header/Header';
import Landing from '../Landing/Landing';
import Slider from '../../Components/Slider/Slider';
import SliderShop from '../../Components/Slider/SliderShop';
import SliderNews from '../../Components/Slider/SliderNews';
import SliderClub from '../../Components/Slider/SliderClub';
import Footer from '../../Components/Footer/Footer';

import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home">
            <Header />
            <Landing />
            <div className='discover'>
                <div className='text'>
                    <h3>Designer French 4 Stars hotels where <br/> stying is always a pleasure</h3>
                    <span>at okko hotels, every one of our guests is a V.I.P.</span>
                    <p>OKKO HOTELS is an urban four-star hotel concept that has turned the <br/>
                        traditions of the hotel sector upside down. Our pledge? To offer lifestyle hotels <br/>
                        with a contemporary décor, Clubs where you can feel entirely at home, and  <br/>
                        service of the highest quality, all at a fair price. Snacks, hot and cold drinks, an  <br/>
                        evening aperitivo, newspapers, a health and well-being area and a sauna are  <br/>
                        all included in the price of your room. "Four stars, no cloud”: it is now a reality  <br/>
                        at OKKO HOTELS!
                    </p>
                    <Link to=''>Discover</Link>
                </div>
                <div className='image'>
                    <img src={require('../../imgs/discover.png')} alt=''></img>
                </div>
            </div>

            <div className='rooms'>
                <div className='text'>
                    <h3>A real urban concoon</h3>
                    <span>functional and design rooms</span>
                    <p>The room conception is the basis of the hotel business. But sometimes, make things simple
                        is very complicated! The Okko Hotels team chose to tear up the rulebook for 4* hotels to conceive a functional and design
                        space, a real urban cocoon of 17 m ², which meets the needs of today's travelers.
                    </p>
                </div>
                <div className='con'>
                    <div className='box box-1'>
                        <img className='logo' src='https://www.okkohotels.com/media/195/Groupe/Logos/logo-okko-1.0.svg' alt=''></img>
                        <span>
                            1.0
                        </span>
                        <p>design by pnorguet</p>
                    </div>
                    <div className='box box-2'>
                        <img className='logo' src='https://www.okkohotels.com/media/195/Groupe/Logos/logo-okko-2.0.svg' alt=''></img>
                        2.0
                        <p>design by catoir</p>
                    </div>
                </div>
                <Link to=''>see the Rooms</Link>
            </div>

            <div className='club'>
                <div className='slider'>
                    <SliderClub imgOne={require('../../imgs/1-club.jpg')} imgTwo={require('../../imgs/2-club.jpg')} imgThree={require('../../imgs/3-club.jpg')} imgFour={require('../../imgs/4-club.jpg')}/>
                </div>
                <div className='text'>
                    <div className='head'>
                        <p>a window on the city</p>
                        <h3>The Club, disign & friendly</h3>
                    </div>
                    <div className='info'>
                        <p>Relax, eat or work ... this welcoming space is
                            made to answer all your desires
                            throughout the day!</p>
                        <span>Spending time in the club without staying at
                            the hotels It is possible!
                        </span>
                    </div>
                    <Link to=''>Discover le club</Link>
                </div>
            </div>

            <div className='form'>
                <div className='text'>
                    <span>EVENTS, FOLLOW THE GUIDE!</span>
                    <h3>My event at OKKO HOTELS</h3>
                    <p>Whether there are meeting rooms or not in the hotel, our teams
                        have set up partnerships with meeting rooms adapted to any type
                        of event.
                    </p>
                    <Link to=''>Our Form</Link>
                </div>
                <div className='image'>
                    <img src={require('../../imgs/event-home.jpg')} alt=''></img>
                </div>
            </div>

            <div className='shop'>
                <div className='head'>
                    <h3>The Shop</h3>
                    <p>okko hotels favourites</p>
                    <span>OKKO HOTELS is offering its guests the opportunity to own a piece of the design atmosphere created
                        in its rooms and Clubs. Guests can now find their favourite items in just a few clicks at the 
                        online boutique.
                    </span>
                </div>
                <SliderShop />
                <Link className='buy' to=''>buy</Link>
            </div>

            <div className='news'>
            <div className='slider'>
                <SliderNews imgOne={require('../../imgs/1-news.jpg')} imgTwo={require('../../imgs/2-news.jpg')} imgThree={require('../../imgs/3-news.jpg')} imgFour={require('../../imgs/4-news.jpg')} imgFive={require('../../imgs/5-news.jpg')} imgSix={require('../../imgs/6-news.jpg')} imgSeven={require('../../imgs/7-news.jpg')}/>
            </div>
                <div className='text'>
                    <h3>The News</h3>
                    <p>Receive OKKO HOTELS news directly in your mailbox.</p>
                    <Link className='buy' to=''>Discover</Link>
                <div className='form-news'>
                    <input type='email' placeholder='Your Email'></input>
                    <p>Your data is collected in order to send you our news. You
                        have a right of access, rectification, deletion, limitation,
                        portability of your data and can object at any time to
                        their processing for marketing purposes by contacting us
                        at privacy@okkohotels.com. To find out more, you can
                        consult our personal data protection policy.</p>
                    <input type='submit'></input>
                </div>
                </div>
            </div>

            <div className='follow'>
                <div className='head'>
                    <p>Follow Us</p>
                    <Link target='_blank' to='https://www.instagram.com/okkohotels/'>@OKKOHOTELS</Link>
                </div>
                <div className='imgs'>
                    <img src={require('../../imgs/1-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/2-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/3-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/4-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/5-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/6-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/7-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/8-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/9-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/10-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/11-follow.jpg')} alt=''></img>
                    <img src={require('../../imgs/12-follow.jpg')} alt=''></img>
                </div>
            </div>

            <div className='gallery'>
                <Slider imgOne={require('../../imgs/1-footer.jpg')} imgTwo={require('../../imgs/2-footer.jpg')} imgThree={require('../../imgs/3-footer.jpg')} />
            </div>
            <Footer />
        </div>
    );
}
