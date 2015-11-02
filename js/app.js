var app = angular.module("movieApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'mainController'
  })
  .when('/:id/show', {
    templateUrl: 'partials/show.html',
    controller: 'mainController'
  })
})