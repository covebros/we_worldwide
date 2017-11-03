(function () {
  'use strict';

  angular
  .module('app')
  .controller('progressController', progressController);

  /** @ngInject */
  function progressController($scope, $timeout, $uibModal) {
	  	$scope.open = function () {
			console.log('opening pop up');

			var modalInstance = $uibModal.open({
				templateUrl: 'app/we_components/popup-modal/popup-modal.html',
				size: 'lg',
				backdrop: 'static'
			}).result.catch(function (resp) {
			    if (['cancel', 'backdrop click', 'escape key press'].indexOf(resp) === -1) throw resp;
			});
		}

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		}
  	}
})();
