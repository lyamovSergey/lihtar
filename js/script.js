$(function(){
// MENU 
	//menu animation accordeon
	var nameCategoriesDefault = $('.submenu__list_active').text();
	$('.menu .activeList').show();
	$('.nameCategories').text(nameCategoriesDefault);


	$('.menu__list > li').on('click', function(){

		$(this)
			.find('img')
			.attr('src', 'img/lantern-gallery-active1.png');
		$(this)
			.find('.nameCat')
			.addClass('activeItem');
		$(this).siblings()
			.find('img')
			.attr('src', 'img/lantern-menu1.png');
		$(this)
			.siblings()
			.find('.nameCat')
			.removeClass('activeItem');
		$(this)
			.find('.submenu__list')
			.animate({height: 'show'}, 300);;
		$(this)
			.siblings()
			.find('.submenu__list')
			.animate({height: 'hide'}, 300);
	});

	
	//menu data
	$('.submenu__list li').on('click', function(){
		var noActiveLists = $(this).parents()[1];
		$(this).find('p')
			.addClass('submenu__list_active')
			.parent()
			.siblings()
			.find('p')
			.removeClass('submenu__list_active');
		$(noActiveLists).siblings()
			.find('p')
			.removeClass('submenu__list_active');
		var nameCategories = $(this)
			.find('p')
			.text();
		$('.nameCategories').text(nameCategories);
		
	});


});