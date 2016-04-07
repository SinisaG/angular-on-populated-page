(function (window, angular) {

  var demoApp = angular.module('demoApp', [
    'ngRoute',
    'demoControllers'
  ]);

  demoApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          $locationProvider.html5Mode(true).hashPrefix('!');

          $routeProvider.
          when('/', {
              templateUrl: 'views/index.html',
              controller: {}
          }).
          when('/nextpage', {
              templateUrl: '/views/nextpage.html',
              controller: 'nextCtrl'
          }).
          otherwise({
              redirectTo: '/'
          });
      }]);


  var demoControllers = angular.module('demoControllers', []);

  demoControllers.controller('nextCtrl', ['$scope', function ($scope) {
      $scope.paragraph = 'Yey, it works!';
  }]);
})(window, angular);
