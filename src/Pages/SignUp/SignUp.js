import './SignUp.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useState, useContext } from "react";
import{loginContext} from '../../App';
export default function Login(){
    
const[accept, setAccept] = useState(false);
const[user, setUser] = useState(false);
const login = useContext(loginContext);

function logout(){
    window.localStorage.removeItem('isUserLoggedIn');
    window.location.pathname = '/';
}

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

function submit(e){
    e.preventDefault();
    setAccept(true);
    if(form.firstName !== '' && form.lastName !== '' && form.email === form.emailConfirm 
    && form.password === form.passwordConfirm && form.country !== ''){
    setUser(true)
}else{
    setUser(false);
}

const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
if(user){
const newUser = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password,
    country: form.country,
};
    const duplicateUser = existingUsers.find(user => user.email === newUser.email);
    if(duplicateUser){
        alert('An account with that email already exists.');
    }else{
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setTimeout(() => {
            window.location.pathname = '/login';
        }, 1500)
    }
}
}

return(
    <>
    <Header />
    {
        login ?
        <div className='welcome'>
                <h2>You are already logged in</h2>
                <button onClick={logout}>Log Out</button>
        </div>
        :
        <>
    <div className='sign-up-box'>
        <h3 className='title'>Your Informaion</h3>
        <div className='sign-up'>
        <form onSubmit={submit}>
            <input required type='text' name='firstName' placeholder='First Name' value={form.firstName} onChange={handleFormChange}  />
            <input required type='text' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleFormChange}  />
            <input required type='email' placeholder='alex@example.com' name='email' value={form.email} onChange={handleFormChange}  />
            {form.emailConfirm !== form.email && accept && <p className='err'>email does not match</p>}
            <input type='email' placeholder='alex@example.com' name='emailConfirm' value={form.emailConfirm} onChange={handleFormChange} />
            {form.password.length < 8 && accept && <p className='err'>Password must be more than 8 Chart</p>}
            <input required type='password' placeholder='Password' name='password' value={form.password} onChange={handleFormChange}  />
            {form.passwordConfirm !== form.password && accept && <p className='err'>Password does not match</p>}
            <input required type='password' placeholder='Repeat Password' name='passwordConfirm' value={form.passwordConfirm} onChange={handleFormChange} />
            <input required type='text' placeholder='country' name='country' value={form.country} onChange={handleFormChange} />
            <input required type='submit' value='Sign Up'></input>
        </form>
        </div>
    </div>
    <Footer />
    </>
}
    </>
);
}