import './Room.css';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Stars from '../../imgs/landing.png'
import Footer from '../../Components/Footer/Footer';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRoom } from '../../Utils/Rooms/GetRoom';
import { useBooking } from '../../Utils/Rooms/BookingContext';
import Cookies from 'js-cookie';
import PaypalCheckoutButton from '../PayPal/PaypalCheckoutButton';

export default function Room(){

const { CityName } = useParams();
const[room, setRoom] = useState([]);
const firstName = Cookies.get('firstName');
const email = Cookies.get('email');

useEffect(() => {
    getRoom(CityName)
    .then((data) => setRoom(data.data[0]));
}, [CityName])

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`
}

function getMinDepartureDate(arrivalDate){
    const arrival = new Date(arrivalDate);
    const year = arrival.getFullYear();
    const month = String(arrival.getMonth() + 1).padStart(2, '0');
    const departureDate = String(arrival.getDate() + 1).padStart(2, '0');

    return `${year}-${month}-${departureDate}`;
}

const[arrival, setArrival] = useState(getTodayDate());
const[departure, setDeparture] = useState(getMinDepartureDate(arrival));
const[adult, setAdult] = useState(1);

const handleArrivalDate = (e) => {
    const newArrivalDate = e.target.value;
    setArrival(newArrivalDate);
    setDeparture(getMinDepartureDate(newArrivalDate));
}

function increaseAdult(adult){
    let num = adult => (adult += 1);
    setAdult(num)
}

function decreaseAdult(adult){
    let num = adult => (adult <= 0 ? setAdult(0) : (adult -= 1));
    setAdult(num)
}

const dateOne = new Date(arrival);
const dateTwo = new Date(departure);
const time = Math.abs(dateOne - dateTwo);
const days = Math.ceil(time / (1000 * 60 * 60 * 24));
const amount = (days * room.price) * adult;

const [checkout, setCheckout] = useState(false);

const bookingDetails = {
    firstName,
    email,
    roomCity: room.CityName,
    numberOfAdults: adult,
    checkInDate: arrival,
    checkOutDate: departure,
    numberOfDays: days,
    bookingAmount: amount
};

const { booking, setBooking } = useBooking();

return(
    <div className='room'>
        <Header />
        <Slider imgOne={room.imgOne} imgTwo={room.imgTwo} imgThree={room.imgThree}/>
        <div className='dates'>
        {checkout ? <span className='paypal-checkout-btn'><PaypalCheckoutButton booking={booking}/> </span>:
            <div className='booking-data'>
                <div className="arrival">
                    <p>ARRIVAL</p>
                    <input type="date" value={arrival} onChange={handleArrivalDate} min={getTodayDate()}></input>
                </div>

                <div className="departure">
                    <p>DEPARTURE</p>
                    <input type="date" value={departure} onChange={ (e) => setDeparture(e.target.value)} min={getMinDepartureDate(arrival)}></input>
                </div>

                <div className='adults'>
                    <p>ADULTS</p>
                    <span>
                        <i className="fa-solid fa-minus" onClick={decreaseAdult}></i>
                        {adult}
                        <i className="fa-solid fa-plus" onClick={increaseAdult}></i>
                    </span>
                </div>
                <button className='book-btn' onClick={() => {setBooking(bookingDetails); setCheckout(true);}}>Book</button>
            </div>
        }
        </div>
        <div className='title'>
            <h3>OKKO Hotels {room.CityName} Centre</h3>
            <img src={Stars}></img>
            <p>four Stars and no clouds</p>
        </div>
        <div className='discover'>
            <div className='text'>
                <h3>{room.title}</h3>
                <span>{room.info}</span>
                <p>{room.roomDetails}</p>
                <Link to=''>Discover</Link>
            </div>
        <Slider imgOne={room.imgOne} imgTwo={room.imgTwo} imgThree={room.imgThree}/>
        </div>
        <div className='features'>
            <div className='head'>
                <h2>OKKO Hotels +</h2>
                <p>services included during your stay</p>
            </div>
            <div className='con'>
                <span>
                    <i className="fa-solid fa-wifi"></i>
                    Free wifi everywhere in the hotel
                </span>
                <span>
                    <i className="fa-solid fa-dumbbell"></i>
                    Gym: from 7 am to 10 pm
                </span>
                <span>
                    <i className="fa-solid fa-bacon"></i>
                    Snacking
                </span>
                <span>
                    <i className="fa-solid fa-bag-shopping"></i>
                    Local products
                </span>
                <span>
                    <i className="fa-solid fa-land-mine-on"></i>
                    Club: 24-hour access
                </span>
                <span>
                    <i className="fa-solid fa-paw"></i>
                    Animals on request (without extra charge)
                </span>
            </div>
        </div>
        <div className='details'>
        <Slider imgOne={room.imgFour} imgTwo={room.imgFive} imgThree={room.imgSix}/>
            <div className='info'>
                <h3>{room.roomTitle}</h3>
                <span>{room.roomInfo}</span>
                <p>{room.roomDetails}</p>
                <Link to=''>The Rooms</Link>
            </div>
        </div>
        <Footer />
    </div>
    )
}