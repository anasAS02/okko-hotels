import './SignUp.css';
import Header from '../../Components/Header/Header';
import { useState } from "react";
import { handleAuth } from '../../Utils/Auth/Auth';
import { REGISTER } from '../../Utils/Apis';
import { Link } from 'react-router-dom';
import { useUpdates } from '../../Utils/UpdatesContext';
import { FadeLoader } from 'react-spinners';

export default function Login(){
const { updates, setUpdates } = useUpdates();

const[form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    country: '',
})

const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
}

return(
    <>
    <Header />
        <div className='register'>
            <input autoFocus required type='text' name='firstName' placeholder='First Name' value={form.firstName} onChange={handleFormChange}  />
            <input required type='text' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleFormChange}  />
            <input required type='email' placeholder='alex@gmail.com' name='email' value={form.email} onChange={handleFormChange}  />
            <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}  />
            <input required type='text' placeholder='country' name='country' value={form.country} onChange={handleFormChange} />
            {updates === 'loading' ?
            <FadeLoader color="#dbdb2b"/>:
            <button className='register-btn' onClick={(event) => handleAuth(event, REGISTER, form, setUpdates)}>Register</button>
            }
            {updates && updates !== 'loading' && <p className='errMsg'>{updates}</p>}
            <span>Do you have an account? <Link to='/login'>Login</Link></span>
        </div>
    </>
);
}