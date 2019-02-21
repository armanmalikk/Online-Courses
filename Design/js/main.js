$(document).ready(function(){

   //mobile menu toggle button
    $("#mobile-menu-button").click(function(){
     
       $("#mobile-menu-list").fadeToggle( "slow", "linear" );

    });


})


$(document).scroll(function() {
	//Main Menu
           if($(window).scrollTop() > 50){

            $("#main-menu").css("background","#594d69e0");
 
           }else if($(window).scrollTop() < 50){

            $("#main-menu").css("background","");
  
           }

    //Mobile menu
           if($(window).scrollTop() > 50){

            $("#mobile-menu").css("background","#594d69e0");
 
           }else if($(window).scrollTop() < 50){

            $("#mobile-menu").css("background","");
  
           }
       
    });