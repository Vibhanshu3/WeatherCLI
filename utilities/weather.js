module.exports = async function (location) {
    var axios = require("axios")
    var response = await axios
        .get(`https://www.metaweather.com/api/location/search/?query=${location}`)
    var weatherID = response['data'][0]['woeid']

    var response2 = await axios
        .get('https://www.metaweather.com/api/location/' + weatherID)
    var weatherReportToday = response2['data']['consolidated_weather']

    return weatherReportToday

}