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

    .state('how', {
      url: '/how',
      templateUrl: 'app/pages/how/how.html',
      controller: 'howController',
      controllerAs: 'how'
    })

    .state('why', {
      url: '/why',
      templateUrl: 'app/pages/why/why.html',
      controller: 'whyController',
      controllerAs: 'why'
    })

    .state('team', {
      url: '/team',
      templateUrl: 'app/pages/team/team.html',
      controller: 'teamController',
      controllerAs: 'team'
    });
}
