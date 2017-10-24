angular
  .module('app')
  .component('squareComponent', {
    templateUrl: 'app/components/colour/square-component/square-component.html',
    controller: squareComponent
  });

  /** @ngInject */

function squareComponent($scope) {
}
