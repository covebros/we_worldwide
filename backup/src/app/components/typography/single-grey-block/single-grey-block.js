angular
  .module('app')
  .component('singleGreyBlock', {
    templateUrl: 'app/components/typography/single-grey-block/single-grey-block.html',
    transclude: {
    	image: 'imageRight'
    }
  });