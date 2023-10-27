import './Dashboard.css'
import Cookies from "js-cookie"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUpdates } from '../../Utils/UpdatesContext';
import { ADD_USER, DELETE_USER, GET_BOOKINGS, GET_ROOMS, GET_USERS } from '../../Utils/Apis';
import { FadeLoader } from 'react-spinners';
import axios from 'axios';
import { config } from '../../Utils/Config';
import { getStatus } from '../../Utils/Bookings/getStatus';

export default function Dashboard(){
    const role = Cookies.get('role');
    const email = Cookies.get('email');

    const [activeDetails, setActiveDetails] = useState(true);
    const [activeRooms, setActiveRooms] = useState(false);
    const [activeBookings, setActiveBookings] = useState(false);
    const [activeUsers, setActiveUsers] = useState(false);
    const {updates, setUpdates} = useUpdates();
    const [successMsg, setSuccessMsg] = useState(null);
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get(GET_USERS, config)
        .then((data) => {setUsers(data.data.data.users); setAdmins(data.data.data.admins)});

        axios.get(GET_ROOMS, config)
        .then((data) => setRooms(data.data.data));

        axios.get(GET_BOOKINGS, config)
        .then((data) => setBookings(data.data.data));
    }, [])

    const[form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
        country: '',
        role: 'USER',
    })

    const handleFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }

    const handleAddUser = async (event, form) => {
        event.preventDefault();
        setUpdates('loading');
        try{
            await axios.post(ADD_USER, form, config).then((data) => {
                setUsers(data.data.data.users);
                setAdmins(data.data.data.admins);
            })
            setUpdates(null);
            setSuccessMsg('User has been Created !');
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                emailConfirm: '',
                password: '',
                passwordConfirm: '',
                country: '',
                role: 'USER',
            })
            setTimeout(() => {
                setSuccessMsg(null)
            }, 3000)
        }catch(err){
            console.log(err);
            setUpdates(err.response?.data?.message);
        }
    }

    const handleDeleteUser = async (event, email) => {
        event.preventDefault();
        try{
            await axios.post(DELETE_USER, {email}, config).then((data) => {
                setUsers(data.data.data.users);
                setAdmins(data.data.data.admins);
            });
        }catch(err){
            console.log(err);
        }
    }

    const handleActiveDetails = () => {
        setActiveDetails(true);
        setActiveBookings(false);
        setActiveUsers(false);
        setActiveRooms(false);
    }

    const handleActiveRooms = () => {
        setActiveBookings(false);
        setActiveDetails(false);
        setActiveUsers(false);
        setActiveRooms(true);
    }
    
    const handleActiveBookings = () => {
        setActiveRooms(false);
        setActiveDetails(false);
        setActiveUsers(false);
        setActiveBookings(true);
    }
    
    const handleActiveUsers = () => {
        setActiveRooms(false);
        setActiveDetails(false);
        setActiveBookings(false);
        setActiveUsers(true);
    }

    const totalProfit = bookings && bookings.reduce((acc, booking) => {
        acc += booking.bookingAmount;
        return acc;
    }, 0);
    
    const ActiveBookings = bookings && bookings.reduce((acc, booking) => {
        const calculate = getStatus(booking.checkInDate, booking.checkOutDate);
        acc += calculate === 'Active';
        return acc;
    }, 0);
    
    const UpcomingBookings = bookings && bookings.reduce((acc, booking) => {
        const calculate = getStatus(booking.checkInDate, booking.checkOutDate);
        acc += calculate === 'Upcoming';
        return acc;
    }, 0);
    
    const CompletedBookings = bookings && bookings.reduce((acc, booking) => {
        const calculate = getStatus(booking.checkInDate, booking.checkOutDate);
        acc += calculate === 'Completed';
        return acc;
    }, 0);

    // console.log('ActiveBookings', getStatus('2023-10-20', '2023-11-01'))
    // console.log('UpcomingBookings', getStatus('2023-10-31', '2023-11-01'))
    // console.log('CompletedBookings', getStatus('2023-10-21', '2023-10-23'))
    console.log('ActiveBookings', ActiveBookings)
    console.log('UpcomingBookings', UpcomingBookings)
    console.log('CompletedBookings', CompletedBookings)
    return(
        role === 'ADMIN' &&
        <div className='dashboard'>
            <nav>
                <Link to='/'>Home</Link>
                <button className={`${activeDetails ? ' active' : ''}`} onClick={handleActiveDetails}>Details</button>
                <button className={`${activeRooms ? ' active' : ''}`} onClick={handleActiveRooms}>Rooms</button>
                <button className={`${activeBookings ? ' active' : ''}`} onClick={handleActiveBookings}>Bookings</button>
                <button className={`${activeUsers ? ' active' : ''}`} onClick={handleActiveUsers}>Users</button>
            </nav>
            {activeDetails &&
            <div className='all-details'>
                <span className='box'>
                    <h2>Active Bookings: </h2>
                    <h5>{ActiveBookings}</h5>
                </span>
                <span className='box'>
                    <h2>Upcoming Bookings: </h2>
                    <h5>{UpcomingBookings}</h5>
                </span>
                <span className='box'>
                    <h2>Completed Bookings: </h2>
                    <h5>{CompletedBookings}</h5>
                </span>
                <span className='box'>
                    <h2>Total Profit: </h2>
                    <h5>${totalProfit}</h5>
                </span>
            </div>
            }
            {activeRooms &&
            <div className='all-rooms'>
                {rooms && rooms.map((room) => (
                    <span key={room._id}>
                        <Link to={`/room/${room.CityName}`}>
                            <i className="fa-solid fa-hotel"></i>
                            {room.CityName}
                        </Link>
                        <img src={room.imgOne} alt='room'/>
                    </span>
                ))
                }
            </div>
            }
            {activeBookings &&
            <div className='all-bookings'>
                {
                bookings && bookings.map((booking) => (
                    <span key={booking._id}>
                        <span><i className="fa-solid fa-user"></i> {booking.firstName} | {booking.email}</span>
                        <span><i className="fa-solid fa-hotel"></i> {booking.roomCity}</span>
                        <span><i className="fa-solid fa-plane-arrival"></i> {booking.checkInDate}</span>
                        <span><i className="fa-solid fa-plane-departure"></i> {booking.checkOutDate}</span>
                        <span><i className="fa-regular fa-calendar-check"></i> {booking.createdAt.split('T')[0]}</span>
                        <span><i className="fa-solid fa-sack-dollar"></i> ${booking.bookingAmount}</span>
                        <span className={`status ${getStatus(booking.checkInDate, booking.checkOutDate)}`}>{getStatus(booking.checkInDate, booking.checkOutDate)}</span>
                    </span>
                ))
                }
            </div>
            }
            {
                activeUsers &&
                <div className='all-users'>
                    <div className='add-user'>
                        <input autoFocus required type='text' name='firstName' placeholder='First Name' value={form.firstName} onChange={handleFormChange}  />
                        <input required type='text' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleFormChange}  />
                        <input required type='email' placeholder='alex@gmail.com' name='email' value={form.email} onChange={handleFormChange}  />
                        <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}  />
                        <input required type='text' placeholder='country' name='country' value={form.country} onChange={handleFormChange} />
                        <select name="role" onChange={handleFormChange}>
                        <option selected name='USER' value= 'USER'>USER</option>
                        <option name='ADMIN' value= 'ADMIN'>ADMIN</option>
                        </select>
                        {updates === 'loading' ?
                        <FadeLoader color="#dbdb2b"/>:
                        <button className='register-btn' onClick={(event) => handleAddUser(event, form)}>Add</button>
                        }
                        {updates && updates !== 'loading' && <p className='errMsg'>{updates}</p>}
                        {successMsg && <p className='successMsg'>{successMsg}</p>}
                    </div>
                    <div className='users'>
                        {admins && admins.map((admin) => (
                            <span key={admin._id}>
                                <span><i className="fa-solid fa-user"></i> {admin.firstName} {admin.lastName} | {admin.email}</span>
                                <span><i className="fa-solid fa-earth-americas"></i> {admin.country}</span>
                                <span>{admin.role}</span>
                                <span>{email !== admin.email && <i className="delete fa-solid fa-trash" onClick={(event) => handleDeleteUser(event, admin.email)}></i>}</span>
                            </span>
                        ))}
                        {users && users.map((user) => (
                            <span key={user._id}>
                                <span><i className="fa-solid fa-user"></i> {user.firstName} {user.lastName} | {user.email}</span>
                                <span><i className="fa-solid fa-earth-americas"></i> {user.country}</span>
                                <span>{user.role}</span>
                            </span>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}