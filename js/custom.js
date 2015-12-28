$(document).ready(function() {
    $window = $(window);

    var active = false;

    $(window).scroll(function() {
        if($window.scrollTop() > 5) {
            $('.fade-out').css('opacity', '0');
            $('#bottom').css('transform', 'translateY(-300px)');
            $('#top').css('transform', 'translateY(-200px)');

            if(active) {
                $('#footer').slideDown();
                $('#bottom').css('transform', 'translateY(-300px)');
                $('#top').css('transform', 'translateY(-200px)');
                $('#extra').html("");
            }

            if(!active) {
                $('#extra').html("<p>' '</p>");
                  active = true;
                }
        }else {
            $('#footer').slideUp();
            $('.fade-out').css('opacity', '1');
            $('#bottom').css("transform", 'translateY(0)');
            $('#top').css('transform', 'translateY(0)');
            active = false;
        }
    });
});