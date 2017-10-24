angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<home></home>'
    })

    .state('logo', {
    	url: '/logo',
    	templateUrl: 'app/pages/logo/logo.html'
    })

    .state('colour', {
      url: '/colour',
      templateUrl: 'app/pages/colour/colour.html'
    })

    .state('typography', {
      url: '/typography',
      templateUrl: 'app/pages/typography/typography.html'
    })

    .state('photography', {
      url: '/photography',
      templateUrl: 'app/pages/photography/photography.html'
    })

    .state('iconography', {
      url: '/iconography',
      templateUrl: 'app/pages/iconography/iconography.html'
    })

    .state('language', {
      url: '/language',
      templateUrl: 'app/pages/language/language.html'
    })

    .state('terms', {
      url: '/terms',
      templateUrl: 'app/pages/terms/terms.html'
    })
}
