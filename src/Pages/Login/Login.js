import './Login.css';
import Header from '../../Components/Header/Header';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import{loginContext, setLoginStateContext} from '../../App';

export default function Login(){

const[form, setForm] = useState({
    email: '',
    password: '',
})

const login = useContext(loginContext);
const setLogin = useContext(setLoginStateContext);


function handleFormChange(e) {
    setForm({...form, [e.target.name]: e.target.value });
}

function loginFunction(e){
    e.preventDefault();

    if(localStorage.getItem('users')){
        let existingUsers = JSON.parse(localStorage.getItem('users'));
        const checkUser = existingUsers.find(user => user.email === form.email && user.password === form.password);
        if(checkUser){
            localStorage.setItem('isUserLoggedIn', true);
            setLogin(true);
            window.location.pathname = '/';
        }else{
            alert('The Password or Email is incorrect');
        }
    }else{
        alert('You\'re not registered with us.');
    }
}

function logout(){
    window.localStorage.removeItem('isUserLoggedIn');
    window.location.pathname = '/';
}

return(
    <>
    <Header />
        {login ? 
            <div className='welcome'>
                <h2>You are already logged in</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        :
            <div className='box'>
                <h3 className='title'>Find Your Reservations</h3>
                <div className='con'>
                <div className='login'>
                <form onSubmit={loginFunction}>
                    <p>With your account</p>
                    <input required type='email' placeholder='E-mail address' name='email' value={form.email} onChange={handleFormChange}/>
                    <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}/>
                    <span>
                        <Link to=''>Forgot Password ?</Link>
                        <input type='submit' value='Sign In'></input>
                    </span>
                    <div>
                        <p>No online account?</p>
                        <Link to='/SignUp'>Sign up</Link>
                    </div>
                    </form>
                </div>
                <div className='confirmation'>
                    <p>With Confirmation # or Itinerary #</p>
                    <input type='text' />
                    <input type='text' placeholder='E-mail address' />
                    <button>FIND RESERVATIONS</button>
                    <span className='text'>
                        Don't know your confirmation #?
                        <p>Your confirmation # was included in an email sent at the time of booking. Please
                        check your email to recover the number.</p>
                    </span>
                </div>
                </div>
            </div>
        }
    </>
);
}