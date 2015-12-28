$(document).ready(function() {
    $window = $(window);

    var active = false;

    $(window).scroll(function() {
        console.log("Scroll: " + $window.scrollTop());
        console.log("Window Size: " + $window.height());
        if($window.scrollTop() > 0) {
            console.log(active);
            if(active) {
                $('#footer').slideDown();
                $('#extra').html("");
            }

            if(!active) {
                console.log("Not true");
                $('#extra').html("<p>test</p>");
                //$('#footer').css('transform', 'translateY(-300px)');
                  active = true;
                }
            $('#main').css('opacity', '0');
            $('#bottom').css('transform', 'translateY(-300px)');
            $('#top').css('transform', 'translateY(-200px)');

        }else {
            console.log("Scroll Down");

            //$('#bottom').css('transition-delay', '');
            //$('#top').css('transition-delay', '');
            $('#footer').slideUp();
            $('#main').css('opacity', '1');
            $('#bottom').css("transform", 'translateY(0)');
            $('#top').css('transform', 'translateY(0)');
            //$('#footer').css('transform', 'translateY(0)');
            active = false;
        }
    });
});