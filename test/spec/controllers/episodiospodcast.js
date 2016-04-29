'use strict';

describe('Controller: EpisodiospodcastCtrl', function () {

  // load the controller's module
  beforeEach(module('convoyApp'));

  var EpisodiospodcastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodiospodcastCtrl = $controller('EpisodiospodcastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EpisodiospodcastCtrl.awesomeThings.length).toBe(3);
  });
});
