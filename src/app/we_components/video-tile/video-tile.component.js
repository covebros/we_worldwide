angular.module('app')
  .component('videoTile', {
    templateUrl: 'app/we_components/video-tile/video-tile.html',
    bindings: {
      videoId: '@',
      placeholder: '@'
    },
    transclude: {
      mainTitle: 'mainTitle',
      paragraph: 'paragraph'
    },
    controller: function ($sce) {
      this.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.videoId);
      this.imagePath = '/assets/images/video-tile/' + this.placeholder;
    }
  });
