angular
  .module('app')
  .component('iconsTable', {
    templateUrl: 'app/we_components/icons-table/icons-table.html',
    transclude: {
      image: 'imageContainer'
    },
    controller: iconsTable
  });

  /** @ngInject */

function iconsTable($scope) {
}
