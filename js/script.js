(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });

    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);


// слик слайдер
$(document).on('ready', function() {
  $(".vertical-center-4").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 2
  });
  $(".vertical-center-3").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(".vertical-center-2").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
  $(".vertical-center").slick({
    dots: true,
    vertical: true,
    centerMode: true,
  });
  $(".vertical").slick({
    dots: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });
  $(".regular2").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".regular3").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });





  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3
  });
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
});

// слик слайдер

// горизонтальный скролл тест

var windowWidth = $(window).width();
if(windowWidth > 1299){


  $(document).ready(function(){
    var h = $(window).height(),
      pan = $(".pan").width()/2,
      offset = Math.abs(h - $(".wrap").height()) / 2,
      start = $(".wrap").offset().top - offset,
      stop = start + pan;
    cl(offset);
    $("body").css("height", $("body").height() + pan + "px");
    $("article").addClass("fixed");
    $(window).scroll(function(e){
      var scroll = $(this).scrollTop();
      if(scroll < start){
        $("article").css("margin-top", 0-scroll);
        $(".pan").css("margin-left", 0);
      } else {
        if(scroll <= stop){
          $("article").css("margin-top", 0-start);
          $(".pan").css("margin-left", 0-scroll+start);
          // $(".container_black2").css("margin-left", scroll/5);
          $(".container_black2").css("margin-left", scroll/5);
          if (0-scroll+start < -3000) {
            $("#next").addClass("active");
          } else {
            $("#next").removeClass("active");
          }
          if (0-scroll+start < -3100) {
            $("#next").addClass("active3");
          } else {
            $("#next").removeClass("active3");
          }




          if (0-scroll+start < -3600) {
            $("#next").addClass("active2");
          } else {
            $("#next").removeClass("active2");
          }

          if (0-scroll+start < -3700) {
            $("#next").addClass("active4");
          } else {
            $("#next").removeClass("active4");
          }




        } else {
          $("article").css("margin-top", 0-scroll+pan);
          $(".pan").css("margin-left", 0-pan);
        }
      }
    });
  });
  function cl(x){console.log(x)};

}




// горизонтальный скролл тест


// Анимация при попадании на экран





// Анимация при попадании на экран

// паралакс


// паралакс


// плавная прокрутка до якорей



$(document).ready(function () {


  $("a.topLink").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  $("a.topLink2").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top+1000 + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });





});






// плавная прокрутка до якорей

// плей и пауза у видео

jQuery( document ).ready(function($) {
  $('.myHTMLvideo').click(function() {
    this.paused ? this.play() : this.pause();
  });
});


// плей и пауза у видео


// Горизонтальный скролл паралеакс



// Горизонтальный скролл паралакс



/*Появление карты при прокрутке*/
//
// function come(elem) {
//     var docViewTop = $(window).scrollTop(),
//         docViewBottom = docViewTop + $(window).height(),
//         elemTop = $(elem).offset().top,
//         elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
//
//
// if (come("#vid1")) {
//     document.getElementById('map1').classList.add('active');
// }

//
// var $win = $(window);
// var $marker = $('#map');
//
// //отслеживаем событие прокрутки страницы
// $win.scroll(function() {
//     //Складываем значение прокрутки страницы и высоту окна, этим мы получаем положение страницы относительно нижней границы окна, потом проверяем, если это значение больше, чем отступ нужного элемента от верха страницы, то значит элемент уже появился внизу окна, соответственно виден
//     if($win.scrollTop() + $win.height() >= $marker.offset().top) {
//         document.getElementById('map1').classList.add('active'); //выполняем действия если элемент виден
//     }
//     // else{
//     //     $('#message').html('не виден'); //выполняем действия если не элемент виден
//     // }
// });
//
//



/*Появление карты при прокрутке*/




// поочередное появление
const $div = $('.block_collection_carousel1>div');
let index = -1;

const $div2 = $('.block_collection_carousel2>div');
let index2 = -1;

window.onload = function () {

  //получаем идентификатор элемента
  var a = document.getElementById('next');

  //вешаем на него событие
  a.onclick = function() {
    //производим какие-то действия
    $div.eq(index).removeClass('active');
    index = (index + 1) % $div.length;
    $div.eq(index).addClass('active');

    $div2.eq(index2).removeClass('active');
    index2 = (index2 + 1) % $div2.length;
    $div2.eq(index2).addClass('active');
    //предотвращаем переход по ссылке href

    return false;



  }
}





// поочередное появление




// увеличение изображения по клику в галерее



// var c = document.getElementsByClassName('block_carousel1_item');
//
// //вешаем на него событие
// c.onclick = function() {
//   this.classList.toggle("active");
// }




$('.block_carousel1_item ').on('click', function(){
  $('.block-collection_d1_img4').toggleClass("active");
  return false;
});


$('.block_carousel2_item ').on('click', function(){
  $('.block-collection_d1_img5').toggleClass("active");
  return false;
});



$('.block-collection_d01_img4 ').on('click', function(){
  $('.block-collection_d01_img4').toggleClass("active");
  return false;
});


$('.block-collection_d01_img5 ').on('click', function(){
  $('.block-collection_d01_img5').toggleClass("active");
  return false;
});

$('.block-collection_d02_img4 ').on('click', function(){
  $('.block-collection_d02_img4').toggleClass("active");
  return false;
});


$('.block-collection_d02_img5 ').on('click', function(){
  $('.block-collection_d02_img5').toggleClass("active");
  return false;
});









// увеличение изображения по клику в галерее


// подсветка кнопки еще





// подсветка кнопки еще
