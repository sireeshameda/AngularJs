'use strict';

/**
 * @ngdoc overview
 * @name familyApp
 * @description
 * # familyApp
 *
 * Main module of the application.
 */
angular
  .module('familyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sritha', {
        templateUrl: '../views/sritha.html',
        controller: 'MainCtrl'
      })
      .when('/srey', {
        templateUrl: '../views/srey.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
