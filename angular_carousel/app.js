(function(){

	angular
		.module('carousel', []);

	angular
		.module('carousel')
		.controller('CarouselCtrl',CarouselCtrl);

	function CarouselCtrl() {
		var carouselvm = this;

		//Variables
		carouselvm.images = [
			'http://imgur.com/9itd49u.png',
			'http://imgur.com/n19BXfZ.png',
			'http://imgur.com/VBwQmzA.png',
			'http://imgur.com/nawDxVv.png'
		];

		//Function bindings
		carouselvm.next = next;
		carouselvm.previous = previous;

		//functions
		function next(){

		}

		function previous(){
			
		}
	}

})();
