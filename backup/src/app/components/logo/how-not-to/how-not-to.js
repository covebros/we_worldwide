angular
    .module('app')
    .component('howNotTo', {
        templateUrl: 'app/components/logo/how-not-to/how-not-to.html',
        transclude: {
            mainTitle: 'mainTitle',
            paragraph: 'paragraph'
        }
    });