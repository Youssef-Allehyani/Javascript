jQuery(document).ready(function(){
   
   jQuery(".box-close").click(function(){
      jQuery(this).next(".swip").slideToggle();
      if ( jQuery(this).text() == "X"){
        jQuery(this).text("<<")
      }else{
        jQuery(this).text("X")
      }
      
   });

   jQuery(".answer").hide();
   jQuery(".question").append('<span class= "icon">>></span>');

   jQuery(".question").click(function(){
       jQuery(this).next(".answer").slideToggle();
       
   });

   jQuery(".faq .question").addClass("pointer");
   

   jQuery("#more").click(function(){
       jQuery("#plave-holder").load("more.html .more-items");
       return false;
   })
})