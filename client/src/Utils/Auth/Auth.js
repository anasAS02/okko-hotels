import axios from "axios";
import Cookies from 'js-cookie';

export const handleAuth = async (event, url, form) => {
    event.preventDefault();
    try{
        const res = await axios.post(url, form);
        const token = res.data.data.token;
        const role = res.data.data.role;
        const firstName = res.data.data.firstName;
        const email = res.data.data.email;

        Cookies.set('token', token);
        Cookies.set('role', role);
        Cookies.set('firstName', firstName);
        Cookies.set('email', email);
        
        window.location.pathname = '/';
    }catch(err){
        const errorMessage = err.response?.data?.message || 'An error occurred.';
        console.log(errorMessage)
        alert(errorMessage)
    }
}

export const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    Cookies.remove('firstName');
    Cookies.remove('email');
    window.location.pathname = '/';
}