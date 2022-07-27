window.onload = () => {
    const swiper = new Swiper('.visual', {
        loop: true,   
    })
    swiper.on('slideChange', function () {
        const index = swiper.realIndex;
        if(index === 0) color('#F17785');
        else color('#ABCD05');
    });
    const color = (color) => {
        $('.gnb li').each(function() {
            if($(this).hasClass('active')) {
                $(this).children('a').css('color', color);
            }
        })
    }
}