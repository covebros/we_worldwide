describe('navigation component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandNavigation', function () {
      return {
        templateUrl: 'app/components/navigation/navigation.html'
      };
    });
  }));
  it(angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<brand-navigation></brand-navigation>')($rootScope);
    $rootScope.$digest();
    var navigation = element.find('a');
    expect(navigation.html().trim()).toEqual('');
  }));
});
