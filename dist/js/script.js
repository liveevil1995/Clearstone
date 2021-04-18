$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
        ]
    });

    // tabs
    
    $('ul.resin__tabs').on('click', 'li:not(.resin__tab_active)', function() {
        $(this)
          .addClass('resin__tab_active').siblings().removeClass('resin__tab_active')
          .closest('div.container').find('div.resin__item').removeClass('resin__item_active').eq(
            $(this).index()).addClass('resin__item_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.resin-item__content').eq(i).toggleClass('resin-item__content_active');
                $('.resin-item__list').eq(i).toggleClass('resin-item__list_active');
            });
        });
    }

    toggleSlide('.resign__content-item');
    toggleSlide('.resin-item__back');
});