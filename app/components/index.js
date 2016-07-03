var angular = require('angular');
var ngRoute = require('angular-route');

var forecast = require('./forecast');


module.exports = angular.module('angularWeatherClient', [
  ngRoute,
  forecast
]).
config(RouteConfig);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/' });
}
