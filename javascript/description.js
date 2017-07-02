$(document).ready(function() {

  allMuffin = "<br/> Alla våra muffins innehåller mjöl, bakpulver, vaniljextrakt, ägg, mjölk, yogurt & smör.";
  allFrosting = "<br/>Våra frostings innehåller socker, mjölk och färskost, men kan beställas laktosfria.";

  chokladMuffinDesc = "<h1>Chokladmuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker, kakao & yogurt." + allMuffin;
  bananMuffinDesc = "<h1>Bananmuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker, bananer & salt." + allMuffin;
  morotMuffinDesc = "<h1>Morotsmuffins</h1><span class='blue'>Smaksättning</span>: Brunt socker, morot &  muskotnöt." + allMuffin;
  korsbarMuffinDesc = "<h1>Körsbärsmuffins</h1><span class='blue'>Smaksättning</span>: Brunt socker & färska körsbär." + allMuffin;
  vaniljMuffinDesc = "<h1>Vaniljmuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker & extra vaniljextrakt." + allMuffin;
  mandelMuffinDesc = "<h1>Mandelmuffins</h1><span class='blue'>Smaksättning</span>: Brunt socker, skivad mandel & salt." + allMuffin;
  chokladchipMuffinDesc = "<h1>Chokladchipmuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker & chokladknappar." + allMuffin;
  appelMuffinDesc = "<h1>Äppelmuffins</h1><span class='blue'>Smaksättning</span>: Brunt socker, färska äpplen & kanel." + allMuffin;
  blabarMuffinDesc = "<h1>Blåbärsmuffins</h1><span class='blue'>Smaksättning</span>: Brunt socker & färska blåbär." + allMuffin;
  redvelvetMuffinDesc = "<h1>Red Velvet-muffins</h1><span class='blue'>Smaksättning</span>: Kakao, vitt socker & röd hushållsfärg." + allMuffin;
  jordgubbMuffinDesc = "<h1>Jordgubbsmuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker & färska jordgubbar." + allMuffin;
  kaffeMuffinDesc = "<h1>Kaffemuffins</h1><span class='blue'>Smaksättning</span>: Vitt socker, kakao & espressokaffe." + allMuffin;

  chokladFrostingDesc = "<h1>Chokladfrosting</h1><span class='blue'>Smaksättning</span>: Kakao, mörk choklad & vaniljextrakt." + allFrosting;
  blabarFrostingDesc = "<h1>Blåbärsfrosting</h1><span class='blue'>Smaksättning</span>: Färska blåbär & florsocker." + allFrosting;
  bananFrostingDesc = "<h1>Bananfrosting</h1><span class='blue'>Smaksättning</span>: Färska bananer & florsocker." + allFrosting;
  graddFrostingDesc = "<h1>Gräddfrosting</h1><span class='blue'>Smaksättning</span>: Vispad grädde & florsocker." + allFrosting;
  polkaFrostingDesc = "<h1>Polkagrisfrosting</h1><span class='blue'>Smaksättning</span>: Pepparmintsolja, röd hushållsfärg & vaniljextrakt." + allFrosting;
  marangFrostingDesc = "<h1>Marängfrosting</h1><span class='blue'>Smaksättning</span>: Florsocker, choklad & äggvita." + allFrosting;
  regnbageFrostingDesc = "<h1>Regnbågsfrosting</h1><span class='blue'>Smaksättning</span>: Röd, blå och gul hushållsfärg, florsocker, vaniljextrakt & osaltat smör." + allFrosting;
  jordgubbFrostingDesc = "<h1>Jordgubbsfrosting</h1><span class='blue'>Smaksättning</span>: Färska jordgubbar, florsocker & vaniljextrakt." + allFrosting;
  kanelFrostingDesc = "<h1>Kanelfrosting</h1><span class='blue'>Smaksättning</span>: Kanel, vispad grädde & osaltat smör." + allFrosting;
  lonnsirapFrostingDesc = "<h1>Lönnsirapsfrosting</h1><span class='blue'>Smaksättning</span>: Äkta lönnsirap, kardemumma & vaniljextrakt." + allFrosting;
  vitchokladFrostingDesc = "<h1>Vit chokladfrosting</h1><span class='blue'>Smaksättning</span>: Vit choklad.";
  grontteFrostingDesc = "<h1>Grönt téfrosting</h1><span class='blue'>Smaksättning</span>: Matchas grönt té-pulver & osaltat smör." + allFrosting;
  kakdegFrostingDesc = "<h1>Kakdegsfrosting</h1><span class='blue'>Smaksättning</span>: Kakdeg, browniebitar & chokladknappar." + allFrosting;
  hasselnotFrostingDesc = "<h1>Hasselnötsfrosting</h1><span class='blue'>Smaksättning</span>: Hackade hasselnötter, Nutella, vaniljextrakt & salt." + allFrosting;

  chokladStrosselDesc = "<h1>Chokladströssel</h1> ";
  rivenStrosselDesc = "<h1>Riven Choklad</h1> 70% mörk choklad, riven.";
  hjartanStrosselDesc = "<h1>HJärtformat strössel</h1> Röda sockerhjärtan.";
  regnbageStrosselDesc = "<h1>Regnbågsströssel</h1> Flerfärgat strössel med smak av jordgubb, vanilj, blåbär och melon.";
  marshmallowStrosselDesc = "<h1>Mini-marshmallows</h1> Mini-marshmallows i neutral vaniljsmak.";
  daimStrosselDesc = "<h1>Daimströssel</h1> Finkrossad daimchoklad.";
  lakritsStrosselDesc = "<h1>Lakritsströssel</h1> Svart strössel med smak av lakrits";
  chokladchipStrosselDesc = "<h1>Choklad-chipströssel</h1> Små chokladknappar intrycka i frostingen";

  korsbarDecoDesc = "<h1>Körsbär</h1>";
  grahamDecoDesc = "<h1>Graham-kex</h1> Gammaldags graham-kex.";
  marangDecoDesc = "<h1>Maräng</h1> Maräng med överdrag av kolasås.";
  rodrosDecoDesc = "<h1>Röd ros</h1> Röd marsipanros.";
  rosarosDecoDesc = "<h1>Rosa ros</h1> Rosa sugarpasteros.";
  jordgubbDecoDesc = "<h1>Jordgubbe</h1> En färsk jordgubbe.";
  polkastangDecoDesc = "<h1>Polkastång</h1> Färgglad sockerstång med pepparmintsolja";
  bjornbarDecoDesc = "<h1>Björnbär</h1> Ett färskt björnbär.";
  malteserDecoDesc = "<h1>Malteser-kula</h1> Innehåller honung";
  oreoDecoDesc = "<h1>Oreo</h1> Innehåller gluten & laktos";
  reesesDecoDesc = "<h1>Reese's Peanut Butter Cup</h1> Innehåller jordnötter";
  violDecoDesc = "<h1>Viol</h1> Sockerkanderad luktviol, ätbar";
  bananDecoDesc = "<h1>Bananskiva</h1> En färsk bananskiva.";
  hjartanDecoDesc = "<h1>Chokladhjärtan</h1> Två hjärtan i mjölkchoklad.";
  chokladkexDecoDesc = "<h1>Chokladkex</h1> Våffelkex med nougatfyllning";

});
