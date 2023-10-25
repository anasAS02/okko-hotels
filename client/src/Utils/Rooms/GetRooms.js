import axios from 'axios';
import {GET_ROOMS} from '../Apis';

export const getRooms = async (setUpdates) => {
    setUpdates('loading');
    try{
        const res = await axios.get(GET_ROOMS);
        const data = res.data;
        setUpdates(null);
        return data;
    }catch(err){
        console.log(err)
        setUpdates(null);
    }
}