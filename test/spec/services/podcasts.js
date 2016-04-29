'use strict';

describe('Service: Podcasts', function () {

  // load the service's module
  beforeEach(module('convoyApp'));

  // instantiate service
  var Podcasts;
  beforeEach(inject(function (_Podcasts_) {
    Podcasts = _Podcasts_;
  }));

  it('should do something', function () {
    expect(!!Podcasts).toBe(true);
  });

});
