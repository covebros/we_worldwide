(function () {
  'use strict';

  angular
    .module('app')
    .directive('brandNavigation', brandNavigation);

    /** @ngInject */
  function brandNavigation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navigation/navigation.html',
      controller: menuNavigation,
      controllerAs: 'navigation',
      bindToController: true
    };
    return directive;
  }

  function menuNavigation($scope, $timeout, $state) {
    $scope.IsNavOpen = false;

    var santanderCookie = Cookies.get('Santander Brand Guidelines');
    if (!angular.isUndefined(santanderCookie)) {
      angular.element('.footer').css('margin', '0');
    }

    $scope.mobileMenu = function () {
      $scope.IsNavOpen = !$scope.IsNavOpen;
      angular.element('.mobile-menu-button').toggleClass('menu-opened');
      angular.element('.sub-menu').slideToggle();
    };

    angular.element(window).resize(function () {
      if (angular.element(window).width() > 992) {
        angular.element('.sub-menu').removeAttr('style');
        angular.element('.mobile-menu-button').removeClass('menu-opened');
      }
    });

    var navigationHeight = angular.element('.main-nav').innerHeight();

    $timeout(function () {
      var mainContainer = angular.element(window).scrollTop();
      var mainOffsetTop = angular.element('main').offset();

      if (mainContainer + navigationHeight + 30 >= mainOffsetTop.top) {
        angular.element('.main-nav').addClass('active');
      }
    }, 100);

    $timeout(function () {
      angular.element(window).scroll(function () {
        var mainContainerPosition = angular.element(window).scrollTop();
        var mainOffset = angular.element('main').offset();

        if (mainContainerPosition + navigationHeight + 30 >= mainOffset.top) {
          angular.element('.main-nav').addClass('active');
        } else {
          angular.element('.main-nav').removeClass('active');
        }
      });
    }, 100);
  }
})();
