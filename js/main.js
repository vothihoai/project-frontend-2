// menu
  $(function() {
    $('nav#menu').mmenu({
      extensions  : [ 'effect-slide-menu', 'pageshadow' ],
      searchfield : true,
      counters  : false,
      navbar    : {
        title : 'PT GAS'
      },
      offCanvas   : {
        position: "right"
      },
      navbars   : [
      {
        position  : 'top',
        content   : [ 'searchfield' ]
      }, {
        position  : 'top',
        content   : [
        'prev',
        'title',
        'close'
        ]
      }
      ]
    });
  });

// go-top
$(document).ready(function() {
  var scrollTop = $(".scrollTop");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "0.7");

    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); 
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
// count-number
$(document).ready(function($) {
  $('.count-number').counterUp({
    delay: 20,
    time: 1000
  });
});
// menu-header
window.onscroll = function() {myFunction()};

var header_top = document.getElementById("myHeader");
var sticky = header_top.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header_top.classList.add("sticky");
  } else {
    header_top.classList.remove("sticky");
  }
  var hamburger = document.getElementById("hamburger");
  if (window.pageYOffset > sticky) {
      $(hamburger).css("background-color", "#688bfe");

    } else {
      $(hamburger).css("background-color", "transparent");
    }
}
// loaders-main
    $(window).on('load', function(event) {
   $('div').removeClass('preloading');
      // $('.load').delay(1000).fadeOut('fast');
   $('.loader').delay(2000).fadeOut('fast');
});

  // loaders-skill
    $('[data-skill]').each(function(){

  var item = $(this),
  skill = item.data('skill'),
  size = item.data('skill-size'),
  border = 5,
  radius = (size / 2) - border,
  circumference = 2 * Math.PI * radius,
  progress = circumference - ((circumference / 100) * skill),
  speed = 2000;

  item.append('<h4>0</h4><svg><circle class="back" /><circle class="front" /></svg>');

  $({Counter: 0}).animate({
    Counter: skill
  }, {
    duration: speed,
    easing: 'swing',
    step: function () {
      item.find('h4').text(Math.ceil(this.Counter) + '%');
    }
  });

  item.find('svg').width(size).height(size);

  item.find('circle').attr({
    'r' : radius,
    'cy' : radius + border,
    'cx' : radius + border
  });

  item.find('.front').css({
    'stroke-dasharray' : circumference,
    'stroke-dashoffset' : circumference
  }).animate({
    'stroke-dashoffset' : progress
  }, speed);

});
    
// jarallax
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});





