import './MyBooking.css';
import { useAuth } from '../../Utils/Auth/AuthContext';
import { useEffect, useState } from 'react';
import { myBookings } from '../../Utils/Bookings/MyBookings';
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

const getStatus = (checkinDate, checkoutDate) => {
    const checkOutDate = new Date(checkoutDate);
    const checkInDate = new Date(checkinDate);
    const today = Date.now();
    const timeDifferenceToEnd = checkOutDate - today;
    const daysLeftToEnd = Math.floor(timeDifferenceToEnd / (1000 * 60 * 60 * 24));

    const timeDifferenceToStart = checkInDate - today;
    const daysLeftToStart = Math.floor(timeDifferenceToStart / (1000 * 60 * 60 * 24));

    let status;

    if(daysLeftToEnd > 0){
        status = 'Active';
    }else if(daysLeftToStart > 0){
        status = 'Upcoming';
    }else{
        status = 'Completed';
    }
    return status;
}

return(
    <>
    <Header />
    <div className='booking-container'>
        <Link to='/' style={{color: 'black'}}>Go back</Link>
        {isLoggedIn ? 
        <div className='booking-table'>
        { bookings.length > 0 && bookings.map((booking) => (
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
        <h2>You must be logged in, <Link to='/login'>Login</Link></h2>
        }
    </div>
    </>
)
}