var agent = navigator.userAgent.toLowerCase();

if(navigator.appName == "Microsoft Internet Explorer"){
	alert("윈도우 10이하의 환경에서는 홈페이지가 제대로 동작하지 않을 수 있습니다. 윈도우11 혹은 크롬에서 실행해 주세요! :)")
}

$(document).ready(function(){
	
	fitMiddle($('header>a').width()*1);
	
	$('#video-section').css({
		height : $(window).height()
	});
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,

		
		spaceBetween : 30,
		
		autoplay : 3000,
		loop : true
	});
	
	$(window).on('scroll', function(){
		var pos = $(this).scrollTop();
		var videoSectionHeight = $('#video-section').height();
		
		if(pos >= videoSectionHeight){
			$('header>a').css('color','black');
			$('#language-list>li>a').css('color','rgba(0, 0, 0, 0.4)');
			$('#language-list>li>a.activate').css('color','black');
			$('#category-list>li>a').css('color','black');
		}else{
			$('header>a').css('color','white');
			$('#language-list>li>a').css('color','rgba(255, 255, 255, 0.4)');
			$('#language-list>li>a.activate').css('color','white');
			$('#category-list>li>a').css('color','white');
		}
		
		changeHeaderState(pos);
	});
});

function scrollMove(){
	var screenHeight = $(window).height();
	$('html, body').stop().animate({
		scrollTop : $('#video-section').height() * 1
	}, function(){
		$('header>a').css('color','black');
	});
	
}