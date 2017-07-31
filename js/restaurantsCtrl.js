angular.module('bbq').controller('restaurantsCtrl', function($scope, $http, mainService) {
  $http.get('data.JSON').then(function(locations) {
    $scope.locations = locations.data;
    $scope.randomize = function() {
    var randomized = Math.ceil(Math.random()*(60-1)+1);
    console.log(randomized);
    $scope.randomizedArray = []
    for(var i = 0; i<$scope.locations.length; i++) {
      if($scope.locations[i]['id'] == randomized) {
        $scope.randomizedArray.push($scope.locations[i])
      }
    }
    console.log($scope.randomizedArray)
  }
      });
});
