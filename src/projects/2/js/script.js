
// Aos JS
AOS.init();

// hamburger nav
let hbg = document.querySelector('.hamburger');
let l1 = document.querySelector('.hamburger .line:first-of-type');
let l2 = document.querySelector('.hamburger .line:nth-of-type(2)');
let l3 = document.querySelector('.hamburger .line:last-of-type');
let nav = document.querySelector('nav');
// let navMobile = document.querySelector('.nav-mobile');
// let navTrans = document.querySelector('.nav-trans');
const listNav = document.querySelectorAll('nav ul li');
let jumlahClick = 1;
let waitRespond = 'click';
let wait = true;

function closeNavbar() {
    l1.style.top = '7px';
    l1.style.transform = 'rotate(0deg)';
    l2.style.opacity = 1;

    l3.style.top = '24px';
    l3.style.transform = 'rotate(0deg)';
    jumlahClick = 1;
    nav.style.maxHeight = '60px';
    // navTrans.style.animation = 'swipeLeft 0.8s ease forwards';



    // hbg.style.border = '1px solid rgba(255,255,255,1)';
    l1.style.backgroundColor = 'rgba(255,255,255,1)';
    l2.style.backgroundColor = 'rgba(255,255,255,1)';
    l3.style.backgroundColor = 'rgba(255,255,255,1)';
    // kh5.style.color = 'white';
    // kh5.style.transition = '2s';
    hbg.style.transition = '0.5s';

    setTimeout(() => {
        // navMobile.style.animation = 'swipeRight 1s ease forwards';
    }, 1000);
    hbg.style.transition = '0.5s';
    setTimeout(() => {
        hbg.style.transition = '0s';
        // navMobile.style.display = 'none';
    }, 2000);

}

listNav.forEach(function (e) {
    e.addEventListener('click', function () {
        if (jumlahClick != 1) {
            closeNavbar();
        }
    });
})

hbg.addEventListener(waitRespond, function () {
    if (wait == true) {
        wait = false;
        $('nav').css('transition', '0.8s ease');
        if (jumlahClick == 1) {
            l1.style.top = '16px';
            l1.style.transform = 'rotate(45deg)';
            l2.style.opacity = 0;

            nav.style.maxHeight = '300px';

            l3.style.top = '16px';
            l3.style.transform = 'rotate(-45deg)';
            jumlahClick++;
            // navMobile.style.display = 'block';

            // true nav
            // navMobile.style.animation = 'swipeLeft 1s ease forwards';
            // navTrans.style.animation = 'swipeLeft 0s ease forwards';

            // hbg.style.border = '1px solid rgba(0,0,0,1)';
            l1.style.backgroundColor = 'rgba(0,0,0,1)';
            l2.style.backgroundColor = 'rgba(0,0,0,1)';
            l3.style.backgroundColor = 'rgba(0,0,0,1)';
            hbg.style.transition = '0.5s';
            // kh5.style.transition = '2s';
            // kh5.style.color = 'black';
            setTimeout(() => {
                // navTrans.style.animation = 'swipeRight 0.8s ease forwards';
            }, 750);
            setTimeout(() => {
                hbg.style.transition = '0s';
            }, 1000);
        } else {
            closeNavbar();
        }
        setTimeout(function () {
            wait = true;
        }, 690);
    }




});


// Media Query
var height = $('nav').css('max-height');

$(window).resize(function () {

    closeNavbar();
    $('nav').css('transition', '0s');
    if ($(window).width() > 1000) {
        $('nav').css('max-height', '120px');
    }else if ($(window).width() > 812) {
        $('nav').css('max-height', '80px');
    }else{
        $('nav').css('max-height', '60px');
    }

    height = $('nav').css('max-height').replace('px' , '');

});

// Scroll JS

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var navHeight = parseInt($('nav').css('max-height').replace('px', ''));

    if (scroll >= navHeight) {
        // if ($(window).width() > 812) {
        //     $('body').css('padding-top', '80px');
        // }else{
        //     $('body').css('padding-top', '60px');
        // }
        console.log($('body').css('padding-top'));
        $('nav').css('top', '0px');    
        $('nav').css('position', 'fixed');
        $('nav').css('background', 'linear-gradient(70deg , #E2296D , #FA433D)');
        $('nav').css('box-shadow', '0px 1px 4px 4px rgba(0,0,0,0.2)');
    } else {
        $('body').css('padding-top', '0px');
        $('nav').css('position', 'absolute');
        $('nav').css('background', 'transparent');
    }
});

// page Scroll

$('.page-scroll').on('click' , function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    var elementHref = $(href);
    var navHeightq = parseInt(height.replace('px', ''));
    // pindah scroll
    var targetScroll = elementHref.offset().top - (navHeightq * 1);

    $('html,body').animate({
        scrollTop: targetScroll
    },700);

    
    
});


