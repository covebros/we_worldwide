angular
.module('app')
.component('placementOnBackgrounds', {
  templateUrl: 'app/components/logo/placement-on-backgrounds/placement-on-backgrounds.html',
  transclude: {
    mainTitle: 'mainTitle',
    paragraph: 'paragraph',
    imageOne: 'imageOne',
    imageTwo: 'imageTwo',
    imageThree: 'imageThree',
    imageFour: 'imageFour',
    imageFive: 'imageFive',
    imageSix: 'imageSix',
    titleOne: 'titleOne',
    paragraphOne: 'paragraphOne',
    titleTwo: 'titleTwo',
    paragraphTwo: 'paragraphTwo',
    titleThree: 'titleThree',
    paragraphThree: 'paragraphThree'
  }
});
