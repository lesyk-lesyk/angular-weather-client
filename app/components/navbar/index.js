var angular = require('angular');
var fs = require('fs');

module.exports = angular.module('angularWeatherClient.navbar', []).
component('navbar', {
  controller: NavbarController,
  template: fs.readFileSync(__dirname + '/navbar.component.html', 'utf-8')
});

NavbarController.$inject = [];
function NavbarController() {
  // ...
}
