$(document).ready(function(){	
	
	
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


	$(window).scroll(function () {});
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	
	
	
	$(".round").hover(
	
		function() {
			$(this).stop().animate({
				width: 125,
				height: 125,
		});
		}, 
		
		function() {
			$(this).stop().animate({
				width: 75,
				height: 75,
		});
		}
	);
});