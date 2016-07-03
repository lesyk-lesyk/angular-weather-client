var angular = require('angular');
var ngRoute = require('angular-route');
var ForecastComponent = require('./forecast.component');
var ForecastFactory = require('./forecast.factory');

module.exports = 'angularWeatherClient.forecast';

angular.module('angularWeatherClient.forecast', [
  ngRoute
]).
config(RouteConfig).
factory('Forecast', ForecastFactory).
component('forecast', ForecastComponent);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
  $routeProvider.when('/', {
    template: '<forecast></forecast>'
  });
}
