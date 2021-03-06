angular.module('f1App', [
  'f1App.controllers',
  'f1App.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	when("/teams", {templateUrl: "partials/teams.html", controller: "teamsController"}).
	when("/teams/:id", {templateUrl: "partials/team.html", controller: "teamController"}).
	when("/races", {templateUrl: "partials/races.html", controller: "racesController"}).
	when("/races/:id", {templateUrl: "partials/race.html", controller: "raceController"}).
	otherwise({redirectTo: '/drivers'});
}]);