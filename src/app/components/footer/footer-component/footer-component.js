angular
.module('app')
.component('footerComponent', {
  templateUrl: 'app/components/footer/footer-component/footer-component.html',
  transclude: {
    mainTitle: 'mainTitle',
    paragraph: 'paragraph',
    laptop: 'laptop',
    cta: 'cta'
  },
  controller: footerController
});

  /** @ngInject */

function footerController($scope, $timeout) {
}
