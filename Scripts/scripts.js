function checkMediaQuery(value) {
    var mediaQueryGlobal = Modernizr.mq('(min-width: ' + value + 'px)');
    if (mediaQueryGlobal)
        return true;
    else
        return false;
}

$(window).on('scroll', function (e) {
    if ($(window).scrollTop() >= 47)
        $('body').addClass('nav-snap');
    else
        $('body').removeClass('nav-snap');
});

$('#goto-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 });
});

$(document).click(function (e) {
    if ($(e.target).parents('#_navigator').length === 0 && !checkMediaQuery(992)) {
        $('#main-nav-upper').stop(true, false).fadeOut(350);
        $('#main-nav-lower').stop(true, false).fadeOut(350);
        mainNavOpen = false;
    }
});

var mainNavOpen = false;

$('#open-Nav').on('click', function () {
    if (mainNavOpen) {
        $('#main-nav-upper').stop(true, false).fadeOut(350);
        $('#main-nav-lower').stop(true, false).fadeOut(350);
        mainNavOpen = false;
    } else {
        $('#main-nav-upper').stop(true, false).fadeIn(350);
        $('#main-nav-lower').stop(true, false).fadeIn(350);
        mainNavOpen = true;
    }
});

$('#main-nav-upper').click(function (e) {
    if (e.target !== this || checkMediaQuery(992))
        return;

    if (mainNavOpen) {
        $('#main-nav-upper').stop(true, false).fadeOut(350);
        $('#main-nav-lower').stop(true, false).fadeOut(350);
        mainNavOpen = false;
    } else {
        $('#main-nav-upper').stop(true, false).fadeIn(350);
        $('#main-nav-lower').stop(true, false).fadeIn(350);
        mainNavOpen = true;
    }
});

$('#main-nav-upper>li.navigator-drop>a').click(function (e) {
    if (checkMediaQuery(992))
        return;

    if ($(this).parent().hasClass('navigator-drop-expanded')) {
        $(this).parent().removeClass('navigator-drop-expanded');
    }
    else {
        $('#main-nav-upper>li.navigator-drop.navigator-drop-expanded').removeClass('navigator-drop-expanded').find('>ul').slideToggle();
        $(this).parent().addClass('navigator-drop-expanded');
    }
    $(this).parent().find('>ul').slideToggle();
    e.preventDefault();
});

$(window).resize(function (e) {
    if (checkMediaQuery(992)) {
        $('#main-nav-upper').css('display', 'block');
        $('#main-nav-lower').css('display', 'block');
        $('#main-nav-upper>li.navigator-drop').removeClass('navigator-drop-expanded').find('>ul').css("display", "");
        mainNavOpen = false;
    } else {
        if (!mainNavOpen) {
            $('#main-nav-upper').css('display', 'none');
            $('#main-nav-lower').css('display', 'none');
            $('#main-nav-upper>li.navigator-drop').removeClass('navigator-drop-expanded').find('>ul').css("display", "");
        }
    }
});

$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction === 'left')
            $(this).carousel('next');
        if (direction === 'right')
            $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});

function showUpload(e) {
    var show = true;
    if (e !== null)
        if (!e.valid())
            show = false;
    if (show) {
        $(e).append('<div id="upload_rotator" style="display:none;" class="mt-4 text-center"><i class="fa fa-spin fa-sync-alt fa-4x"></i></div>');
        $('#upload_rotator').stop(true, false).slideDown(350);
    }
}

$(document).on('hidden.bs.modal', '.modal.modal-disposable', function () {
    $(this).remove();
});

function ShowLocalModal(_title, _body, _image, buttonConfirm = null, buttonAbort = null, callback = null, small = true) {
    var modal = "<div class=\"modal fade modal-disposable\" id=\"runtimeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"runtimeModalTitle\" aria-hidden=\"true\">";
    modal += "<div class=\"modal-dialog modal-dialog-centered" + (!small ? ' modal-lg' : '') + "\" role=\"document\">";
    modal += "<div class=\"modal-content\">";
    modal += "<div class=\"modal-header\">";
    modal += "<h5 class=\"modal-title\" id=\"runtimeModalTitle\">" + _title + "</h5>";
    modal += "</div>";
    modal += "<div class=\"modal-body\">";
    modal += "<div class=\"media align-items-center\"><img src=\"" + _image + "\" class=\"rounded-circle img-fluid mr-3\" /><div class=\"media-body\">" + _body + "</div></div>";
    modal += "</div>";
    modal += "<div class=\"modal-footer\">";
    if (buttonConfirm != null)
        modal += "<button type=\"button\" class=\"btn btn-primary\" id=\"runtimeModalSubmit\"><i class=\"fa fa-check\"></i> " + buttonConfirm + "</button>";
    if (buttonAbort != null)
        modal += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> " + buttonAbort + "</button>";
    modal += "</div>";
    modal += "</div>";
    modal += "</div>";
    modal += "</div>";

    $('body').append(modal);
    var $modal = $('#runtimeModal').modal('show');

    if (buttonConfirm != null)
        $('#runtimeModal #runtimeModalSubmit').click(function () {
            $($modal).modal('hide');
            if (callback != null)
                callback();
        });
}

