module.exports = ForecastFactory;

ForecastFactory.$inject = ['$http'];
function ForecastFactory($http) {
  var API_URL = "http://api.openweathermap.org/data/2.5/forecast";
  var APPID = "974cf989f33a668473fd4d704c86c5e8";

  function fetchFiveForecast (city) {
    return $http({
      url: API_URL, 
      method: "GET",
      params: {q: city, units: 'metric', APPID: APPID, cnt: 10}
    })
    .then(function(response) {
      var data = response.data;
      var weatherData = {
        weatherConditions: [],
        humidity: [],
        windSpeed: []
      };
      for(var i = 0; i< data.list.length; i++){
        var formatDate = new Date(data.list[i].dt*1000).toLocaleTimeString("en-us", {
          month: "short", day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: false
        });
        weatherData.weatherConditions.push({
          date: formatDate, 
          condition: data.list[i].weather[0].main
        });
        weatherData.humidity.push({
          date: formatDate, 
          humidity: data.list[i].main.humidity
        });
        var speed = "N/A";
        if (data.list[i].wind !== null){
          speed = data.list[i].wind.speed;
        }
        weatherData.windSpeed.push({
          date: formatDate, 
          speed: speed
        });
      }
      return weatherData;
    });
  }

  return {
    fetchFiveForecast: fetchFiveForecast
  };

}
