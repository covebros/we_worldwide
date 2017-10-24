angular
  .module('app')
  .directive('animationDirective', function ($timeout) {
    return {
      restrict: 'A',
      controller: changeBackground,
      scope: {
        offset: '<elementOffset'
      },
      link: function (scope, element, attributes) {
        var classParameter = scope.$eval(attributes['animationDirective']).class;
        attributes.$observe('animationDirective', function () {
          var backgroundColor = attributes.animationDirective.color;
        });
        var el = element[0];
        var elementOpacity = angular.element(el).css('opacity', '0');

        var animation = function () {
          var elementPosition = angular.element(el).offset().top;
          var windowInnerHeight = angular.element(window).innerHeight();
          var windowPosition = angular.element(window).scrollTop();
          var elementHeightOffset = angular.element(el).innerHeight() / 2;
          var animationStart = windowInnerHeight + windowPosition;
          var minVisibleElementPosition = elementPosition + elementHeightOffset;
          var maxVisibleElementPosition = elementPosition + windowInnerHeight;
          var animationEnd = windowInnerHeight + windowPosition + elementHeightOffset;
          if (animationStart >= minVisibleElementPosition && animationEnd < maxVisibleElementPosition) {
            angular.element(el).css('opacity', '1').addClass(classParameter);
          }
        };

        $timeout(function () {
          animation();
        }, 300);

        angular.element(window).scroll(function () {
          animation();
        });
      }
    };
  });

function changeBackground($scope, $timeout) {
}
