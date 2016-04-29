'use strict';

describe('Service: Categoria', function () {

  // load the service's module
  beforeEach(module('convoyApp'));

  // instantiate service
  var Categoria;
  beforeEach(inject(function (_Categoria_) {
    Categoria = _Categoria_;
  }));

  it('should do something', function () {
    expect(!!Categoria).toBe(true);
  });

});
