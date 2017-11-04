angular
  .module('app')
  .component('singleImageLarge', {
    templateUrl: 'app/we_components/single-image-large/single-image-large.html',
    transclude: {
      singleImageContainer: 'singleImageContainer'
    },
    controller: singleImageLarge
  });

  /** @ngInject */

function singleImageLarge($scope) {
}
