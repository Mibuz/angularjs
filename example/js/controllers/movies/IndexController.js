app.controller('IndexController', function($scope, MoviesService){
  $scope.movies = [];

  function all(){
    MoviesService.query(function(response){
      $scope.movies = response;
    });
  }

  all();
});
