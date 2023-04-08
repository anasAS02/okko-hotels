import Table from 'react-bootstrap/Table';
import './MyBooking.css';
import { useContext } from 'react';
import{loginContext} from '../../App';

import { Link } from 'react-router-dom';


export default function MyBooking(){


    const hotel = JSON.parse(window.localStorage.getItem('hotel'));
    const adults = JSON.parse(window.localStorage.getItem('adults'));
    const arrival = JSON.parse(window.localStorage.getItem('arrival'));
    const departure = JSON.parse(window.localStorage.getItem('departure'));
    const totalPrice = JSON.parse(window.localStorage.getItem('totalPrice'));


    const login = useContext(loginContext);


    return(
    <div className='my-booking'>
        {login ?
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Hotel</th>
                <th>Adults</th>
                <th>Arrival date</th>
                <th>Departure time</th>
                <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>{hotel}</td>
                <td>{adults}</td>
                <td>{arrival}</td>
                <td>{departure}</td>
                <td>{totalPrice} €</td>
                </tr>
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