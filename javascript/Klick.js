////// Anneli har gjort slideup/slidedown-funktionerna, Isa har gjort CSS-funktionerna

$(document).ready(function() {
	
	$("#muffinklick").click(function() {
		$("#muffinval").slideDown();
		$("#muffinklick").css("background", "url(img/bluetexture.PNG)"); 				
		$("#frostingval, #strosselval, #decoval, #wrapval, #topfrostval").slideUp();
		$("#frostingklick, #strosselklick, #decoklick, #wrapklick, #topfrostklick").css("background", "url(img/texture.PNG)");
	});

	$("#frostingklick").click(function() {
	$("#frostingval, #frostmeny").slideDown();
	$("#frostingklick").css("background", "url(img/bluetexture.PNG)");
		$("#muffinval, #strosselval, #decoval, #wrapval, #topfrostval").slideUp();
		$("#muffinklick, #strosselklick, #decoklick, #wrapklick, #topfrostklick").css("background", "url(img/texture.PNG)");
	});

	$("#topfrostklick").click(function() {
	$("#topfrostval").slideDown();
	$("#topfrostklick").css("background", "url(img/bluetexture.PNG)");
	$("#frostingval, #strosselval, #decoval, #wrapval, #muffinval").slideUp();
	$("#muffinklick, #strosselklick, #decoklick, #wrapklick, #frostingklick").css("background", "url(img/texture.PNG)");
	});

	$("#strosselklick").click(function() {
	$("#strosselval").slideDown();
	$("#strosselklick").css("background", "url(img/bluetexture.PNG)");
	$("#frostingval, #decoval, #wrapval, #muffinval, #topfrostval, #frostmeny").slideUp();
	$("#muffinklick, #frostingklick, #decoklick, #wrapklick, #topfrostklick").css("background", "url(img/texture.PNG)");
	});

	$("#decoklick").click(function() {
	$("#decoval").slideDown();
	$("#decoklick").css("background", "url(img/bluetexture.PNG)");
	$("#frostingval, #strosselval, #wrapval, #muffinval, #topfrostval, #frostmeny").slideUp();
		$("#muffinklick, #strosselklick, #frostingklick, #wrapklick, #topfrostklick").css("background", "url(img/texture.PNG)");
	});

	$("#wrapklick").click(function() {
	$("#wrapval").slideDown();
	$("#wrapklick").css("background", "url(img/bluetexture.PNG)");
	$("#frostingval, #strosselval, #decoval, #muffinval, #topfrostval, #frostmeny").slideUp();
		$("#muffinklick, #strosselklick, #decoklick, #frostingklick, #topfrostklick").css("background", "url(img/texture.PNG)");
	});

	


});