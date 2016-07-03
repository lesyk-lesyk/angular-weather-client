(function () {

'use strict';

  angular.module('angularWeatherClient', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/forecast.html",
          controller: "ForecastController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('angularWeatherClient')

  .controller('ForecastController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

}());
