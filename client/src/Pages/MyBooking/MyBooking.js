import './MyBooking.css';
import { useAuth } from '../../Utils/Auth/AuthContext';

export default function MyBooking(){

const { isLoggedIn } = useAuth();

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