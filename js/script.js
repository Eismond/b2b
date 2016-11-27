$(document).ready(function(){
	$('.novelty-slider, .sale-slider').bxSlider({
		controls: true,
		pager: false,
		//nextSelector: '#slider-next',
		//prevSelector: '#slider-prev',
		slideWidth: 150,
		minSlides: 1,
		maxSlides: 5,
		slideMargin: 5,
		adaptiveHeight: true,
		responsive: true
	});
	  

    $(".btn-profile, .log .profile-list" ).bind("mouseenter", function (){
        $(".log .profile-list").stop().slideDown(200);
    });

	$(".btn-profile, .log .profile-list" ).bind("mouseleave", function(){
		//if ($('.btn-profile:hover').length > 0 || $('.log .profile-list').length > 0) return;
		$(".log .profile-list").stop().slideUp(200);
	});
	
	$( "#tabs" ).tabs();
	
	$('.anyClass').liHarmonica({
		currentClass:'cur',	//Класс для выделенного пункта меню
		onlyOne:true,      	//true - открытым может быть только один пункт,
							//false - число открытых одновременно пунктов не ограничено
		speed:200         	//Скорость анимации
	});
	
	$(window).resize();
    $('.main-tablet, .btn-profile, .catalogue-tablet').bind('click', function(e){
         // делаем че надо (если надо)

         // блокируем дефолтное действие (переход по ссылке)
         var e = e || window.event;
         if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
         return false;
        });
    /*$(function(){
            $('.catalogue-tablet').click(function(){
                $('.harmonica').toggleClass('.active-catalogue');
            });
        });*/
    /*$('.catalog-accordion h3, .catalogue-tablet').bind('click', function(){
        if ($('#accordion').hasClass('.active-catalogue')){
            $('#accordion').stop().slideUp(200).removeClass('.active-catalogue');
        }else{
            $('#accordion').stop().slideDown(200).addClass('.active-catalogue');
        }
    })*/
});


$(window).resize(function(){
	var m = $(window).width() < 1017;

	if ((window.is_mobile === undefined || window.is_mobile) && !m) {
		window.is_mobile = false;
		// full width
		$(".main-block, .catalog-accordion h3").unbind("mouseenter mouseleave click");
		$(".main-block .main, #accordion").show();
	} else if((window.is_mobile === undefined || !window.is_mobile) && m){
		window.is_mobile = true;
		// mobile width
        $(".main-block .main, #accordion").hide();
		$('.catalog-accordion h3, .catalogue-tablet').bind('click', function(){
        if ($('#accordion').hasClass('.active-catalogue')){
            $('#accordion').stop().slideUp(200).removeClass('.active-catalogue');
            $(".catalogue-tablet").addClass("openCat");
        }else{
            $('#accordion').stop().slideDown(200).addClass('.active-catalogue');
            $(".catalogue-tablet").removeClass("openCat");
        }
    })
		$(".main-block").bind("mouseenter", function(){
			$(".main-block .main").stop().slideDown(200);
		});
		
		$(".main-block").bind("mouseleave", function(){
			$(".main-block .main").stop().slideUp(200);
		});
	}
});	