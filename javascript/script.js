	
////// Anneli har gjort pris/sort-variablerna och .html-funktionerna som styr bilder, Isa har lagt in beskrivningsvariablerna (finns i description.js) 

	$(document).ready(function() {

	// <Variabler>
			muffinpris = 0;
			frostpris = 0;
			topfrostpris = 0;
			strosselpris = 0;
			decopris = 0;
			wrappris = 0;
			totalt = 0;
			antal = 0;
			muffinSort = "";
			frostSort = "";
			topfrostSort = "";
			strosselSort = "";
			decoSort = "";
			wrapSort = "";
	// </Variabler>


	// <Muffin-funktioner>

		// Chokladmuffin
		$("#choklad").click(function(){   
			muffinpris = 14;
			muffinSort = "choklad";
			$(".muffin").html("<img src='img/muffin/muffin_chocolate.PNG'/>");
      		$("#ingredientsMuffin").html(chokladMuffinDesc);
		});

		// Bananmuffin
		$("#banan").click(function(){   
			muffinpris = 10;
			muffinSort = "banan";
			$(".muffin").html("<img src='img/muffin/muffin_banana.PNG'/>");
      		$("#ingredientsMuffin").html(bananMuffinDesc);
		});

		// Morotsmuffin
		$("#morot").click(function(){   
			muffinpris = 6;
			muffinSort = "morot";
			$(".muffin").html("<img src='img/muffin/muffin_carrot.PNG'/>");
      		$("#ingredientsMuffin").html(morotMuffinDesc);
		});

		// Red Velvet-muffin
		$("#red").click(function(){   
			muffinpris = 14;
			muffinSort = "Red Velvet";
			$(".muffin").html("<img src='img/muffin/muffin_redvelvet.PNG'/>");
      		$("#ingredientsMuffin").html(redvelvetMuffinDesc);
		});

		// Vaniljmuffin
		$("#vanilj").click(function(){   
			muffinpris = 10;
			muffinSort = "vanilj";
			$(".muffin").html("<img src='img/muffin/muffin_vanilla.PNG'/>");
      		$("#ingredientsMuffin").html(vaniljMuffinDesc);
		});

		// Mandelmuffin
		$("#mandel").click(function(){   
			muffinpris = 8;
			muffinSort = "mandel";
			$(".muffin").html("<img src='img/muffin/muffin_almond.PNG'/>");
      		$("#ingredientsMuffin").html(mandelMuffinDesc);
		});

		// Äppelmuffin
		$("#apple").click(function(){   
			muffinpris = 8;
			muffinSort = "äppel";
			$(".muffin").html("<img src='img/muffin/muffin_apple.PNG'/>");
      		$("#ingredientsMuffin").html(appelMuffinDesc);
		});

		// Blåbärsmuffin
		$("#blue").click(function(){   
			muffinpris = 12;
			muffinSort = "blåbär";
			$(".muffin").html("<img src='img/muffin/muffin_blueberry.PNG'/>");
      		$("#ingredientsMuffin").html(blabarMuffinDesc);
		});

		// Körsbärsmuffin
		$("#cherry").click(function(){   
			muffinpris = 12;
			muffinSort = "körsbär";
			$(".muffin").html("<img src='img/muffin/muffin_cherry.PNG'/>");
      		$("#ingredientsMuffin").html(korsbarMuffinDesc);
		});

		// Chokladchip-muffin
		$("#chip").click(function(){  
			muffinpris = 8;
			muffinSort = "chokladchip";
			$(".muffin").html("<img src='img/muffin/muffin_chocolatechip.PNG'/>");
      		$("#ingredientsMuffin").html(chokladchipMuffinDesc);
		});

		// Kaffe/Choklad-muffin
		$("#kaffe").click(function(){   
			muffinpris = 14;
			muffinSort = "kaffe";
			$(".muffin").html("<img src='img/muffin/muffin_coffee.PNG'/>");
      		$("#ingredientsMuffin").html(kaffeMuffinDesc);
		});

		// Jordgubbsmuffin
		$("#jordgubb").click(function(){   
			muffinpris = 10;
			muffinSort = "jordgubb";
			$(".muffin").html("<img src='img/muffin/muffin_strawberry.PNG'/>");
      		$("#ingredientsMuffin").html(jordgubbMuffinDesc);
		});

		$("#morot, #choklad, #banan, #red, #vanilj, #mandel, #apple, #blue, #cherry, #chip, #kaffe, #jordgubb").click(function(){   
			$("#frostingklick").show('slide',{direction:'left'},400);
			$("#muffinnote").slideUp();
			$(".muffinpris").html(muffinpris + ":-");
			$(".muffinsort").html(muffinSort);
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");
		});
	// </Muffin-funktioner>

	// <Frosting-funktioner>

		// Choklad
		$("#frostingchoklad").click(function(){  
			frostpris = 6;
			frostSort = "choklad";
			$(".frosting").html("<img src='img/frosting/frosting_chocolate.PNG'/>"); 
      		$("#ingredientsFrosting").html(chokladFrostingDesc);
		});

		// Grönt te
		$("#frostinggreentea").click(function(){  
			frostpris = 8;
			frostSort = "grönt té";
			$(".frosting").html("<img src='img/frosting/frosting_greentea.PNG'/>"); 
      		$("#ingredientsFrosting").html(grontteFrostingDesc);
		});

		// Hasselnöt
		$("#frostinghazelnut").click(function(){  
			frostpris = 8;
			frostSort = "hasselnöt";
			$(".frosting").html("<img src='img/frosting/frosting_hazelnut.PNG'/>"); 
      		$("#ingredientsFrosting").html(hasselnotFrostingDesc);
		});

		// Kakdeg
		$("#frostingcookiedough").click(function(){  
			frostpris = 6;
			frostSort = "kakdeg";
			$(".frosting").html("<img src='img/frosting/frosting_cookiedough.PNG'/>"); 
      		$("#ingredientsFrosting").html(kakdegFrostingDesc);
		});

		// Blåbär
		$("#frostingblueberry").click(function(){  
			frostpris = 4;
			frostSort = "blåbär";
			$(".frosting").html("<img src='img/frosting/frosting_blueberry.PNG'/>");
      		$("#ingredientsFrosting").html(blabarFrostingDesc);
		});

		// Banan
		$("#frostingbanana").click(function(){ 
			frostpris = 2;
			frostSort = "banan";
			$(".frosting").html("<img src='img/frosting/frosting_banana.PNG'/>");
      		$("#ingredientsFrosting").html(bananFrostingDesc);
		});

		// Grädde
		$("#frostingcream").click(function(){   
			frostpris = 2;
			frostSort = "grädde";
			$(".frosting").html("<img src='img/frosting/frosting_cream.PNG'/>");
      		$("#ingredientsFrosting").html(graddFrostingDesc);
		});

		// Polkagris
		$("#frostingpolka").click(function(){  
			frostpris = 4;
			frostSort = "polkagris";
			$(".frosting").html("<img src='img/frosting/frosting_polka.PNG'/>");
      		$("#ingredientsFrosting").html(polkaFrostingDesc);
		});

		// Maräng
		$("#frostingmeri").click(function(){   
			frostpris = 2;
			frostSort = "maräng";
			$(".frosting").html("<img src='img/frosting/frosting_meringue.PNG'/>");
      		$("#ingredientsFrosting").html(marangFrostingDesc);
		});

		// Regnbåge
		$("#frostingrain").click(function(){   
			frostpris = 6;
			frostSort = "regnbåge";
			$(".frosting").html("<img src='img/frosting/frosting_rainbow.PNG'/>");
      		$("#ingredientsFrosting").html(regnbageFrostingDesc);
		});

		// Jordgubb
		$("#frostingstraw").click(function(){ 
			frostpris = 2;
			frostSort = "jordgubb";
			$(".frosting").html("<img src='img/frosting/frosting_strawberry.PNG'/>");
      		$("#ingredientsFrosting").html(jordgubbFrostingDesc);
		});

		// Kanel
		$("#frostingkanel").click(function(){   
			frostpris = 2;
			frostSort = "kanel";
			$(".frosting").html("<img src='img/frosting/frosting_kanel.PNG'/>");
      		$("#ingredientsFrosting").html(kanelFrostingDesc);
		});
		
		// Lönnsirap
		$("#frostingmaple").click(function(){   
			frostpris = 8;
			frostSort = "lönnsirap";
			$(".frosting").html("<img src='img/frosting/frosting_maplesyrup.PNG'/>");
      		$("#ingredientsFrosting").html(lonnsirapFrostingDesc);
		});

		// Vit choklad
		$("#frostingwhite").click(function(){ 
			frostpris = 4; 
			frostSort = "vit choklad";
			$(".frosting").html("<img src='img/frosting/frosting_whitechocolate.PNG'/>");
      		$("#ingredientsFrosting").html(vitchokladFrostingDesc);
		});

		$("#frostingchoklad, #frostingblueberry, #frostingbanana, #frostingcream, #frostingpolka, #frostingmaple, #frostingstraw, #frostingmeri, #frostingrain, #frostingkanel, #frostingwhite, #frostinggreentea, #frostingcookiedough, #frostinghazelnut").click(function(){  
			$("#topfrostklick, #strosselklick, #decoklick").show('slide',{direction:'left'},400);
			$("#ingenfrost").css("display", "block");
			$("#frostingnote").slideUp();
			$(".frostpris").html(frostpris + ":-"); 
			$(".frostingsort").html(frostSort);
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");
		});

	// </Frosting-funktioner>

	// <Extra frosting-funktioner>

		$("#topfrostchoklad").click(function(){   
			topfrostpris = 3;   
			topfrostSort = "choklad";
			$(".topfrost").html("<img src='img/frosting/frosting_chocolate.PNG'/>");
      		$("#ingredientsTopfrost").html(chokladFrostingDesc);
		});

		$("#topfrostblueberry").click(function(){   
			topfrostpris = 2;
			topfrostSort = "blåbär";
			$(".topfrost").html("<img src='img/frosting/frosting_blueberry.PNG'/>");
      		$("#ingredientsTopfrost").html(blabarFrostingDesc);
		});

		$("#topfrostbanana").click(function(){   
			topfrostpris = 1;
			topfrostSort = "banan";
			$(".topfrost").html("<img src='img/frosting/frosting_banana.PNG'/>");
      		$("#ingredientsTopfrost").html(bananFrostingDesc);
		});

		$("#topfrostcream").click(function(){   
			topfrostpris = 1;
			topfrostSort = "grädde";
			$(".topfrost").html("<img src='img/frosting/frosting_cream.PNG'/>");
      		$("#ingredientsTopfrost").html(graddFrostingDesc);
		});

		$("#topfrostpolka").click(function(){   
			topfrostpris = 2;
			topfrostSort = "polkagris";
			$(".topfrost").html("<img src='img/frosting/frosting_polka.PNG'/>");
      		$("#ingredientsTopfrost").html(polkaFrostingDesc);
		});

		$("#topfrostmeri").click(function(){   
			topfrostpris = 1;  
			topfrostSort = "maräng";
			$(".topfrost").html("<img src='img/frosting/frosting_meringue.PNG'/>");
      		$("#ingredientsTopfrost").html(marangFrostingDesc);
		});

		$("#topfrostrain").click(function(){  
			topfrostpris = 3;
			topfrostSort = "regnbåge";
			$(".topfrost").html("<img src='img/frosting/frosting_rainbow.PNG'/>");
      		$("#ingredientsTopfrost").html(regnbageFrostingDesc);
		});

		$("#topfroststraw").click(function(){   
			topfrostpris = 1;
			topfrostSort = "jordgubb";
			$(".topfrost").html("<img src='img/frosting/frosting_strawberry.PNG'/>");
      		$("#ingredientsTopfrost").html(jordgubbFrostingDesc);
		});

		$("#topfrostkanel").click(function(){   
			topfrostpris = 1;
			topfrostSort = "kanel";
			$(".topfrost").html("<img src='img/frosting/frosting_kanel.PNG'/>");
      		$("#ingredientsTopfrost").html(kanelFrostingDesc);
		});

		$("#topfrostmaple").click(function(){   
			topfrostpris = 4;
			topfrostSort = "lönnsirap";
			$(".topfrost").html("<img src='img/frosting/frosting_maplesyrup.PNG'/>");
      		$("#ingredientsTopfrost").html(lonnsirapFrostingDesc);
		});

		$("#topfrostwhite").click(function(){ 
			topfrostpris = 2;
			topfrostSort = "vit choklad";
			$(".topfrost").html("<img src='img/frosting/frosting_whitechocolate.PNG'/>");
      		$("#ingredientsTopfrost").html(vitchokladFrostingDesc);
		});

		$("#topfrostgreentea").click(function(){  
			topfrostpris = 8;
			topfrostSort = "grönt té";
			$(".topfrost").html("<img src='img/frosting/frosting_greentea.PNG'/>"); 
      		$("#ingredientsTopfrost").html(grontteFrostingDesc);
		});

		$("#topfrosthasselnot").click(function(){  
			topfrostpris = 8;
			topfrostSort = "hasselnöt";
			$(".topfrost").html("<img src='img/frosting/frosting_hazelnut.PNG'/>"); 
      		$("#ingredientsTopfrost").html(hasselnotFrostingDesc);
		});

		$("#topfrostcookiedough").click(function(){  
			topfrostpris = 6;
			topfrostSort = "kakdeg";
			$(".topfrost").html("<img src='img/frosting/frosting_cookiedough.PNG'/>"); 
      		$("#ingredientsTopfrost").html(kakdegFrostingDesc);
		});

		$("#topfrostchoklad, #topfrostblueberry, #topfrostbanana, #topfrostcream, #topfrostpolka, #topfrostmaple, #topfroststraw, #topfrostmeri, #topfrostrain, #topfrosthasselnot, #topfrostkanel, #topfrostwhite, #topfrostgreentea, #topfrostcookiedough").click(function(){  
			$("#ingentopfrost").css("display","block");
			$(".topfrostpris").html(topfrostpris + ":-");
			$(".topfrostsort").html(topfrostSort);
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");
		});


	// </Extra frosting-funktioner>


	// <Strössel-funktioner>

		// Chokladströssel
		$("#strosselchoklad").click(function(){  
		strosselpris = 2;
			strosselSort = "chokladströssel";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_chocolate.PNG'/>");
	      	$("#ingredientsStrossel").html(chokladStrosselDesc);
		});

		// Hjärtan
		$("#strosselhearts").click(function(){   
			strosselpris = 2;
			strosselSort = "hjärtströssel";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_hearts.PNG'/>");
	      	$("#ingredientsStrossel").html(hjartanStrosselDesc);
		});

		// Regnbågsströssel
		$("#strosselrain").click(function(){  
			strosselpris = 2;
			strosselSort = "regnbågsströssel";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_rainbow.PNG'/>");
	      	$("#ingredientsStrossel").html(regnbageStrosselDesc);
		});

		// Riven choklad
		$("#strosselriven").click(function(){  
			strosselpris = 2;
			strosselSort = "riven choklad";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_riven.PNG'/>");
	      	$("#ingredientsStrossel").html(rivenStrosselDesc);
		});

		// Marshmallows
		$("#strosselmarsh").click(function(){  
			strosselpris = 3;
			strosselSort = "marshmallows";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_marshmallows.PNG'/>");
	      	$("#ingredientsStrossel").html(marshmallowStrosselDesc);
		});

		// Krossad daim
		$("#strosseldaim").click(function(){  
			strosselpris = 3;
			strosselSort = "krossad daim";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_daim.PNG'/>");
	      	$("#ingredientsStrossel").html(daimStrosselDesc);
		});

		// Lakrits
		$("#strossellakrits").click(function(){  
			strosselpris = 3;
			strosselSort = "lakritsströssel";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_licorice.PNG'/>");
	      	$("#ingredientsStrossel").html(lakritsStrosselDesc);
		});


		// Chocolate Chip
		$("#strosselchip").click(function(){  
			strosselpris = 3;
			strosselSort = "chokladchipströssel";
			$(".strossel").html("<img src='img/sprinkles/sprinkles_chocolatechip.PNG'/>");
	      	$("#ingredientsStrossel").html(chokladchipStrosselDesc);
		});


		$("#strosselchoklad, #strosselchip, #strosselhearts, #strosselrain, #strosselriven, #strosselmarsh, #strossellakrits, #strosseldaim").click(function(){  
		$("#ingenstrossel").css("display","block");
		$(".strosselpris").html(strosselpris + ":-"); 
		$(".strosselsort").html(strosselSort);  
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");  
		});


	// </Strössel-funktioner>

	// <Muffinform-funktioner>
		// Brun form
		$("#wrapbrun").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_brown.PNG'/>");
			wrapSort = "brun";
		});

		// Rosa form
		$("#wraprosa").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_pink.PNG'/>");
			wrapSort = "rosa";
		});

		// Lila form
		$("#wraplila").click(function(){  
			$(".wrapper").html("<img src='img/wrapping/wrapping_purple.PNG'/>");
			wrapSort = "lila";
		});

		// Röd form
		$("#wrapred").click(function(){  
			$(".wrapper").html("<img src='img/wrapping/wrapping_red.PNG'/>");
			wrapSort = "röd";
		});

		// Vit form
		$("#wrapvit").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_white.PNG'/>");
			wrapSort = "vit";
		});

		// Blå form
		$("#wrapbla").click(function(){    
			$(".wrapper").html("<img src='img/wrapping/wrapping_blue.PNG'/>");
			wrapSort = "blå";
		});

		// Gul form
		$("#wrapgul").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_yellow.PNG'/>");
			wrapSort = "gul";
		});

		// Grön form
		$("#wrapgron").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_green.PNG'/>");
			wrapSort = "grön";
		});

		// Form med Röda hjärtan
		$("#wrapredhearts").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_redhearts.PNG'/>");
			wrapSort = "röda hjärtan";
		});

		// Form med hjärtan
		$("#wraphearts").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_hearts.PNG'/>");
			wrapSort = "hjärtan";
		});

		// Form med mönster
		$("#wrappattern").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_pattern.PNG'/>");
			wrapSort = "Mönster";
		});


		// Svart och guldig form
		$("#wrapgold").click(function(){   
			$(".wrapper").html("<img src='img/wrapping/wrapping_gold.PNG'/>");
			wrapSort = "svart & guld";
			$("#wrapOrder").html(guldFormOrder);
		});

		$("#wrapbrun, #wraprosa, #wraplila, #wrapgul, #wrapvit, #wrapred, #wrapgron, #wrapbla, #wrapredhearts, #wraphearts, #wrappattern, #wrapgold").click(function(){   
			wrappris = 1;
			$("#muffinklick").show('slide',{direction:'left'},400);
			$("#wrapnote").slideUp();
			$(".wrappris").html(wrappris + ":-");  
			$(".wrapsort").html(wrapSort);
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");
		});


	// </Muffinform-funktioner>

	// <Dekoration-funktioner>

		// Körsbärs-dekoration
		$("#decocherry").click(function(){  
			decopris = 4;
			decoSort = "körsbär";
			$(".deco").html("<img src='img/decoration/decoration_cherry.PNG'/>");
	      	$("#ingredientsDeco").html(korsbarDecoDesc);
		});

		// Graham-kex-dekoration
		$("#decocrack").click(function(){ 
			decopris = 2;
			decoSort = "grahamkex";
			$(".deco").html("<img src='img/decoration/decoration_cracker.PNG'/>");
	      	$("#ingredientsDeco").html(grahamDecoDesc);
		});

		// Maräng-dekoration
		$("#decomarang").click(function(){ 
			decopris = 2;    
			decoSort = "maräng";
			$(".deco").html("<img src='img/decoration/decoration_meringue.PNG'/>");
	      	$("#ingredientsDeco").html(marangDecoDesc);
		});

		// Viol-dekoration
		$("#decoviol").click(function(){ 
			decopris = 4;
			decoSort = "viol";
			$(".deco").html("<img src='img/decoration/decoration_violet.PNG'/>");
	      	$("#ingredientsDeco").html(violDecoDesc);
		});

		// Banan-dekoration
		$("#decobanan").click(function(){ 
			decopris = 1;    
			decoSort = "banan";
			$(".deco").html("<img src='img/decoration/decoration_banana.PNG'/>");
	      	$("#ingredientsDeco").html(bananDecoDesc);
		});

		// Röd ros-dekoration
		$("#decoredrose").click(function(){   
			decopris = 8;
			decoSort = "röd ros";
			$(".deco").html("<img src='img/decoration/decoration_redrose.PNG'/>");
	      	$("#ingredientsDeco").html(rodrosDecoDesc);
		});

		// Rosa ros-dekoration
		$("#decopinkrose").click(function(){ 
			decopris = 8;
			decoSort = "rosa ros";
			$(".deco").html("<img src='img/decoration/decoration_rose.PNG'/>");
	      	$("#ingredientsDeco").html(rosarosDecoDesc);
		});

		// Jordgubbs-dekoration
		$("#decostraw").click(function(){  
			decopris = 4;
			decoSort = "jordgubbe";
			$(".deco").html("<img src='img/decoration/decoration_strawberry.PNG'/>");
	      	$("#ingredientsDeco").html(jordgubbDecoDesc);
		});

		// Polkastång-dekoration
		$("#decostraws").click(function(){   
			decopris = 2;
			decoSort = "polkastång";
			$(".deco").html("<img src='img/decoration/decoration_straw.PNG'/>");
	      	$("#ingredientsDeco").html(polkastangDecoDesc);
		});

		// Björnbärs-dekoration
		$("#decoblack").click(function(){   
			decopris = 4;
			decoSort = "björnbär";
			$(".deco").html("<img src='img/decoration/decoration_blackberry.PNG'/>");
	      	$("#ingredientsDeco").html(bjornbarDecoDesc);
		});

		// Maltesers-dekoration
		$("#decomaltes").click(function(){   
			decopris = 2;
			decoSort = "Malteser-kula";
			$(".deco").html("<img src='img/decoration/decoration_malteser.PNG'/>");
	      	$("#ingredientsDeco").html(malteserDecoDesc);
		});

		// Oreo-dekoration
		$("#decooreo").click(function(){
			decopris = 3;   
			decoSort = "oreo";
			$(".deco").html("<img src='img/decoration/decoration_oreo.PNG'/>");
	      	$("#ingredientsDeco").html(oreoDecoDesc);x
		});

		// Reese's Pieces-dekoration
		$("#decoreese").click(function(){   
			decopris = 3;
			decoSort = "Reese's ButterCups";
			$(".deco").html("<img src='img/decoration/decoration_reeses.PNG'/>");
	      	$("#ingredientsDeco").html(reesesDecoDesc);
		});

		// Chokladhjärtan-dekoration
		$("#decohearts").click(function(){   
			decopris = 3;
			decoSort = "chokladhjärtan";
			$(".deco").html("<img src='img/decoration/decoration_hearts.PNG'/>");
	      	$("#ingredientsDeco").html(hjartanDecoDesc);
		});

		// Chokladkex-dekoration
		$("#decowafer").click(function(){   
			decopris = 2;
			decoSort = "chokladkex";
			$(".deco").html("<img src='img/decoration/decoration_kex.PNG'/>");
	      	$("#ingredientsDeco").html(chokladkexDecoDesc);
		});

		$("#decocherry, #decocrack, #decomarang, #decomaltes, #decoviol, #decobanan, #decooreo, #decostraw, #decostraws, #decoredrose, #decoreese, #decopinkrose, #decoblack, #decohearts, #decowafer").click(function(){   
			$(".decopris").html(decopris + ":-");   
			$(".decosort").html(decoSort);		
			$("#ingendeco").css("display","block");
		      totalcost = muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris; 
			$(".totalt").html(totalcost + ":-");
		});


	// </Dekoration-funktioner>

	// <Ta bort-funktioner>


		// Ta bort extra frosting
		$("#ingentopfrost").click(function(){   
			topfrostpris = 0;
			topfrostSort = "";
			$(".topfrost, .topfrostpris, .topfrostsort, #ingredientsTopfrost").html("");
			$("#ingentopfrost").css("display","none");
			$(".totalt").html(muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris);
		});

		// Ta bort strössel
		$("#ingenstrossel").click(function(){   
			strosselpris = 0;
			strosselSort = "";
			$(".strosselsort, .strosselpris, .strossel, #ingredientsStrossel").html("");
			$("#ingenstrossel").css("display","none");
			$(".totalt").html(muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris);
		});

		// Ta bort dekorationer
		$("#ingendeco").click(function(){   
			decopris = 0;
			decoSort = "";
			$(".decopris").html(""); 
			$(".deco, #ingredientsDeco").html("");
			$(".decosort").html("");
			$("#ingendeco").css("display","none");
			$(".totalt").html(muffinpris + frostpris + topfrostpris + strosselpris + decopris + wrappris);
		});

	// </Ta bort-funktioner>

		});