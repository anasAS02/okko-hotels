import axios from 'axios';
import {GET_ROOMS} from '../Apis';

export const getRooms = async () => {
    try{
        const res = await axios.get(GET_ROOMS);
        const data = res.data;
        return data;
    }catch(err){
        console.log(err)
    }
}