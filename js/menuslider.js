$('.all-menu-button').on('click', function() {
    $('body').css('overflow', 'hidden');
    $('.all-menu-aside').css('display', 'block');
    setTimeout(function() {
        $('.all-menu-wrap').css('left', 0);
    }, 100);
});

$('.all-menu-close').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.all-menu-wrap').css('left', '-100%');
    console.log($('.menu-list').css('height'));
    setTimeout(function() {
        $('.all-menu-aside').css('display', 'none');
    }, 1000);
});