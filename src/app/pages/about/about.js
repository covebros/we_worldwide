(function () {
  'use strict';

angular
.module('app')
.controller('aboutController', aboutController);

  	/** @ngInject */
  	function aboutController($scope) {
  		$scope.popup = function () {
  			console.log('button clicked');
  			angular.element(".open-popup").fullScreenPopup({
				bgColor: "green",
				inlineStyles: true,
				animationSpeed: 200
  		});
  	}
}
})();
