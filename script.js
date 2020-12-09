$("#slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title');
    },
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});