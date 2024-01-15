$(document).ready(function() {
	$('.top__menu-burger').click(function(event) {
		$('.top__menu-burger,.top__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});