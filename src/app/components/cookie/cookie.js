angular
  .module('app')
  .component('cookieBar', {
    templateUrl: 'app/components/cookie/cookie.html',
    controller: cookie
  });

  /** @ngInject */

function cookie($scope) {
  $scope.closeCookie = function () {
    Cookies.set('Santander Brand Guidelines', 'cookie accepted');
    angular.element('#cookie-bar').hide();
  };
  var santanderCookie = Cookies.get('Santander Brand Guidelines');

  if (angular.isUndefined(santanderCookie)) {
    angular.element('#cookie-bar').show();
  }
}
