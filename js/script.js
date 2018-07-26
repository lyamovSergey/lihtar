$(function(){
	$('.menu__list > li').on('click', function(){
		$(this).find('img')
		.attr('src', 'img/lantern-gallery-active1.png');
		$(this).find('p').addClass('activeItem');
		$(this).siblings()
		.find('img')
		.attr('src', 'img/lantern-menu1.png');
		$(this).siblings().find('p').removeClass('activeItem');
		$(this).find('.submenu__list').addClass('activeList').animate({height: 'show'}, 300);;
		$(this).siblings()
		.find('.submenu__list').removeClass('activeList').animate({height: 'hide'}, 300);
	});


});