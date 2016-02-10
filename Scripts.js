$(document).ready(function() {
		$(".Explanation").hover(function(){
			$('.image-content').addClass('hidden');
			$('.text-content').removeClass('hidden');
		},function(){
			$('.image-content').removeClass('hidden');
			$('.text-content').addClass('hidden');
		});
	
		$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
		});


	
	});