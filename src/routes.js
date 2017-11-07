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
      templateUrl: 'app/pages/about/about.html',
      controller: 'aboutController',
      controllerAs: 'about'
    })

    .state('progress', {
      url: '/progress',
      templateUrl: 'app/pages/progress/progress.html',
      controller: 'progressController',
      controllerAs: 'progress'
    })

    .state('brands', {
      url: '/brands',
      templateUrl: 'app/pages/brands/brands.html',
      controller: 'brandsController',
      controllerAs: 'brands'
    })

    .state('momentum', {
      url: '/momentum',
      templateUrl: 'app/pages/momentum/momentum.html',
      controller: 'momentumController',
      controllerAs: 'momentum'
    })

    .state('stories', {
      url: '/stories',
      templateUrl: 'app/pages/stories/stories.html',
      controller: 'storiesController',
      controllerAs: 'stories'
    })

    .state('motion', {
      url: '/motion',
      templateUrl: 'app/pages/motion/motion.html',
      controller: 'motionController',
      controllerAs: 'motion'
    })

    .state('making', {
      url: '/making',
      templateUrl: 'app/pages/making/making.html',
      controller: 'makingController',
      controllerAs: 'making'
    })
}
