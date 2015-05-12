// example1/app.js

var exampleOne = angular.module('exampleOne', ['ngAnimate']);

exampleOne.controller('mainController', ['$scope', function($scope) {
	
	// set default states
	$scope.lions = false;
	$scope.cranes = false;
}]);
