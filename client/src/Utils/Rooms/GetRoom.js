import axios from 'axios';
import {GET_ROOM} from '../Apis';

export const getRoom = async (CityName) => {
    try{
        const res = await axios.get(GET_ROOM + CityName);
        const data = res.data;
        return data;
    }catch(err){
        console.log(err)
    }
}