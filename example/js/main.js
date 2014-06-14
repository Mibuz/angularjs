var app = angular.module('CineApp', ['ngRoute', 'ngResource', 'services']);

app.config(function($routeProvider){

  $routeProvider.when('/',{
    templateUrl: 'partials/pages/home.tpl.html',
    controller: 'HomeController'
  })

  $routeProvider.when('/movies', {
    templateUrl: 'partials/movies/index.tpl.html',
    controller: 'IndexController'
  })

  $routeProvider.when('/movies/:movieId', {
    templateUrl: 'partials/movies/show.tpl.html',
    controller: 'ShowController'
  })

  $routeProvider.otherwise({ redirectTo: '/' })

});
