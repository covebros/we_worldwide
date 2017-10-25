angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/pages/home/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'app/pages/logo/logo.html',
      controller: 'logoController',
      controllerAs: 'logo'
    })

    .state('brands', {
      url: '/brands',
      templateUrl: 'app/pages/brands/brands.html',
      controller: 'brandsController',
      controllerAs: 'brands'
    })

    .state('momentum', {
      url: '/momentum',
      templateUrl: 'app/pages/typography/typography.html',
      controller: 'typographyController',
      controllerAs: 'typography'
    })

    .state('stories', {
      url: '/stories',
      templateUrl: 'app/pages/photography/photography.html',
      controller: 'photographyController',
      controllerAs: 'photography'
    })

    .state('motion', {
      url: '/motion',
      templateUrl: 'app/pages/iconography/iconography.html',
      controller: 'iconographyController',
      controllerAs: 'iconography'
    })

    .state('language', {
      url: '/language',
      templateUrl: 'app/pages/language/language.html',
      controller: 'languageController',
      controllerAs: 'language'
    })

    .state('terms', {
      url: '/terms',
      templateUrl: 'app/pages/terms/terms.html',
      controller: 'termsController',
      controllerAs: 'terms'
    });
}
