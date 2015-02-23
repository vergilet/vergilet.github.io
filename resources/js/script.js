var $window = $(window);
var $home = $('.home');
var $info = $('.info');
var $site = $('.s1');

$(document).ready(function(){
	initAll();
});

function showMainSite(){
	$('html, body').animate({scrollTop: $window.height()}, 500);
}

function initAll(){
window.scrollTo(0,0);
$site.css('margin', $window.height() + 'px 0');
  $window.scroll(function() {
    if($home.offset().top > $home.height()){
    	$home.css('z-index', 1);
    	$info.css('z-index', 2);
    }else{
    	$home.css('z-index', 2);
    	$info.css('z-index', 1);
    }
  });
 $(window).resize(function(){
   $site.css('margin', $window.height() + 'px 0');
 });
	
	setTimeout(function(){
		$('#loader').animate({opacity:0.1}, 100);
		showLoader();
		$('#loader').hide();
	}, 1500);
}

function showLoader(){
	$('.loader').animate({top: "-2000px"}, 1000);
}