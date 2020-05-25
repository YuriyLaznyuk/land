
    $('.toggles button').click(function () {
    // элемент по которому происходит клик
    var get_id=this.id;
    var get_current=$('.portfolio-posts .' + get_id);
    // скрываю кроме get_current
    $('.post').not(get_current).hide(500);
    // показываю get_current
    get_current.show(500);
});
$('#show').click(function () {
    $('.post').show(500);
});

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({items:8});
    });

    if($(window).width() <420){
        $(".owl-carousel").owlCarousel({items:3});
    }