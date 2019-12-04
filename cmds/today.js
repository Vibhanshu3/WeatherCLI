var getLocation = require("../utilities/location")
var getWeather = require("../utilities/weather")

module.exports = async function (location){
    
    var myLocation = location || await getLocation()
    var  myWeather = await getWeather(myLocation)

    var weatherCond = myWeather[0]['weather_state_name']
    var temp = myWeather[0]["the_temp"]
    
    console.log(`Current conditions in ${myLocation} 
                ${temp} C ${weatherCond}`)

}