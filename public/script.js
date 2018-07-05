$(document).ready(function(){
$(window).on('load', function() {
	$(".loader").delay(7000).hide();
	$(".container").delay(2000).fadeIn(1);
});

/*Pruebas*/

// var parallax = document.querySelectorAll(".parallax");
// var	speed = -0.25;

// window.onscroll = function() {
// 	[].slice.call(parallax).forEach(function(el, i) {

//         var y = 97;
//         if ($(window).width()>= 650){y=228};

// 		var windowYOffset = window.pageYOffset,
//             elBackgrounPos = "50% " + (windowYOffset * speed + i * 200 + y) + "px";
            

// 		el.style.backgroundPosition = elBackgrounPos;
       
// 	});
// };


    $('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
})
function mobileMenu() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

// comic panel alt images

$(".panel-1").click(function(){
    $(this).toggleClass("alt-1")  ; 
   })
   $(".panel-2").click(function(){
    $(this).toggleClass("alt-2")  ; 
   })
   $(".panel-3").click(function(){
    $(this).toggleClass("alt-3")  ; 
   })
   $(".panel-4").click(function(){
    $(this).toggleClass("alt-4")  ; 
   })

