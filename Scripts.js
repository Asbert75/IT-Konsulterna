$(document).ready(function() {
	$(window).scroll(function () {});
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
		
		
		
		
		$(".Explanation").hover(function(){
			$('.image-content').addClass('hidden');
			$('.text-content').removeClass('hidden');
		},function(){
			$('.image-content').removeClass('hidden');
			$('.text-content').addClass('hidden');
		});
		
	});