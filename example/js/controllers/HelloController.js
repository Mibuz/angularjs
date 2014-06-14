function HelloController($scope){
  $scope.title = "Basic AngularJS demo";
  $scope.value = 0;
  $scope.toggle = true;

  $scope.increment = function(){
    $scope.value++;
  }
}
