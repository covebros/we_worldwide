describe('container component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandContainer', function () {
      return {
        templateUrl: 'app/components/container/container.html'
      };
    });
  }));
  it(angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<brand-container></brand-container>')($rootScope);
    $rootScope.$digest();
    var container = element.find('h1');
    expect(container.html().trim()).toEqual('');
  }));
});
