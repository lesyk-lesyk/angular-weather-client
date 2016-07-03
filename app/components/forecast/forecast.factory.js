module.exports = ForecastFactory;

ForecastFactory.$inject = ['$http'];
function ForecastFactory($http) {
  return {
    test: test
  };

  function test() {
    return 'Test function from ForecastFactory';
  }

}
