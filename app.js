var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

$(document).ready(function(){
	$(".chat").hide();
	$(".ours").hide();
	$(".poisson").hide();

	$("button#chat").click(function(){
		$(".chat").show('slow');
				
	});

	$("button#ours").click(function(){
		$(".ours").show('show');
	});

	$("button#poisson").click(function(){
		$(".poisson").show('show');
    });
	
});