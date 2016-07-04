var angular = require('angular');
var ngRoute = require('angular-route');

var forecast = require('./forecast');
var navbar = require('./navbar');


module.exports = angular.module('angularWeatherClient', [
  ngRoute,
  forecast,
  navbar.name
]).
config(RouteConfig);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/' });
}
