import './MyBooking.css';
import { useAuth } from '../../Utils/Auth/AuthContext';
import { useEffect, useState } from 'react';
import { myBookings } from '../../Utils/Bookings/MyBookings';
import { getStatus } from '../../Utils/Bookings/getStatus';
import Cookies from 'js-cookie';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

export default function MyBooking(){
const { isLoggedIn } = useAuth();
const email = Cookies.get('email');
const [ bookings, setBookings ] = useState([]);

useEffect(() => {
    myBookings(email).then((data) => setBookings(data));
}, [bookings, setBookings])

return(
    <>
    <Header />
    {bookings && bookings.length < 1 ? <h2 className='booking-h2'>You have no reservations.</h2>
    :
    <div className='booking-container'>
        <Link to='/' style={{color: 'black'}}>Go back</Link>
        {isLoggedIn ? 
        <div className='booking-table'>
        { bookings && bookings.length > 0 && bookings.map((booking) => (
            <div key={booking._id} className='box'>
                <p><i className="fa-solid fa-hotel"></i> {booking.roomCity}</p>
                <p><i className="fa-solid fa-plane-arrival"></i> {booking.checkInDate}</p>
                <p><i className="fa-solid fa-plane-departure"></i> {booking.checkOutDate}</p>
                <p><i className="fa-solid fa-sack-dollar"></i> ${booking.bookingAmount}</p>
                <p className={`status ${getStatus(booking.checkInDate, booking.checkOutDate)}`}>{getStatus(booking.checkInDate, booking.checkOutDate)}</p>
            </div>    
        ))
        }
        </div>
        :
        <h2 className='booking-h2'>You must be logged in, <Link to='/login'>Login</Link></h2>
        }
    </div>
    }
    </>
)
}