$('body').on('click', 'a[data-modal]', function (e) {
    if ($(this).attr('data-modal').length !== 0) {
        e.preventDefault();
        var link = $(this).attr('href');
        ShowLocalModal($(this).attr('data-title'), $(this).attr('data-modal'), $(this).attr('data-image'), 'Conferma', 'Annulla', function () {
            window.location = link;
        }, false);
    }
});
$('body').on('click', 'button[data-modal][type="submit"]', function (e) {
    if ($(this).attr('data-modal').length !== 0) {
        e.preventDefault();
        var form = $(this).parents('form');
        ShowLocalModal($(this).attr('data-title'), $(this).attr('data-modal'), $(this).attr('data-image'), 'Conferma', 'Annulla', function () {
            form.submit();
        }, false);
    }
});

$(document).ready(function () {
    function ApplySearchToOwTable(table) {
        var expanded = $(table).data('expanded');
        var search = $(table).find('.ow-table-search>input').val();
        var searchColumns = [];
        var visibleCount = 0;
        $(table).find('>.ow-table-header>div').each(function (index, element) {
            if ($(element).is('[data-searchable="true"]'))
                searchColumns.push(index);
        });
        $(table).find('>ul.ow-table-body>li').each(function (index, element) {
            var $elem = $(element);

            if (expanded) {
                if (search == "" || search == null)
                    $elem.removeClass("d-none");
                else {
                    var foundMatch = false;
                    for (var i = 0; i < searchColumns.length; i++) {
                        var $col = $elem.find('>div:nth-child(' + (searchColumns[i] + 1) + ')')
                        if ($col.text().toLowerCase().match(search.toLowerCase())) {
                            $elem.removeClass("d-none");
                            visibleCount++;
                            foundMatch = true;
                        }
                    }
                    if (!foundMatch) {
                        $elem.addClass("d-none");
                    }
                }
            }
            else {
                if (visibleCount < 25) {
                    if (search == "" || search == null) {
                        $elem.removeClass("d-none");
                        visibleCount++;
                    }
                    else {
                        var foundMatch = false;
                        for (var i = 0; i < searchColumns.length; i++) {
                            var $col = $elem.find('>div:nth-child(' + (searchColumns[i] + 1) + ')')
                            if ($col.text().toLowerCase().match(search.toLowerCase())) {
                                $elem.removeClass("d-none");
                                visibleCount++;
                                foundMatch = true;
                            }
                        }
                        if (!foundMatch) {
                            $elem.addClass("d-none");
                        }
                    }
                }
                else {
                    $elem.addClass("d-none");
                }
            }
        });
    }
    $('.ow-table[data-accordion="true"]').each(function (i, elem) {
        if ($(elem).find('>ul.ow-table-body>li').length > 25)
            $(elem).append('<div class="text-center"><button class="btn btn-sm btn-light font-weight-light ow-table-expand" type="button">Mostra tutto <i class="fa fa-caret-down"></i></button></div>');
    });
    $('.ow-table[data-accordion="true"]').each(function (i, table) {
        $(table).find('>ul.ow-table-body>li').each(function (index, element) {
            if (index >= 25)
                $(element).addClass("d-none");
        })
    });
    $('.ow-table[data-accordion="true"]').on('click', 'button.ow-table-expand', function () {
        var $table = $(this).parents('.ow-table[data-accordion="true"]');
        if ($table.data('expanded')) {
            $table.data('expanded', false);
            $('html, body').scrollTop($table.offset().top - 150);
            $(this).html('Mostra tutto <i class="fa fa-caret-down"></i>');
        }
        else {
            $table.data('expanded', true);
            $(this).html('Nascondi <i class="fa fa-caret-up"></i>');
        }
        ApplySearchToOwTable($table);
    });
    $('.ow-table[data-search="true"]').prepend('<div class="ow-table-search"><input type="text" placeholder="ricerca..." class="form-control" /></div>');
    $('.ow-table').on('change', '.ow-table-search>input', function () {
        ApplySearchToOwTable($(this).parents('.ow-table[data-accordion="true"]'))
    });
});