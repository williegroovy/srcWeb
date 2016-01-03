$(document).ready(function() {
    //$window = $(window);
    var del = 0;

    var mainContent = document.getElementById('main-content');

    if(mainContent.addEventListener) {
        // IE9, Chrome, Safari, Opera
        mainContent.addEventListener("mousewheel", scrollFunction, false);

        // Firefox
        mainContent.addEventListener("DOMMouseScroll",scrollFunction, false);
    }
    var del;

    function scrollFunction(e) {
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        del = del + delta;


        if(del < -2) {
            del = -2;
        }

        if(del > 0) {
            del = 0;
        }

        console.log(del);
        if(del <= -1) {
            console.log(del);
            if(del == -2) {
                $('#footer').css('transform', 'translateY(-470px)');
                $('#bottom').css('transform', 'translateY(-462px)');
                $('#top').css('transform', 'translateY(-262px)');
            } else {
                $('#footer').css('transform', 'translateY(-400px)');
                $('#bottom').css('transform', 'translateY(-400px)');
                $('#top').css('transform', 'translateY(-200px)');
            }
        } else {
            if(del == -1) {
                $('#footer').css('transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(-200px)');
                $('#bottom').css('transform', 'translateY(-400px)');
            }else {
                $('#bottom').css('transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(0px)');
            }
        }
    }
/*
    $(window).scroll(function() {
        if($window.scrollTop() > 0) {
            console.log($window.scrollTop());
            console.log("Active: " + active);
            $('.fade-out').css('opacity', '0');
            $('#bottom').css('transform', 'translateY(-300px)');
            $('#top').css('transform', 'translateY(-200px)');

            if(active) {
                $('#footer').slideDown();
                $('#bottom').css('transform', 'translateY(-300px)');
                $('#top').css('transform', 'translateY(-200px)');
            }

            if(!active) {
                  active = true;
                }
        }else {
            active = false;
            $('#footer').slideUp();
            $('.fade-out').css('opacity', '1');
            $('#bottom').css("transform", 'translateY(0)');
            $('#top').css('transform', 'translateY(0)');
        }
    });
    */
});