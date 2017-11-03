angular
  .module('app')
  .component('popupModal', {
    controller: popupModal,
    templateUrl: 'app/we_components/popup-modal/popup-modal.html'
  });

  /** @ngInject */

function popupModal($scope, $modalInstance) {
		$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}
}
