import axios from "axios"
import { MY_BOOKINGS } from "../Apis"
import { config } from '../Config';

export const myBookings = async (email) => {
    try{
        const res = await axios.post(MY_BOOKINGS, {email}, config);
        const data = res.data.data;
        return data;
    }catch(err){
        console.log(err);
    }
}