(function () {
  'use strict';

  angular
    .module('app')
    .controller('ColourMatrixCtrl', function ($scope) {
      $scope.dragDistanceX = 0;
      $scope.touchStartX = 0;
      $scope.position = -72;

      $scope.onTouchstart = function() {
        $scope.touchStartX = $scope.$event.touches[0].clientX;
      }

      $scope.onTouchmove = function() {
          var currentPositionX = $scope.$event.touches[0].clientX;
          $scope.dragDistanceX = currentPositionX - $scope.touchStartX;

          if($scope.position + $scope.dragDistanceX < -72 && $scope.position + $scope.dragDistanceX > window.innerWidth - $scope.$event.target.width - 72 - 30){
            $scope.position += $scope.dragDistanceX;
          } 

          $scope.touchStartX = currentPositionX;
      }

      $scope.onTouchend = function() {
        $scope.dragDistanceX = 0;
      }


    });
})();
