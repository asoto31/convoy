'use strict';

/**
 * @ngdoc service
 * @name convoyApp.Categoria
 * @description
 * # Categoria
 * Factory in the convoyApp.
 */
angular.module('convoyApp').factory('categoriaFactory', function (Restangular) {
  return {
      list: function () {
        return Restangular.all('getCategorias.php').getList();
      }
  };
});
