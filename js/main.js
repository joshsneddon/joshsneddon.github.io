var headerHeight = $('header').height(); 

// Reveal/Hide Primary Navigation
$('#navToggle').click(function() {
	$('#navIcon').toggleClass('is-clicked');
	$('#navReveal').toggleClass('is-visible');
	$('header').toggleClass('is-active')
});

// Hides Primary Navigation when a link is clicked
$('#navReveal li a').click(function() {
	$('#navIcon').removeClass('is-clicked');
	$('#navReveal').removeClass('is-visible');
});

// Page scrolls to first section when 'scrollDownArrow' is clicked
$(function() {
	$('#scrollDownArrow').click(function() {
		// The selector is the first section and the fixed header height is subtracted
		$('html, body').animate({
			scrollTop: $('#about').offset().top - 60
		}, 750);
		return false;
	});
});

// Smooth page scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 750);
        return false;
      }
    }
  });
});

// A background color is appled to the header when the user starts scrolling
$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > headerHeight) {
			$('header').removeClass('animated slideInDown');
        	$('header').addClass('animated--fast slideInDown is-active');
        } else {
           //remove the background property so it comes transparent again (defined in your css)
        	$('header').removeClass('animated--fast slideInDown is-active');
        }
    });
});