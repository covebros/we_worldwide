angular
	.module('app')
	.component('singleBlockText', {
		templateUrl: 'app/components/typography/single-block-text/single-block-text.html',
		transclude: {
			paragraph: 'paragraph'
		}
	})