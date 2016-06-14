function mainPage(){
	$('.content').load('mainpage-content.html');
	$('.bottom-container').empty();
}
function mapPage(){
	$('.content').load('map-content.html', function(){
		setMapHolderHeightSize();
		setMapHolderWidthSize();
		startMap();
		$('.bottom-container').load('work-panel.html');
	});
}

var mapHolderWidthSize;
var mapHolderHeightSize;

function setMapHolderHeightSize(){
	workPanelSize = 70;
	headerSize = 60
	holderSize = $('.map-holder').css('height', $(window).height() - (headerSize + workPanelSize)).height();
	this.mapHolderHeightSize = holderSize;
}
function setMapHolderWidthSize(){
	holderSize = $('.map-holder').width();
	this.mapHolderWidthSize = holderSize;
}
function getMapHolderHeightSize(){
	return this.mapHolderHeightSize;
}
function getMapHolderWidthSize(){
	return this.mapHolderWidthSize;
}
 
function changeLocationToMap(){
	mapPage();
	$('.dashboard li').removeClass('active');
	//
	//
	$('.navigate-map').parent('li').addClass('active');
}
$('.navigate-map').click(function(){
	changeLocationToMap();
});

$('.navigate-main').click(function(){
	mainPage();
	$('.dashboard li').removeClass('active');
	$('.navigate-main').parent('li').addClass('active')
});

$('.navigate-chat').click(function(){
	//////////
	$('.dashboard li').removeClass('active');
	$('.navigate-chat').parent('li').addClass('active')
});


$(window).resize(function(){
	setMapHolderHeightSize();
})


function mMenuInit(){
	$('nav#menu-left').mmenu();

	$('nav#menu-right').mmenu({
		position	: 'right',
	});
	
}

function firstLoad(hash){
	if(hash == "#main" || hash == "" || hash == "#"){
		mainPage();
	}else if (hash == "#map"){
		mapPage();
	}else if (hash == ""){
	
	}
}


$(document).ready(function(){
	mMenuInit();
	hash = document.location.hash;
	firstLoad(hash);
})
