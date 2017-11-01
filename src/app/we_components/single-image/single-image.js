angular
  .module('app')
  .component('singleImage', {
    templateUrl: 'app/we_components/single-image/single-image.html',
    transclude: {
      image: 'imageContainer',
      text: 'singleImageText'
    },
    controller: singleImage
  });

  /** @ngInject */

function singleImage($scope) {
}
