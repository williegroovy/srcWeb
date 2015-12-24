$(document).ready(function() {
    $window = $(window);


    $('section[data-type="background"]').each(function() {
        var $scroll = $(this);

        $(window).scroll(function() {
            console.log($window.scrollTop());
            if($window.scrollTop() > 0) {
                $('#main').css('opacity', '0');
                $('#footer').css('transform', 'translateY(-300px)');
                $('#intro').css('transform', 'translateY(-200px)');
            }else {
                $('#main').css('opacity', '1');
                $('#footer').css("transform", 'translateY(0)');
                $('#intro').css('transform', 'translateY(0)');
            }
        });
    });
});