$(document).ready(function() {
    $window = $(window);

    var active = false;

    $(window).scroll(function() {
        console.log($window.scrollTop());
        if($window.scrollTop() > 0) {
            console.log(active);
            if($window.scrollTop() > 100) {
                console.log("> 100");
                $('#footer').css('transform', 'translateY(-350px)');
                $('#bottom').css('transform', 'translateY(-350px)');
                $('#top').css('transform', 'translateY(-250px)');
            } else {

                if(!active) {
                    console.log("Not true");
                    $('#footer').css('transform', 'translateY(-300px)');
                    active = true;
                }
                $('#main').css('opacity', '0');
                $('#bottom').css('transform', 'translateY(-300px)');
                $('#top').css('transform', 'translateY(-200px)');

            }
        }else {
            console.log("Scroll Down");
            $('#main').css('opacity', '1');
            $('#bottom').css("transform", 'translateY(0)');
            $('#top').css('transform', 'translateY(0)');
            $('#footer').css('transform', 'translateY(0)');
            active = false;
        }
    });
});