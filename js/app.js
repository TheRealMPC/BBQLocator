angular.module('bbq', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../routes/home.html',
        controller: 'homeCtrl'
      })
      .state('locations', {
        url: '/locations',
        templateUrl: '../routes/locations.html',
        controller: 'locationsCtrl',
      })
      .state('restaurants', {
        url: '/restaurants',
        templateUrl: '../routes/restaurants.html',
        controller: 'restaurantsCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../routes/about.html',
      })

      $urlRouterProvider
        .otherwise('/');

});
