(function () {
	"use strict";

	angular
	.module('AllClearApp')
	.run(run);

	function run ($ionicPlatform, PubSub, $ImageCacheFactory) {

		// Preload images
		$ImageCacheFactory.Cache([
	        "img/splash_screen.png",
	        "img/splash_screen2.png",
	        "img/background_screen.png",
	        "img/background_screen2.png"
	    ]).then(function(){
	        console.log("Images done loading!");
	    },function(failed){
	        console.log("An image filed: "+failed);
	    });

		$ionicPlatform.ready(function() {
	    	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
	    	if (window.cordova && window.cordova.plugins.Keyboard) {
	    		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    	}
	    	if (window.StatusBar) {
	            // org.apache.cordova.statusbar required
	            StatusBar.styleDefault();
	        }
            if (typeof AppVersion !== 'undefined'){

                // Cordova Version
                var appVersion = AppVersion.version;

                // Publish data
                PubSub.publish('app-version', appVersion);
            }
	    });
	};

})();