(function () {
	'use strict';
  	angular.element(function() {
  		angular.element(".open-popup").fullScreenPopup({
  			bgColor: "#fff",
			inlineStyles: true,
			animationSpeed: 200
  		});
  	});

  	angular.element(document).ready(function () {
    	objectFitVideos();
    });
})();


