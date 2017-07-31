angular.module('bbq').controller('mainCtrl', function (mainService){
    mainService.get().then(function(response) {
      $scope.location = response.data;
  });
});



// Google API key :  AIzaSyCfzyw3PgHtFJJuvoZl05w_tKSAtP4Fgyk
