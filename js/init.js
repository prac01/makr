

/*NAV MENU*/
$(document).ready(function(){
    $(".header .headerSection .navigation .tools .options .menubar").click(function() {
        $(".header .headerSection .navigation .nav").slideToggle(300, function(){   
            $(this).toggleClass('active').css('display', ''); 

        })      
    })
});



/** NAV SHRINK **/
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 100) {
    $("header").addClass("shrink");
    $("header").addClass("wala");
  } else {
    $("header").removeClass("shrink");
    $("header").removeClass("wala");
  }
});



/***********************************************
 Dark & Light Theme Switch 
************************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-mode_switch').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

/**********************************
    Scroll Top
***********************************/
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()> 40){
            $('#scrollTop').fadeIn();
        }else{
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function(){
        $('html ,body').animate({scrollTop :0},800);
    });

});



/****************************************
    MODAL AREA
****************************************/

/*-----search modal-------*/
$("#searchTop-btn").on("click", function() {
    var modal = $(this).data("modalTwo");
    $(modalTwo).show();
    $('body').css("overflow", "hidden");
    });

    $(".search-modal-wrap").on("click", function(e) {
    var className = e.target.className;
    if(className === "search-modal-wrap" || className === "closeBtn"){
    $(this).closest(".search-modal-wrap").hide();
    $('body').css("overflow", "auto");
    }
});

/***************************
    SWIPER LANDING PAGE
***************************/ 
var swiper = new Swiper('.slider1', {
    slidesPerView: 4,
    spaceBetween: 10, 

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 10, 
        },

        360: {
        slidesPerView: 2,      
        },

        700: {
        slidesPerView: 3,      
        },

        769: {
        slidesPerView: 3,
       
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        },
    }
});
// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$(".slider1").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});


/***************************
    SWIPER LANDING PAGE
***************************/ 
var swiper = new Swiper('.slider2', {
    slidesPerView: 3,
    spaceBetween: 10, 

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 10, 
        },

        360: {
        slidesPerView: 1,      
        },

        550: {
        slidesPerView: 2,      
        },

        769: {
        slidesPerView: 2,
       
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
    }
});
// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$(".slider2").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});


/* SIDEBAR CATEGORIES MENU */
$(document).ready(function(){
    $(".sidebar .sidebar_bar").click(function() {
        $(".sidebar .sidebar_wrapper").slideToggle(300, function(){   
            $(this).toggleClass('active').css('display', ''); 

        })      
    })
});


/* QUANTITY INCREMENT/DECREMENT [product_detail page]*/
var n = document.getElementById("num");
    
function increment() {
    n.stepUp();
}

function decrement() {
    n.stepDown();

}


/****************************************************************

    MULITPLE QUANTITY INCREMENT/DECREMENT FOR CART.HTML TABLE    

*****************************************************************/
var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

//console.log(incrementButton);
//console.log(decrementButton);

//INCREMENT 
for(var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function() {

        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
        //console.log(newValue);
        input.value = newValue;

    })
}

//DECREMENT 
for(var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function() {

        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;
        //console.log(newValue);
        if (newValue >= 0) {
            input.value = newValue;
        }
        else {
            input.value = 0;
            //alert('QTY CAN NOT BE LESS THAN ZERO');
        }

    })
}




/* JS ZOOM IMAGE */
$(function () {
    $(".xzoom, .xzoom-gallery").xzoom({
        zoomWidth: 400,
        tint: "#333",
        Xoffset: 15,

    });
});


/* PRODUCT TABS */
let = tabs = document.querySelectorAll('.tab_toggle'),
    contents = document.querySelectorAll('.tab_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

/* ACCORDION [ABOUT PAGE] */
$(".item_header").click(function(){
    $(".accordion_item").removeClass("active");
    $(this).parent().addClass("active");
    $(".icon").text("+");
    $(this).children(".icon").text("-");
});

/* MINICART TEST */
jQuery(function($){
  $('.js-menu__open').on('touchend click', function(){
        var menu = $(this).attr('data-menu');

        $(menu).toggleClass('js-menu__expanded');
        $(menu).parent().toggleClass('js-menu__expanded');

});

$('.js-menu__context, .js-menu__close').on('touchend click', function(event){
    
    if ( $(event.target).hasClass('js-menu__context') || $(event.target).hasClass('js-menu__close') ) {
         $('.js-menu__expanded').removeClass('js-menu__expanded');
    }
});
  
});

