angular
  .module('app')
  .component('brandSection', {
    templateUrl: 'app/we_components/brand-section/brand-section.html',
    transclude: {
      imageTitleOne: 'imageTitleOne',
      imageTitleTwo: 'imageTitleTwo',
      paragraph: 'brandSectionParagraph',
      tableIcon: 'tableIcon',
      tableTitleOne: 'tableTitleOne',
      tableTextOne: 'tableTextOne',
      tableTitleTwo: 'tableTitleTwo',
      tableTextTwo: 'tableTextTwo'
    },
    controller: brandSection
  });

  /** @ngInject */

function brandSection($scope) {
}
