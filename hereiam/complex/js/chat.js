function chatHeightSize(){
	$('.chat').height(getMapHolderHeightSize());
}
function chatWidthSize(){
	$('.chat').width(getMapHolderWidthSize());
}
function chatPosition(){
	topY = $('.map-holder').offset().top;
	leftX = $('.map-holder').offset().left;
	$('.chat').css({left: leftX}).css({top: topY});
}
function showChat(){
	$('.chat').css('display', 'block');
	chatHeightSize();
	chatWidthSize();
	chatPosition();
}