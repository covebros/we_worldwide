(function () {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $window) {
   $rootScope.$on("$stateChangeSuccess", function () { //eslint-disable-line
     $window.scrollTo(0, 0);
   });
  }
})();
