angular
.module('app')
.component('twoColumns', {
  templateUrl: 'app/we_components/two-columns/two-columns.html',
  controller: twoColumns
});

  /** @ngInject */

function twoColumns($scope, $timeout) {
}