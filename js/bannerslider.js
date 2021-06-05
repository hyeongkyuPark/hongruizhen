$('.banner-item').on('click', function() {
    let idx = $(this).index();

    $('.banner-item').removeClass('active');
    $(this).addClass('active');

    $('.banner-content-item').css('opacity', 0);
    $('.banner-content-item').eq(idx).css('opacity', 1);

    $('.banner-img').css('opacity', 0);
    $('.banner-img').eq(idx).css('opacity', 1);

    const target = this;

    $('.back-image-peace').removeClass('event');
    void target.offsetWidth;
    $('.back-image-peace').addClass('event');
    
})