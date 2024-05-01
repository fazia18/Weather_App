import axios from 'axios';

const API_KEY = process.env.REACT_APP_URL;

export const fetchWeatherData = async (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
        const response = await axios.get(url);
        if (!response) {
            throw new Error('City not found. Please enter a valid city name.');
        }
        console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};