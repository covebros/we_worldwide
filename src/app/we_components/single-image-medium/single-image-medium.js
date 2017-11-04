angular
  .module('app')
  .component('singleImageMedium', {
    templateUrl: 'app/we_components/single-image-medium/single-image-medium.html',
    transclude: {
      singleImageContainer: 'singleImageContainer'
    },
    controller: singleImageMedium
  });

  /** @ngInject */

function singleImageMedium($scope) {
}
