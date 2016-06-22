// Section changes

$(document).ready(function(){

	$(window).scroll(function(){

		var splash = $("#splash").offset().top;
		var description = $("#description").offset().top;
		var register = ($("#register").offset().top);
		var syllabus = $("#syllabus").offset().top;
		var about = $("#about").offset().top;
		//var foot = $("#foot").offset().top;

		var scroll = $(window).scrollTop();

		if (scroll < splash) {
			$("#sidebar").removeClass("section-color-splash section-color-description section-color-register section-color-syllabus section-color-about")
						 .addClass("section-color");
		} 

		else if (splash <= scroll && scroll < description) {
			$("#sidebar").removeClass("section-color section-color-description section-color-register section-color-syllabus section-color-about")
						 .addClass("section-color-splash");
			$("#home-link, #register-link, #syllabus-link, #about-link").removeClass("active-link")
																     .addClass("inactive-link")
			$("#description-link").removeClass("inactive-link")
						 .addClass("active-link");
		}

		else if (description <= scroll && scroll < register) {
			$("#sidebar").removeClass("section-color section-color-splash section-color-register section-color-syllabus section-color-about")
						 .addClass("section-color-description");
			$("#home-link, #register-link, #syllabus-link, #about-link").removeClass("active-link")
																     .addClass("inactive-link")
			$("#description-link").removeClass("inactive-link")
						 .addClass("active-link");
		}

		else if (register <= scroll && scroll < syllabus) {
			$("#sidebar").removeClass("section-color section-color-splash section-color-description section-color-syllabus section-color-about")
						 .addClass("section-color-register");
			$("#home-link, #description-link, #syllabus-link, #about-link").removeClass("active-link")
																     .addClass("inactive-link")
			$("#register-link").removeClass("inactive-link")
						 .addClass("active-link");
		}

		else if (syllabus <= scroll && scroll < about) {
			$("#sidebar").removeClass("section-color section-color-splash section-color-description section-color-register section-color-about")
						 .addClass("section-color-syllabus");
			$("#home-link, #register-link, #description-link, #about-link").removeClass("active-link")
																     .addClass("inactive-link")
			$("#syllabus-link").removeClass("inactive-link")
						 .addClass("active-link");
		}

		else if (about <= scroll) {
			$("#sidebar").removeClass("section-color section-color-splash section-color-description section-color-register section-color-syllabus")
						 .addClass("section-color-about");
			$("#home-link, #register-link, #syllabus-link, #description-link").removeClass("active-link")
																     .addClass("inactive-link")
			$("#about-link").removeClass("inactive-link")
						 .addClass("active-link");
		}

		else {
			//
		}

	});

});

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + (40)
        }, 500);
        return false;
      }
    }
  });
});