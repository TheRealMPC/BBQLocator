angular.module('bbq').controller('locationsCtrl', function($scope, $http, mainService) {
  $http.get('data.json').then(
      function(locations){
        $scope.locations = locations.data;
      }
    );
    $scope.orderProp = 'name';
    $scope.quantity = 10;
  }
);
