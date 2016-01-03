function insideClose() {
    $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');
    $('#right').css('transform', 'translate3d(100vw, 0, 0) translateX(0px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(0px)');
    $('#top').css('transform', 'translateX(-0px)').css('-webkit-transform', 'translateX(-0px)');
}

$(document).ready(function() {
    var del = 0;
    var menuOpen = false;

    var mainContent = document.getElementById('main-content');

    if(mainContent.addEventListener) {
        // IE9, Chrome, Safari, Opera
        mainContent.addEventListener("mousewheel", scrollFunction, false);
        // Firefox
        mainContent.addEventListener("DOMMouseScroll",scrollFunction, false);
    }
    $('#close-btn').on('click', btnClicked);
    $('#btn').on('click', btnClicked);



    function btnClicked() {
        if(!menuOpen) {
            menuOpen = true;
            $('#menu').removeClass('fa-bars').addClass('fa-angle-double-right');
            $('#right').css('transform', 'translate3d(100vw, 0, 0) translateX(-360px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(-360px)');
            $('#top').css('transform', 'translateX(-360px)').css('-webkit-transform', 'translateX(-360px)');
        } else {
            menuOpen = false;
            $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');
            $('#right').css('transform', 'translate3d(100vw, 0, 0) translateX(0px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(0px)');
            $('#top').css('transform', 'translateX(-0px)').css('-webkit-transform', 'translateX(-0px)');
        }
    }

    function scrollFunction(e) {
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        del = del + delta;


        if(del < -2){del = -2;}
        if(del > 0){del = 0;}

        console.log(del);
        if(del <= -1) {
            if(del == -2) {
                $('#footer').css('transform', 'translateY(-470px)').css('-webkit-transform', 'translateY(-470px)');;
                $('#bottom').css('transform', 'translateY(-462px)').css('-webkit-transform', 'translateY(-462px)');
                $('#top').css('transform', 'translateY(-262px)').css('-webkit-transform', 'translateY(-262px)');

            } else {
                $('#footer').css('transform', 'translateY(-400px)').css('-webkit-transform', 'translateY(-400px)');
                $('#bottom').css('transform', 'translateY(-400px)').css('-webkit-transform', 'translateY(-400px)');
                $('#top').css('transform', 'translateY(-200px)').css('-webkit-transform', 'translateY(-200px)');
            }
        } else {
            if(del == -1) {
                $('#footer').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(-200px)').css('-webkit-transform', 'translateY(-200px)');
                $('#bottom').css('transform', 'translateY(-400px)').css('-webkit-transform', 'translateY(-400px)');
            }else {
                $('#bottom').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
            }
        }
    }
});