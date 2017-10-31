angular
  .module('app')
  .component('copyParagraph', {
    templateUrl: 'app/we_components/copy-paragraph/copy-paragraph.html',
    transclude: {
      text: 'copyParagraphText'
    },
    controller: copyParagraph
  });

  /** @ngInject */

function copyParagraph($scope) {
}
