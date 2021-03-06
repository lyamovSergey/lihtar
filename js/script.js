$(function() {
//default
    dataMenu("coctails");
    showFoto('banket');
    $('form').submit(function(){
        return false;
    });

//photo init
    $('.slider').bxSlider();
    $('.photoBlock').masonry({
        columnWidth: '.photoBlock__item',
        itemSelector: '.photoBlock__item'
    });
//link scroll top    
    $(document).scroll(function(){
        var linkPosition =  $('.toHeader-link').offset().top;
        var footerPosition = $('#reserve-block').offset().top; 
        if( linkPosition >= 1400 ){
            $('.toHeader-link').css({opacity: 1});
        }else{
            $('.toHeader-link').css({opacity: 0});
        }
        if( linkPosition > footerPosition ){
            $('.toHeader-link img').attr('src', 'img/UParrowWhite.png')
        }else{
            $('.toHeader-link img').attr('src', 'img/UParrow.png')
        };
    });
//header links (плавная прокрутка)
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });
//menu animation accordeon
    var nameCategoriesDefault = $('.submenu__list_active').text();
    $('.menu .activeList').show();
    $('.nameCategories').text(nameCategoriesDefault);    
    $('.menu__list > li').on('click', function() {
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
            .animate({ height: 'show' }, 300);;
        $(this)
            .siblings()
            .find('.submenu__list')
            .animate({ height: 'hide' }, 300);
    });
    function dataMenu(id) {
        $('.description__block').remove();
        jQuery.each(menuData, function(i, val) { //перебор объекта с данными
            var leng = 0; //длина объекта
            if (i == id) { //активен определенный объект, он же ключ к данным
                for (var key in val) { //вычислить длину объекта
                    leng++;
                };
                for (var i = 1; i <= leng; i++) { //добавить необходимое количество данных в HTML
                    $('.menu__description')
                        .append('<div class="description__block"><div class="wrapper"><h1>' + val[i].name + '</h1><p>' + val[i].description + '</p></div><p class="menu__description__vol">' + val[i].vol + '</p><p class="menu__description__price">' + val[i].price + '</p></div>');
                }
            }
        });
    }
//menu data
    $('.submenu__list li').on('click', function() {
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
//Gallery block
//gallery-nav lantern
    $('.gallery-nav__item').on('click', function() {
        var id = $(this).attr('id');
        var img = $(this)
            .find('img')
            .attr('src');
        if (img == "img/lantern-gallery.png") {
            $(this)
                .find('img')
                .attr('src', 'img/lantern-gallery-active1.png');
            $(this)
                .siblings()
                .find('img')
                .attr('src', 'img/lantern-gallery.png');
        }
        showFoto(id);
    });
//Gallery add foto
	function showFoto(id) {
	    jQuery.each(ImageLinks, function(x, val) {
	        if (x == id) {
	            var obj = ImageLinks[x];
	            var links = $.each(obj, function(i, val) {
	                return val;
	            });
	            $('.photoBlock__item').find('a').each(function(index, val) {
	                var link = links[index];
	                $(val).attr('href', link);
	            });
	            $('.photoBlock__item').find('img').each(function(index, val) {
	                var link = links[index];
	                $(val).attr('src', link);
	            });
	        }
	    });
	};
//resrve table
    
    $('.tables-row div').on('click', function(){
        var table = $(this);
        var num = table.attr('id').substr(5, 2);
        $('.numberTable').text(num);
        $('#hiddenField').attr('value', num);
        if( table.hasClass('big-table') ){
            table.addClass('active-tableBig')
            .siblings()
            .removeClass('active-tableBig')
            .parent()
            .siblings()
            .find('div')
            .removeClass('active-tableBig')
            .removeClass("active-tableSmall");
        }else if( table.hasClass('small-table') ){
            table.addClass('active-tableSmall')
            .siblings()
            .removeClass('active-tableSmall')
            .parent()
            .siblings()
            .find('div')
            .removeClass('active-tableSmall, active-tableBig');
        }
    });
});