angular
  .module('app')
  .component('subHeader', {
    templateUrl: 'app/components/sub-header/sub-header.html',
    transclude: {
      title: 'subHeaderTitle',
      text: 'subHeaderText'
    },
    controller: subHeader
  });

  /** @ngInject */

function subHeader($scope) {
}
