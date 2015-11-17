$(function() {
var openDate = new Date();
var time = openDate.getDay();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var n = weekday[time];


if (time==0 || time==6){
  $('#datecheck').html('It\'s ' + n + ',<br>'+'SORRY, WE \'RE CLOSED');

}
else{
  $('#datecheck').html('It\'s ' + n + ',<br>'+'HELLO, WE \'RE OPEN!');

}


// smooth schrolling//



function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

//slider//
$('.bxslider').bxSlider({
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 0,
      slideMargin: 0,
      auto: true,
      infiniteLoop: true,
      pager: false,
      controls: false,
    });


//Check to see if the window is top if not then display button
$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

// date picker
$(function() {
    $( "#datepicker" ).datepicker();
  });

// time picker
$(function() {
$('#timepicker').timepicker({ 'scrollDefault': 'now' });
});

});
