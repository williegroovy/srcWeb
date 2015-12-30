$(document).ready(function() {
    //$window = $(window);

    //var active = false;

    var mainContent = document.getElementById('main-content');

    if(mainContent.addEventListener) {
        // IE9, Chrome, Safari, Opera
        mainContent.addEventListener("mousewheel", scrollFunction, false);

        // Firefox
        mainContent.addEventListener("DOMMouseScroll",scrollFunction, false);
    }


    function scrollFunction(e) {
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        console.log(e + delta);
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