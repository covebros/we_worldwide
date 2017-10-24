angular
.module('app')
.component('singleBlockLogo', {
  templateUrl: 'app/components/logo/single-block-logo/single-block-logo.html',
  transclude: {
    mainTitle: 'mainTitle',
    paragraph: 'paragraph',
    visual: 'visual',
    referencesLeft: 'referencesLeft',
    referencesRight: 'referencesRight'
  }
});
