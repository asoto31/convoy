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
    'ngMaterial',
    'restangular'
])
.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl('http://convoy.local/servicios/');
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main', {
    url: '/',
    resolve: {
      categorias: function(categoriaFactory) {
        return categoriaFactory.list();
      }
    },
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
  .state('main.podcasts', {
    url: 'podcasts/{idcategoria}',
    resolve: {
      episodios: function($stateParams, podcastFactory) {
        return podcastFactory.episodiosByIdCategoria($stateParams.idcategoria);
      }
    },
    views: {
      'contenido@main': {
        templateUrl: 'views/episodios_podcast.html',
        controller: 'EpisodiosPodcastCtrl'
      }
    }
  });
});