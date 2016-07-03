var fs = require('fs');

module.exports = {
  controller: ForecastController,
  template: fs.readFileSync(__dirname + '/forecast.component.html', 'utf-8')
};

ForecastController.$inject = ['Forecast'];
function ForecastController(Forecast) {
  var $ctrl = this;

  $ctrl.test = test;

  function test() {
    return Forecast.test();
  }

}
