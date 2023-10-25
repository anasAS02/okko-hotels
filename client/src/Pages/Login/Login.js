import './Login.css';
import Header from '../../Components/Header/Header';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleAuth } from '../../Utils/Auth/Auth';
import { LOGIN } from '../../Utils/Apis';
import { useUpdates } from '../../Utils/Rooms/UpdatesContext';
import { FadeLoader } from 'react-spinners';

export default function Login(){
const { updates, setUpdates } = useUpdates();
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
        {updates == 'loading' ?
        <FadeLoader color="#dbdb2b"/>:
        <button className='login-btn' onClick={(event) => handleAuth(event, LOGIN, form, setUpdates)}>Login</button>
        }
        {updates && updates !== 'loading' && <p className='errMsg'>something is wrong</p>}
        <span>No online account? <Link to='/SignUp'>Sign up</Link></span>
    </div>
    </>
);
}