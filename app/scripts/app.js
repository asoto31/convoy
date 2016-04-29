'use strict';

/**
 * @ngdoc overview
 * @name convoyApp
 * @description
 * # convoyApp
 *
 * Main module of the application.
 */
angular.module('convoyApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngMaterial'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main', {
    url: '/',
    resolve: {},
    views: {
      '': {
        templateUrl: 'views/main.html'
      },
      'header@main': {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      },
      'menu@main': {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      },
      'footer@main': {
        templateUrl: 'views/footer.html'
      },
      'contenido@main': {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
});