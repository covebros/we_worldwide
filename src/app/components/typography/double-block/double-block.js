angular
  .module('app')
  .component('doubleBlock', {
    templateUrl: 'app/components/typography/double-block/double-block.html',
    transclude: {
      firstTitle: 'firstTitle',
      secondTitle: 'secondTitle',
      firstImage: 'firstImage',
      firstParagraph: 'firstParagraph',
      secondParagraph: 'secondParagraph',
      secondImage: 'secondImage'
    },
    controller: doubleBlock
  });

/** @ngInject */

function doubleBlock($scope) {
}
