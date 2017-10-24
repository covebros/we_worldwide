describe('header component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandHeader', function () {
      return {
        templateUrl: 'app/components/header/header.html'
      };
    });
  }));
  it(angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<brand-header></brand-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('a');
    expect(header.html().trim()).toEqual('');
  }));
});
