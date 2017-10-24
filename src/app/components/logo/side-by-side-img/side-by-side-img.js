angular
.module('app')
.component('sideBySideImg', {
  templateUrl: 'app/components/logo/side-by-side-img/side-by-side-img.html',
  transclude: {
    titleLeft: 'titleLeft',
    imgLeft: 'imgLeft',
    referenceLeft: 'referenceLeft',
    titleRight: 'titleRight',
    imgRight: 'imgRight',
    referenceRight: 'referenceRight'
  }
});
