(function () {
  'use strict';

  angular
    .module('app')
    .directive('brandNavigation', brandNavigation);

    /** @ngInject */
  function brandNavigation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/we_components/navigation/navigation.html',
      controller: menuNavigation,
      controllerAs: 'navigation',
      bindToController: true
    };
    return directive;
  }

  function menuNavigation($scope, $timeout, $window, $state) {
    $scope.IsNavOpen = false;

    var santanderCookie = Cookies.get('Santander Brand Guidelines');
    if (!angular.isUndefined(santanderCookie)) {
      angular.element('.footer').css('margin', '0');
    }

    $scope.mobileMenu = function () {
      angular.element('.mobile-menu-button').toggleClass('menu-opened');
      angular.element('#c-menu--slide-right').toggleClass('is-active');
      angular.element('#c-mask').toggleClass('is-active');
    };

    $scope.closeMobileMenu = function () {
      angular.element('#c-menu--slide-right').removeClass('is-active');
      angular.element('#c-mask').removeClass('is-active');
      angular.element('.mobile-menu-button').removeClass('menu-opened');
    }

    angular.element(window).resize(function () {
      if (angular.element(window).width() > 992) {
        angular.element('.sub-menu').removeAttr('style');
        angular.element('.mobile-menu-button').removeClass('menu-opened');
        angular.element('#c-menu--slide-right').removeClass('is-active');
        angular.element('#c-mask').removeClass('is-active');

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
