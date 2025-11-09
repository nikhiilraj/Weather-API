const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const city = process.argv[2];

if(!city){
    console.log("Please provide the city name.");
    process.exit(1);
}

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

//async function
async function getWeather(city) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        });

        const data = response.data;
        console.log(`🌤️ Weather in ${data.name}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Condition: ${data.weather[0].description}`);
    } catch(error) {
        if(error.response){
            console.error(`ERROR: ${error.response.data.message}`);
        } else {
            console.error("Unable to fetch weather data", error.message);
        }
    }
}

getWeather(city);