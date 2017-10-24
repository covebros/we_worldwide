angular
.module('app')
.component('greyBgImageBlock', {
  templateUrl: 'app/components/logo/grey-bg-image-block/grey-bg-image-block.html',
  transclude: {
    mainTitle: 'mainTitle',
    paragraph: 'paragraph',
    visual: 'visual',
    references: 'references'
  }
});
