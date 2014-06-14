app.controller('ShowController', function($scope, $routeParams, MoviesService){

  function show() {
    MoviesService.get({ id: $routeParams.movieId }, function(response){
      $scope.movie = response;
    });
  }


  show();

});
