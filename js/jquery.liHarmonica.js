/*
 * jQuery liHarmonica v 1.0
 *
 * Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
 * http://masscode.ru
 * Free to use
 * 
 * 04.01.2013
 */
/*Код плагина*/
(function ($) {
  $.fn.liHarmonica = function (params) {
    var p = $.extend({
      currentClass: 'cur', //Класс для выделенного пункта меню
      onlyOne: true, //true - открытым может быть только один пункт, 
      //false - число открытых одновременно пунктов не ограничено
      speed: 500 //Скорость анимации
    }, params);
    return this.each(function () {
      var
      el = $(this).addClass('harmonica'),
        linkItem = $('ul', el).prev('a');
      el.children(':last').addClass('last');
      $('ul', el).each(function () {
        $(this).children(':last').addClass('last');
      });
      $('ul', el).prev('a').addClass('harFull');
      el.find('.' + p.currentClass).parents('ul').show().prev('a').addClass(p.currentClass).addClass('harOpen');
      linkItem.on('click', function () {
        if ($(this).next('ul').is(':hidden')) {
          $(this).addClass('harOpen');
        } else {
          $(this).removeClass('harOpen');
        }
        if (p.onlyOne) {
          $(this).closest('ul').closest('ul').find('ul').not($(this).next('ul')).slideUp(p.speed).prev('a').removeClass('harOpen');
          $(this).next('ul').slideToggle(p.speed);
        } else {
          $(this).next('ul').stop(true).slideToggle(p.speed);
        }
        return false;
      });
    });
  };
})(jQuery);

/*Инициализация плагина*/
/*$(function () {
  $('.anyClass').liHarmonica({
    onlyOne: false,
    speed: 500
  });
  $('.anyClass2').liHarmonica({
    onlyOne: true,
    speed: 400
  });
});*/