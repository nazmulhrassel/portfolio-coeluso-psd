
$(function(){

	$.fakeLoader({

// Time in milliseconds for fakeLoader disappear
timeToHide:1000, 

// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner3",//Options: 

// Background color. Hex, RGB or RGBA colors
bgColor:"#0a2345",
            
});

	//  Swiper

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });


// Rellax

var rellax = new Rellax('.rellax', {center: true});


//Simple-Parallax

var images = document.getElementsByClassName('simple-parallax');
	var para = new simpleParallax(images,{

    delay: .6,
    orientation:'right',
    scale:'1.2',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,
    });

})
