describe('footer component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('brandFooter', function () {
      return {
        templateUrl: 'app/components/footer/footer.html'
      };
    });
  }));
  it(angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<brand-footer></brand-footer>')($rootScope);
    $rootScope.$digest();
    var footer = element.find('a');
    expect(footer.html().trim()).toEqual('');
  }));
});
