var getLocation = require("../utilities/location")
var getWeather = require("../utilities/weather")

module.exports = async function (location) {
    var myLocation = location || await getLocation()
    var weatherForecast = await getWeather(myLocation)

    for (var i = 0; i < weatherForecast.length; i++) {
        console.log(`Forecast for ${myLocation}:
        ${weatherForecast[0]['applicable_date']} : MIN ${weatherForecast[0]['min_temp']} MAX ${weatherForecast[0]['max_temp']} ${weatherForecast[0]["weather_state_name"]}`)

    }

}