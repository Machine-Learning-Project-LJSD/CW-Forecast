const ForecastIo = require('forecastio');
const forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');
const city = require('./cities');


const options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}

fetchAvailableCities = (req,res)=>{
    res.send(city.fetchCities);
}

function coordinateWeather(latitude, longitude, res) {
    forecastIo.forecast(latitude, longitude, options).then(function (data) {
        res.send(data)
    });
}

fetchWeatherByCoordinate = (req, res) =>{

    const a =Number(req.body.latitude)
    const b=Number(req.body.longitude)
    coordinateWeather(a, b, res);

}

fetchWeatherByCity =(req,res)=>{
 let city = req.body.city.toString().toUpperCase();
 let coordinate = city.fetchCoordinate(city);
 coordinateWeather(coordinate.latitude,coordinate.longitude);
}









module.exports = {
   fetchWeatherByCoordinate,
    fetchWeatherByCity,
    fetchAvailableCities
}