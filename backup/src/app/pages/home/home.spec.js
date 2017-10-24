describe('main component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandHeaderDirective', function () {
      return {};
    });
  }));
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandContainerDirective', function () {
      return {};
    });
  }));
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandFooterDirective', function () {
      return {};
    });
  }));
  it('should render the header, container and footer', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('brand-header').length).toEqual(1);
    expect(element.find('brand-container').length).toEqual(1);
    expect(element.find('brand-footer').length).toEqual(1);
  }));
});
