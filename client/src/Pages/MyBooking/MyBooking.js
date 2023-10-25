import './MyBooking.css';
import Header from '../../Components/Header/Header';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Utils/Auth/AuthContext';

export default function MyBooking(){

const reservations = JSON.parse(window.localStorage.getItem('reservations'));
const { isLoggedIn } = useAuth();

return(
    <div className='my-booking'>
        <Header />
        {isLoggedIn ?
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>City</th>
                <th>Adults</th>
                <th>Arrival date</th>
                <th>Departure time</th>
                <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {reservations && reservations.map((booking, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{booking['city']}</td>
                        <td>{booking['adults']}</td>
                        <td>{booking['arrival']}</td>
                        <td>{booking['departure']}</td>
                        <td>{booking['totalPrice']} €</td>
                    </tr>
                ))}
            </tbody>
        </Table> 
    : 
        <div className='login-box'>
            <h2>You must be logged in</h2>
            <Link to='/login'>Login</Link>
        </div>
    }
    </div>
)
}