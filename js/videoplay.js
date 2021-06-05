(function() {
    const videoItem = $('.video-item');
    const videoBox = $('.video-box');

    // 비디오 아이템 클릭 => 비디오 변경
    const  videoItemClickEnvent = function() {
        const idx = $(this).index();
        const videoAreaItem = $('.video-area-item');

        videoItem.removeClass('active');
        $(this).addClass('active');

        videoAreaItem.css('display', 'none');
        videoAreaItem.eq(idx).css('display', 'flex');
        videoBox.find('iframe').css('display', 'none');
        videoBox.find('iframe').hide();
        videoBox.find('iframe').attr('src', function() {      
            return $(this).attr('src').split('?')[0];
        });
    };

    // 비디오 박스 클릭시 => 비디오 실행
    const videoBoxClickEvent = function() {
        $(this).find('iframe').show();
        $(this).find('iframe').attr('src', $(this).find('iframe').attr('src') + '?autoplay=1');
    };

    videoItem.on('click', videoItemClickEnvent);
    videoBox.on('click', videoBoxClickEvent);
})()