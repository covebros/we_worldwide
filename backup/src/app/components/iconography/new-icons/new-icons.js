angular
	.module('app')
	.component('newIcons', {
		templateUrl: 'app/components/iconography/new-icons/new-icons.html',
		transclude: {
			title: 'newTitle',
			paragraph: 'paragraph',
			icon_1: 'correctIcon',
			icon_2: 'incorrectIcon'
		}
	});