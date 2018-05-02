
$(document).ready(initPage);
function initPage(){
	initNav();
	initAnimationEl();
}
function initNav() {
	$("#nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top + 2;
		$('body,html').animate({scrollTop: top}, 1500);
    });
}
function initAnimationEl() {
	var viewportHeight = document.documentElement.clientHeight - 40;
	var animatedElement = ".animatedElement";
	var animateMainClass = "onload";
	var animateClass = "animate";

	$('body').addClass(animateMainClass);
	$(window).scroll(function() {
		$('#text').css("display", "none");
		$(animatedElement).each(function(){
			var el = $(this);
			var elPos = el.offset().top;
			var topOfWindow = $(window).scrollTop();
			var myOffset = 60;
	
			if ((elPos < topOfWindow + viewportHeight - myOffset)&&(elPos > 0)) {
				if (elPos < topOfWindow - myOffset ) {
					el.removeClass(animateClass);
				}
				else {
					el.addClass(animateClass);
				}
			}
			else {el.removeClass(animateClass);}
		});
		$('.timelineRoute').each(function(){
			var el = $(this);
			var objectPos = el.offset().top;
			var dashOffset = 0;
			var dashOffsetDefault = el[0].getTotalLength() + 30;
			var topOfWindow = $(window).scrollTop();
			if (objectPos < topOfWindow + viewportHeight) {
				dashOffset = viewportHeight*1.1 - (objectPos - topOfWindow);
				if (( dashOffset < dashOffsetDefault )&&( dashOffset > 0 )) {
					el.css('strokeDashoffset', dashOffset );
				}
				else {
					el.css('strokeDashoffset', dashOffsetDefault );
				}
			}
			else {
					el.css('strokeDashoffset', 0 );
			}
		});
	});
}
