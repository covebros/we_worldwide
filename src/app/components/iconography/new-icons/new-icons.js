angular
.module('app')
.component('newIcons', {
  templateUrl: 'app/components/iconography/new-icons/new-icons.html',
  transclude: {
    title: 'newTitle',
    paragraph: 'paragraph',
    icon1: 'correctIcon',
    icon2: 'incorrectIcon'
  }
});
