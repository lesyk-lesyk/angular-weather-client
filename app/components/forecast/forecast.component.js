var fs = require('fs');

module.exports = {
  controller: ForecastController,
  template: fs.readFileSync(__dirname + '/forecast.component.html', 'utf-8')
};

ForecastController.$inject = ['Forecast'];
function ForecastController(Forecast) {
  var $ctrl = this;
  $ctrl.cities = ['Lviv', 'Kyiv', 'Odessa'];

  Forecast.fetchFiveForecast($ctrl.cities[0])
    .then(function (data){
      $ctrl.weatherData=data;
  });

  $ctrl.changeCity = function (city) {
    Forecast.fetchFiveForecast(city)
      .then(function (data){
        $ctrl.weatherData=data;
    });
  };
}
