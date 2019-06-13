'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: true,
                centerMode: true,
                autoplay: false
            });
        });
    }
};

module.exports = Slider;
