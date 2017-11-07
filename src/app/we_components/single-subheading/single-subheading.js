angular
  .module('app')
  .component('singleSubheading', {
    templateUrl: 'app/we_components/single-subheading/single-subheading.html',
    transclude: {
      title: 'singleSubheadingTitle',
      image: 'imageDivider',
      text: 'singleSubheadingText'
    },
    controller: singleSubheading
  });

  /** @ngInject */

function singleSubheading($scope) {
}
