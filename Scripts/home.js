var currentHomeIndex = 0;
var movingIndex = false;

function select_home_slider_index(index) {
    if (!movingIndex) {
        movingIndex = true;

        var direction = currentHomeIndex > index ? '+' : '-';

        var slider = $('.card-of-the-day>ul.card-slider');
        if (index < 0) {
            currentHomeIndex = 9;

            slider.find('.featured-card.highlight').removeClass('highlight');
            slider.find('.featured-card:not(.clone)').eq(4).addClass('highlight');

            slider.css('left', '-=2500px');
        }
        else if (index > 9) {
            currentHomeIndex = 0;

            slider.find('.featured-card.highlight').removeClass('highlight');
            slider.find('.featured-card:not(.clone)').eq(3).addClass('highlight');

            slider.css('left', '+=2500px');
        }
        else {
            currentHomeIndex = index;
        }

        slider.stop(true, false).animate({
            left: direction + "=250px"
        }, 300, function () {
            movingIndex = false;
        });
        slider.find('.featured-card.highlight').removeClass('highlight');
        slider.find('.featured-card:not(.clone)').eq(currentHomeIndex).addClass('highlight');

        var details = $('.card-of-the-day+div.daily-details');
        details.find('>h4').html(slider.find('.featured-card.highlight .card-descr>h4').eq(0).html());
        details.find('>h4>small').html(slider.find('.featured-card.highlight .card-descr>h4>small').eq(0).html());
        details.find('>p').html(slider.find('.featured-card.highlight .card-descr>p').eq(0).html());
        details.find('>small').html(slider.find('.featured-card.highlight .card-descr>small').eq(0).html());
        details.find('>img').attr('src', slider.find('.featured-card.highlight .clan-logo>img').eq(0).attr('src'));
    }
}

function resetSliderSizes() {
    var container = $('.card-of-the-day');
    var slider = container.find('>ul.card-slider');

    var val = (container.width() / 2) - 140;

    slider.css('padding-left', val + "px");
    slider.css('padding-right', val + "px");
}

$(function () {
    resetSliderSizes();

    $('.card-of-the-day>.nav-btn.prev-btn').on('click', function () {
        select_home_slider_index(currentHomeIndex - 1);
    });
    $('.card-of-the-day>.nav-btn.next-btn').on('click', function () {
        select_home_slider_index(currentHomeIndex + 1);
    });

    $(window).resize(function () {
        resetSliderSizes();
    });

    $(".card-of-the-day").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction === 'left')
                select_home_slider_index(currentHomeIndex + 1);
            if (direction === 'right')
                select_home_slider_index(currentHomeIndex - 1);
        },
        allowPageScroll: "vertical"
    });

    $('.card-of-the-day').on('click', '>.card-slider>.featured-card.highlight:not(.clone)>.featured-info', function () {
        var details = $('.card-of-the-day+div.daily-details');
        if (details.hasClass('open'))
            details.removeClass('open');
        else
            details.addClass('open');
        details.slideToggle();
    });
});