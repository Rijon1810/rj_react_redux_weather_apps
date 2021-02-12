import axios from 'axios';

const API_KEY = '9e2a2863f8ecd40d81caaafa3ad44161';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}, BD`;
    const request = axios.get(url);
    return{
        type : FETCH_WEATHER,
        payload : request
    }
}