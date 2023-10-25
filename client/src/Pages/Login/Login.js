import './Login.css';
import Header from '../../Components/Header/Header';
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleAuth } from '../../Utils/Auth/Auth';
import { LOGIN } from '../../Utils/Apis';

export default function Login(){

const[form, setForm] = useState({
    email: '',
    password: '',
})

function handleFormChange(e) {
    setForm({...form, [e.target.name]: e.target.value });
}

return(
    <>
    <Header />
    <div className='login'>
        <input autoFocus required type='email' placeholder='E-mail address' name='email' value={form.email} onChange={handleFormChange}/>
        <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}/>
        <button className='login-btn' onClick={(event) => handleAuth(event, LOGIN, form)}>Login</button>
        <span>No online account? <Link to='/SignUp'>Sign up</Link></span>
    </div>
    </>
);
}