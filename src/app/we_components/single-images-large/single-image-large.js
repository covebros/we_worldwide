angular
  .module('app')
  .component('singleImageLarge', {
    templateUrl: 'app/we_components/single-image-large/single-image-large.html',
    transclude: {
      image: 'singleLargeImage'
    },
    controller: singleImageLarge
  });

  /** @ngInject */

function singleImageLarge($scope) {
}
