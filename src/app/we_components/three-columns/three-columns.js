angular
.module('app')
.component('threeColumns', {
  templateUrl: 'app/we_components/three-columns/three-columns.html',
  controller: threeColumns
});

  /** @ngInject **/

function threeColumns($scope, $timeout) {
}
