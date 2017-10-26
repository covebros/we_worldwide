angular
  .module('app')
  .component('brandSection', {
    templateUrl: 'app/we_components/brand-section/brand-section.html',
    transclude: {
    	imageTitleOne: 'imageTitleOne', 
    	imageTitleTwo: 'imageTitleTwo', 
		paragraph: 'brandSectionParagraph',
		tableIcon: 'tableIcon',
		tableTitle: 'tableTitle',
		tableText: 'tableText'
    },
    controller: brandSection
  });

  /** @ngInject */

function brandSection($scope) {
}