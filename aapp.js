$(document).ready(function(){
	$('.normaux').hide();
	$('.amour1, amour2').hide();
	$('.roux1, roux2, roux3').hide();
	$('.haine1, haine2').hide();
	$('h3').hide();
	$('.panda1').click(function(){
		$('.normaux').show('slow', function(){
			$('.amour1').show();
		});

	});
	$('.panda2').click(function(){
		$('.amour2').show('slow', function(){
			$('.roux1').show();
		});
	});

	$('.panda3').click(function(){
		$('.roux2').show('slow', function(){
			$('.haine1').show();
		});
	});

	$('.panda4').click(function(){
		$('.roux3').show('slow', function(){
			$('.haine2').show();
		});
	});

	$('.panda5').click(function(){
		$('h3').show();
	});
})