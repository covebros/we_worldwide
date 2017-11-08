(function () {
	'use strict';
  	angular.element(document).ready(function () {
    	objectFitVideos();
    });
    angular.element(document).ready(function () {
    	if (angular.element(window).width() < 992) {
        	angular.element('.mobile-remove').removeClass('animated');
        	angular.element('.mobile-remove').removeAttr('style');
      	}
    });
})();


