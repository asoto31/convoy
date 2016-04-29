'use strict';

/**
 * @ngdoc function
 * @name convoyApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the convoyApp
 */
angular.module('convoyApp').controller('MenuCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
});
