//$('.card_cont>img').one('load', function () {
//    $(this).fadeIn(350);
//    $(this).parent().find('.img_loader').remove();
//    console.log('ok', $(this).attr('src'));
//}).each(function () {
//    if (this.complete) $(this).load();
//});
$(function () {
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    var changing = false;
    $('#set_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-set input[type="checkbox"]:not(#set_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-set input[type="checkbox"]:not(#set_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#set-detail').html('Tutte le espansioni');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#set-detail').html('Alcune espansioni selezionate');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-set input[type="checkbox"]:not(#set_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-set input[type="checkbox"]:not(#set_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#set_all').prop('checked', true);
                $('#set-detail').html('Tutte le espansioni');
                $('#set_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#set_all').prop('checked', false);
                $('#set-detail').html('Alcune espansioni selezionate');
                $('#set_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#type_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-type input[type="checkbox"]:not(#type_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-type input[type="checkbox"]:not(#type_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#type-detail').html('Tutti i tipi di unità');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#type-detail').html('Alcuni tipi di unità selezionati');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-type input[type="checkbox"]:not(#type_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-type input[type="checkbox"]:not(#type_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#type_all').prop('checked', true);
                $('#type-detail').html('Tutti i tipi di unità');
                $('#type_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#type_all').prop('checked', false);
                $('#type-detail').html('Alcuni tipi di unità selezionati');
                $('#type_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#clan_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-clan input[type="checkbox"]:not(#clan_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-clan input[type="checkbox"]:not(#clan_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#clan-detail').html('Tutti i clan');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#clan-detail').html('Alcuni clan selezionati');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-clan input[type="checkbox"]:not(#clan_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-clan input[type="checkbox"]:not(#clan_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#clan_all').prop('checked', true);
                $('#clan-detail').html('Tutti i clan');
                $('#clan_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#clan_all').prop('checked', false);
                $('#clan-detail').html('Alcuni clan selezionati');
                $('#clan_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#race_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-race input[type="checkbox"]:not(#race_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-race input[type="checkbox"]:not(#race_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#race-detail').html('Tutte le razze');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#race-detail').html('Alcune razze selezionate');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-race input[type="checkbox"]:not(#race_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-race input[type="checkbox"]:not(#race_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#race_all').prop('checked', true);
                $('#race-detail').html('Tutte le razze');
                $('#race_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#race_all').prop('checked', false);
                $('#race-detail').html('Alcune razze selezionate');
                $('#race_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#rarity_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-rarity input[type="checkbox"]:not(#rarity_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-rarity input[type="checkbox"]:not(#rarity_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#rarity-detail').html('Tutte le rarità');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#rarity-detail').html('Alcune rarità selezionate');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-rarity input[type="checkbox"]:not(#rarity_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-rarity input[type="checkbox"]:not(#rarity_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#rarity_all').prop('checked', true);
                $('#rarity-detail').html('Tutte le rarità');
                $('#rarity_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#rarity_all').prop('checked', false);
                $('#rarity-detail').html('Alcune rarità selezionate');
                $('#rarity_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#grade_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-grade input[type="checkbox"]:not(#grade_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-grade input[type="checkbox"]:not(#grade_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#grade-detail').html('Tutti i gradi');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#grade-detail').html('Alcuni gradi selezionati');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-grade input[type="checkbox"]:not(#grade_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-grade input[type="checkbox"]:not(#grade_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#grade_all').prop('checked', true);
                $('#grade-detail').html('Tutti i gradi');
                $('#grade_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#grade_all').prop('checked', false);
                $('#grade-detail').html('Alcuni gradi selezionati');
                $('#grade_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('#nation_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-nation input[type="checkbox"]:not(#nation_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-nation input[type="checkbox"]:not(#nation_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#nation-detail').html('Tutte le nazioni');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#nation-detail').html('Alcune nazioni selezionate');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-nation input[type="checkbox"]:not(#nation_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-nation input[type="checkbox"]:not(#nation_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#nation_all').prop('checked', true);
                $('#nation-detail').html('Tutte le nazioni');
                $('#nation_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#nation_all').prop('checked', false);
                $('#nation-detail').html('Alcune nazioni selezionate');
                $('#nation_all').parent().parent().parent().removeClass("selected");
            }
            if (this.checked) {
                $(this).parent().parent().parent().addClass("selected");
            }
            else {
                $(this).parent().parent().parent().removeClass("selected");
            }
            changing = false;
        }
    });
    $('.filter-advanced-btn>button').on('click', function (e) {
        $('.filter-row-advanced').slideToggle(400);
    });
});