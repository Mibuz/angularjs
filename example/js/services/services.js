angular.module('services', ['ngResource']).factory('MoviesService', function($resource){
  return $resource('http://topcine-staging.herokuapp.com/api/v1/movies/:id');
});
