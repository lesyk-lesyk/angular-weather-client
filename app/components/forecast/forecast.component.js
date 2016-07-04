var fs = require('fs');

module.exports = {
  controller: ForecastController,
  template: fs.readFileSync(__dirname + '/forecast.component.html', 'utf-8')
};

ForecastController.$inject = ['Forecast'];
function ForecastController(Forecast) {
  var $ctrl = this;

  $ctrl.weatherConditions = [
    {date: 'May 12, 03:00', condition: 'Rain'},
    {date: 'May 12, 06:00', condition: 'Clouds'},
    {date: 'May 12, 09:00', condition: 'Rain'},
    {date: 'May 12, 12:00', condition: 'Rain'},
    {date: 'May 12, 15:00', condition: 'Clouds'},
    {date: 'May 12, 18:00', condition: 'Rain'},
    {date: 'May 12, 21:00', condition: 'Rain'},
    {date: 'May 13, 00:00', condition: 'Clouds'},
    {date: 'May 13, 03:00', condition: 'Clouds'},
    {date: 'May 13, 06:00', condition: 'Rain'}
  ];

  $ctrl.humidity = [
    {date: 'May 12, 03:00', humidity: '94%'},
    {date: 'May 12, 06:00', humidity: '96%'},
    {date: 'May 12, 09:00', humidity: '88%'},
    {date: 'May 12, 12:00', humidity: '83%'},
    {date: 'May 12, 15:00', humidity: '77%'},
    {date: 'May 12, 18:00', humidity: '100%'},
    {date: 'May 12, 21:00', humidity: '98%'},
    {date: 'May 13, 00:00', humidity: '94%'},
    {date: 'May 13, 03:00', humidity: '93%'},
    {date: 'May 13, 06:00', humidity: '100%'}
  ];

  $ctrl.windSpeed = [
    {date: 'May 12, 03:00', speed: '1.51 m/s'},
    {date: 'May 12, 06:00', speed: '0.86 m/s'},
    {date: 'May 12, 09:00', speed: '1.51 m/s'},
    {date: 'May 12, 12:00', speed: '0.86 m/s'},
    {date: 'May 12, 15:00', speed: '1.51 m/s'},
    {date: 'May 12, 18:00', speed: '0.86 m/s'},
    {date: 'May 12, 21:00', speed: '1.51 m/s'},
    {date: 'May 13, 00:00', speed: '0.86 m/s'},
    {date: 'May 13, 03:00', speed: '1.51 m/s'},
    {date: 'May 13, 06:00', speed: '0.86 m/s'}
  ];


}
