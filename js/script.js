$(function() {
    $('.smooth').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
});

$(document).ready(function() {

		const burgerMenu  = document.querySelector('.menuBurger');
		burgerMenu.addEventListener('click', function () {
		burgerMenu.classList.toggle('change');
		})
        /*Animation My way*/
		$('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); 
    },{
        offset:'50%'
    });
     
});

