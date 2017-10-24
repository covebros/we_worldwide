angular
    .module('app')
    .component('singleTitleBlock', {
        templateUrl: 'app/components/logo/single-title-block/single-title-block.html',
        transclude: {
            mainTitle: 'mainTitle',
            paragraph: 'paragraph'
        }
    });