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

    const swiper2 = new Swiper('.thanks', {
        spaceBetween: 30,
        slidesPerView: 1.25,
        breakpoints: {
            650: {
                slidesPerView: 2,
            }
        }
    });
    const swiper3 = new Swiper('.review_slide', {
        spaceBetween: 15,
        slidesPerView: 1.7,
        pagination: {
        el: ".review_slide .paging",
        },
        breakpoints: {
            370: {
                slidesPerView: 2
            },
            500: {
                slidesPerView: 2.7,
            },
            650: {
                slidesPerView: 4,
            }
        }
    });
    const evaluateMaxNofChild = ( number ) => {
        const carouselChildren = document.querySelectorAll( ".swiper-container .swiper-slide" ).length;
      
        return ( number >= carouselChildren ? carouselChildren : number );
      };
    const swiper4 = new Swiper('.swiper_container .slide2', {
        spaceBetween: 15,
        slidesPerView: 2,
        breakpoints: {
            370: {
                slidesPerView: 3
            },
            780: {
                slidesPerView: 4,
            }
        }
    });
}

// navigation 노출 유무 코드 삽입
let lastScrollY = 0;
addEventListener('scroll', e => {
    const scrollY = window.scrollY;
    // 이전의 스크롤 위치와 비교하기
    if (scrollY > lastScrollY) {
        document.querySelector('.quick').classList.add('hide');
    } else {
        document.querySelector('.quick').classList.remove('hide')
    }
    
    lastScrollY = scrollY;
})

addEventListener("mousewheel", e => {
    if (e.deltaY > 0) {
        document.querySelector('.quick').classList.add('hide');
    } else {
        document.querySelector('.quick').classList.remove('hide')
    }
  });