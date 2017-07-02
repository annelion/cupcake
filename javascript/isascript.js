////////////////////////////////////// Isa //////////////////////////////////////

$(document).ready(function() {

      // Animerar de runda previewbilderna
      $(".preview").mouseenter(function(){  
         $(this).animate({marginTop: "-0.5vw", width: "3.5vw", height: "3.5vw"});
        });
      $(".preview").mouseleave(function(){  
         $(this).animate({marginTop: "0px", width: "3vw", height: "3vw"});
        });


      // <Hantering av sidorna>
      // Gjort med jquery istället för flera olika .html-sidor.

      // Cupcakemaker-sidan
      $("#cupcakemaker, #shortcut").click(function(){  // När man klickar på CupcakeMaker-länken eller Börja Designa Nu-knappen.
          $("#homepage, #aboutpage, #contactpage").slideUp(800); // Slidea upp allt annat så det döljs.
          $("#cupcakepage").delay(800).slideDown(800); // Visa "cupcakepage"
        });

      $("#aboutus").click(function(){  
          $("#homepage, #cupcakepage, #contactpage").slideUp(800); 
          $("#aboutpage").delay(800).slideDown(800); 
        });

      $("#home, #logga").click(function(){ 
          $("#aboutpage, #cupcakepage, #contactpage").slideUp(800); 
          $("#homepage").delay(800).slideDown(800); 
        });

        $("#contact").click(function(){
          $("#aboutpage, #homepage, #cupcakepage").slideUp(800); 
          $("#contactpage").delay(800).slideDown(800); 
        });



// </Hantering av sidorna>

// <Animationer på länkarna>
// Deras absolute top och left är skrivet i vw, annars hade de inte hamnat på samma ställe på skärmen oavsett skärmupplösning. 2.7 vw motsvarar typ 5px..


        $("#home").mouseenter(function(){     // När man för muspekaren över "Hem"
          $("#home").animate({top:"2vw"});  // Tryck upp "Hem" till top: 2.7vw.  
        });

        $("#home").mouseleave(function(){     // När muspekaren lämnar "Hem"
          $("#home").animate({top:"1.5vw"});    // Dra ner "Hem" till sin ursprungliga position (top: 1.5vw).
        });

        $("#design").mouseenter(function(){
          $("#design").animate({top:"2vw"});
        });

        $("#design").mouseleave(function(){
          $("#design").animate({top:"1.5vw"});
        });

        $("#aboutus").mouseenter(function(){ 
          $("#aboutus").animate({top:"2vw"}); 
        });

        $("#aboutus").mouseleave(function(){ 
          $("#aboutus").animate({top:"1.5vw"}); 
        });

        $("#contact").mouseenter(function(){
          $("#contact").animate({top:"2vw"});
        });

        $("#contact").mouseleave(function(){
            $("#contact").animate({top:"1.5vw"});
        });
      // </Animationer på länkarna>


});


