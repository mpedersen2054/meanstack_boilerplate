
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/partial1.html',
      controller: 'ExamplesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
