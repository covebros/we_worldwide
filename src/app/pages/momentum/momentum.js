(function () {
  'use strict';

  angular
  .module('app')
  .controller('momentumController', momentumController);

  /** @ngInject */
  function momentumController($scope, $timeout) {
  	angular.element(document).ready(function () {
    	angular.element('table').stacktable();
    });
  }
})();
