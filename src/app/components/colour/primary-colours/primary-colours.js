(function () {
  'use strict';

  angular
    .module('app')
    .component('primaryColours', {
      templateUrl: 'app/components/colour/primary-colours/primary-colours.html',
      controller: primaryColours
    });
  /** @ngInject */

  function primaryColours($scope) {
  }
})();
