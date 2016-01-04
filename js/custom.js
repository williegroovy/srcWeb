function insideClose() {
    $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');
    $('#top').css('transform', 'translateX(-0px)').css('-webkit-transform', 'translateX(-0px)');
    setTimeout(
        function() {
            $('#right').css('display', 'none');
            $('#right').css('transform', 'translate3d(100vw, 0, 0) translateX(0px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(0px)');
        }, 700);
}

$(document).on("click", ".menu-button", function(){
    var position = $('#right').position();
    if(position.left == 0) {
        $('#menu').removeClass('fa-bars').addClass('fa-angle-double-right');
        $('#right').css('display', 'block').css('transform', 'translate3d(100vw, 0, 0) translateX(-360px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(-360px)');
        $('#top').css('transform', 'translateX(-360px)').css('-webkit-transform', 'translateX(-360px)');
    } else {
        $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');
        $('#top').css('transform', 'translateX(-0px)').css('-webkit-transform', 'translateX(-0px)');
        setTimeout(
            function() {
                $('#right').css('display', 'none');
                $('#right').css('transform', 'translate3d(100vw, 0, 0) translateX(0px)').css('-webkit-transform', 'translate3d(100vw, 0, 0) translateX(0px)');
            }, 700);
    }
});

$(document).ready(function() {
    var del = 0;
    var lastY;
    var ts;
/*
    $.ajax({
        type: 'GET',
        url: 'https://new.livestream.com/api/accounts/srcbirmingham',
        dataType: 'json',
        success: function(results) {
            if(results) {
                console.log("Success");
                var image = results.past_events.data[1].logo.url;
                console.log(image);
                $('#video-list').prepend('<img src="' + image + '"/>');
                //results.past_events.data.forEach(function(item) {
                //    console.log(item.full_name);
                //});
            }else {
                console.log("No Resutls");
            }
        }
    });
*/
    $(document).bind('touchstart', function (e){
        ts = e.originalEvent.touches[0].clientY;
        console.log(ts);
        if(ts < 100) {
            $('#main-content').removeClass('disable-scrolling');
        }

        var isTouchMoveAllowed = true
        var target = e.target;

        while(target != null) {

            if ( target.classList && target.classList.contains( 'disable-scrolling' ) ) {
                isTouchMoveAllowed = false;
                break;
            }
            target = target.parentNode;
        }

        if ( !isTouchMoveAllowed ) {
            event.preventDefault();
        }
    });

    $(document).bind('touchend', function (e){

        var te = e.originalEvent.changedTouches[0].clientY;

        if(ts > te+5){
            touchMove(-1);
        }else if(ts < te-5){
            touchMove(1);
        }

        $('#main-content').addClass('disable-scrolling');
    });

    function touchMove(delta) {
        $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');
        del = del + delta;

        if(del < -2){del = -2;}
        if(del > 0){del = 0;}

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
                $('#footer').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(-400px)');
                $('#top').css('transform', 'translateY(-200px)').css('-webkit-transform', 'translateY(-200px)');
                $('#bottom').css('transform', 'translateY(-400px)').css('-webkit-transform', 'translateY(-400px)');
            }else {
                $('#bottom').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
            }
        }
    }

    var mainContent = document.getElementById('main-content');

    if(mainContent.addEventListener) {
        // IE9, Chrome, Safari, Opera
        mainContent.addEventListener("mousewheel", scrollFunction, false);
        // Firefox
        mainContent.addEventListener("DOMMouseScroll",scrollFunction, false);
    }

    function scrollFunction(e) {
        $('#menu').removeClass('fa-angle-double-right').addClass('fa-bars');

        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        del = del + delta;


        if(del < -2){del = -2;}
        if(del > 0){del = 0;}

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
                $('#footer').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(-4000px)');
                $('#top').css('transform', 'translateY(-200px)').css('-webkit-transform', 'translateY(-200px)');
                $('#bottom').css('transform', 'translateY(-400px)').css('-webkit-transform', 'translateY(-400px)');
            }else {
                $('#bottom').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
                $('#top').css('transform', 'translateY(0px)').css('-webkit-transform', 'translateY(0px)');
            }
        }
    }
});