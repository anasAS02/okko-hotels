import './SignUp.css';
import Header from '../../Components/Header/Header';
import { useState } from "react";
import { handleAuth } from '../../Utils/Auth/Auth';
import { REGISTER } from '../../Utils/Apis';
import { Link } from 'react-router-dom';

export default function Login(){

const[form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    country: '',
})

function handleFormChange(e) {
    setForm({...form, [e.target.name]: e.target.value });
}

return(
    <>
    <Header />
        <div className='register'>
            <input autoFocus required type='text' name='firstName' placeholder='First Name' value={form.firstName} onChange={handleFormChange}  />
            <input required type='text' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleFormChange}  />
            <input required type='email' placeholder='alex@example.com' name='email' value={form.email} onChange={handleFormChange}  />
            <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}  />
            <input required type='text' placeholder='country' name='country' value={form.country} onChange={handleFormChange} />
            <button className='register-btn' onClick={(event) => handleAuth(event, REGISTER, form)}>Register</button>
            <span>Do you have an account? <Link to='/login'>Login</Link></span>
        </div>
    </>
);
}