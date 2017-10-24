(function () {
  'use strict';

  angular
    .module('app')
    .component('iconsComponent', {
      templateUrl: 'app/components/iconography/icons-component/icons-component.html',
      controller: icons
    });

  /** @ngInject */

  function icons($scope) {
  }
})();
