$(function () {
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    var changing = false;
    $('#format_all').on('change', function () {
        if (!changing) {
            changing = true;
            if (this.checked) {
                $('#dropdown-format input[type="checkbox"]:not(#format_all)').each(function (i, val) {
                    $(this).prop('checked', false);
                    $(this).parent().parent().parent().removeClass("selected");
                });
            }
            else {
                $('#dropdown-format input[type="checkbox"]:not(#format_all)').each(function (i, val) {
                    $(this).prop('checked', true);
                    $(this).parent().parent().parent().addClass("selected");
                });
            }
            changing = false;
        }
        if (this.checked) {
            $('#format-detail').html('Tutti i formati');
            $(this).parent().parent().parent().addClass("selected");
        }
        else {
            $('#format-detail').html('Alcuni formati selezionati');
            $(this).parent().parent().parent().removeClass("selected");
        }
    });
    $('#dropdown-format input[type="checkbox"]:not(#format_all)').on('change', function () {
        if (!changing) {
            changing = true;
            var all_unc = true;
            $('#dropdown-format input[type="checkbox"]:not(#format_all)').each(function (i, val) {
                if (this.checked) {
                    all_unc = false;
                    return;
                }
            });
            if (all_unc) {
                $('#format_all').prop('checked', true);
                $('#format-detail').html('Tutti i formati');
                $('#format_all').parent().parent().parent().addClass("selected");
            }
            else {
                $('#format_all').prop('checked', false);
                $('#format-detail').html('Alcuni formati selezionati');
                $('#format_all').parent().parent().parent().removeClass("selected");
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
    $('.filter-advanced-btn>button').on('click', function (e) {
        $('.filter-row-advanced').slideToggle(400);
    });
});