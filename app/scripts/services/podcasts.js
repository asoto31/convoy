'use strict';

/**
 * @ngdoc service
 * @name convoyApp.Podcasts
 * @description
 * # Podcasts
 * Factory in the convoyApp.
 */
angular.module('convoyApp').factory('podcastFactory', function (Restangular) {
  return {
    episodiosByIdCategoria: function (idcategoria) {
      return Restangular.all('getPodcastListByCategoria.php').getList({idcategoria: idcategoria});
    }
  };
});
