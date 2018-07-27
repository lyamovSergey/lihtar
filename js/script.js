$(function(){
//header links (плавная прокрутка)
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});	
// MENU 
	//menu animation accordeon
	var nameCategoriesDefault = $('.submenu__list_active').text();
	$('.menu .activeList').show();
	$('.nameCategories').text(nameCategoriesDefault);
	dataMenu("coctails");


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
	function dataMenu(id){
		$('.description__block').remove();
		jQuery.each(menuData, function(i, val){ //перебор объекта с данными
			var leng = 0;                       //длина объекта
			if( i == id){						//активен определенный объект, он же ключ к данным
				for( var key in val ){			//вычислить длину объекта
					leng++;
				};
				for( var i = 1; i <= leng; i++ ){ //добавить необходимое количество данных в HTML

					$('.menu__description')
					.append('<div class="description__block"><div class="wrapper"><h1>' +val[i].name+ '</h1><p>'+val[i].description+'</p></div><p class="menu__description__vol">' + val[i].vol + '</p><p class="menu__description__price">' + val[i].price + '</p></div>');
				}
			}
		});
	}


	//menu data
	$('.submenu__list li').on('click', function(){
		var noActiveLists = $(this).parents()[1];
		var id = $(this).find('p').attr('id');
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
		dataMenu(id);
	});
});