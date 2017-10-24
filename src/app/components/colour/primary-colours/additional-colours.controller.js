(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdditionalColourCtrl', function ($scope) {
      $scope.oneAtATime = false;

      $scope.groups = [
        {
          title: 'Additional colours',
          class: 'brown',
          color: [
            {
              class: 'brown',
              RGB: '149 102 25',
              HEX: '#956619'
            },
            {
              class: 'green',
              RGB: '111 126 11',
              HEX: '#6F730B'
            },
            {
              class: 'blue',
              RGB: '19 126 132',
              HEX: '#137E84'
            },
            {
              class: 'purple',
              RGB: '158 54 103',
              HEX: '#9E3667'
            }
          ]
        }
      ];

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
      };
    });
})();
