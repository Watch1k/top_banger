$(document).ready(function() {
	
	// navigation toggle
	$('#menu_toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.header ul, .header .search').toggleClass('is-active');
	});

});