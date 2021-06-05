$('.sub-nav-item').on('mouseover', function() {
    let navHeight = $(".detail-nav-wrap").css('height');
    $('.detail-nav-wrap-item').css('display', 'none');
    $('.nav-detail').css('height', navHeight);
    if($(this).hasClass('info')) {
        $('.nav-detail').find('.info-item').css('display', 'flex');
    } else if($(this).hasClass('menu')) {
        $('.nav-detail').find('.menu-item').css('display', 'flex');
    } else if($(this).hasClass('guide')) {
        $('.nav-detail').find('.guide-item').css('display', 'flex');
    } else if($(this).hasClass('community')) {
        $('.nav-detail').find('.community-item').css('display', 'flex');
    }
});
$('.sub-nav-item').on('mouseout', function() {
    $('.nav-detail').css('height', 0);
});

$('.nav-detail').on('mouseover', function() {
    let navHeight = $(".detail-nav-wrap").css('height');
    $('.nav-detail').css('height', navHeight);
});
$('.nav-detail').on('mouseout', function() {
    $('.nav-detail').css('height', 0);
});