angular
  .module('app')
  .component('brandHeader', {
    templateUrl: 'app/components/header/header.html',
    transclude: {
    	title: 'headerTitle',
    	text: 'headerText'
    }
  });
