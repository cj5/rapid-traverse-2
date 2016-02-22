$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    $('a').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    updateContainer();
    
    $(window).resize(function() {
        updateContainer();
    });
    
    function updateContainer() {
        var theHeight = $(window).height();
        $('.bg').css('height', theHeight);
    }
});


    


