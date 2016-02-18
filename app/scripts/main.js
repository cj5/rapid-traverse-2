// $(document).ready(function () {
//     updateContainer();
    
//     $(window).resize(function() {
//         updateContainer();
//     });
    

//     function updateContainer() {
//         var theHeight = $(window).height();
//         $('.bg').css('height', theHeight);
//     }

$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });
});


