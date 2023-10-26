import Cookies from 'js-cookie';
const token = Cookies.get('token');

export const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
}