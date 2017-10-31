angular
  .module('app')
  .component('singleSubheadingTable', {
    templateUrl: 'app/we_components/single-subheading-table/single-subheading-table.html',
    transclude: {
      title: 'singleSubheadingTableTitle',
      text: 'singleSubheadingTableText',
      image: 'singleSubheadingTableImage'
    },
    controller: singleSubheadingTable
  });

  /** @ngInject */

function singleSubheadingTable($scope) {
}
