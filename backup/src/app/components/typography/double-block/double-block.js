angular
  .module('app')
  .component('doubleBlock', {
    templateUrl: 'app/components/typography/double-block/double-block.html',
    transclude: {
      title: 'mainTitle',
    	firstTitle: 'firstTitle',
    	secondTitle: 'secondTitle',
    	firstImage: 'firstImage',
    	firstParagraph: 'firstParagraph',
    	secondParagraph: 'secondParagraph',
    	secondImage: 'secondImage'
    }
  });