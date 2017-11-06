(function () {
  'use strict';

  angular
  .module('app')
  .controller('makingController', makingController);

  /** @ngInject */
  function makingController($scope, $timeout) {
  	angular.element(document).ready(function () {
    	angular.element('table').stacktable();
    });
  }
})();
