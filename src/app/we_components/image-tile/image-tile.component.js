angular.module('app')
  .component('imageTile', {
    templateUrl: 'app/we_components/image-tile/image-tile.html',
    bindings: {
      title: '@',
      subtitle: '@',
      link: '@',
      image: '@',
      number: '@'
    },
    transclude: true,
    controller: function () {
      this.backgroundImage = 'background-image:url(' + this.image + ')';
    }
  });
