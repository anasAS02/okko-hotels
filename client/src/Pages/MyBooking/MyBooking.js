import './MyBooking.css';
import { useAuth } from '../../Utils/Auth/AuthContext';
import { useEffect } from 'react';
import { myBookings } from '../../Utils/Bookings/MyBookings';
import Cookies from 'js-cookie';

export default function MyBooking(){

const { isLoggedIn } = useAuth();
const email = Cookies.get('email');
console.log(email)
useEffect(() => {
    myBookings(email).then((data) => console.log(data));
}, [])

return(
    <div className='booking-container'>
        {isLoggedIn ? 
        <h2>You must be logged in</h2> :
            <div className='booking-table'>

            </div>
        }
    </div>    
)
}