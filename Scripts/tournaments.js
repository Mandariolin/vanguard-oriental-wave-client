$(function () {
    $('.filter-advanced-btn>button').on('click', function (e) {
        $('.filter-row-advanced').slideToggle(400);
    });
    $('#tournamentRegion').on('change', function (e) {
        var optVal = $(this).find('option:selected').val();
        var $TO = $('#tournamentTO');
        $TO.find('>option:not([value=""])').remove();

        if (optVal != '') {
            $.ajax({
                url: '/owts/get-TO-by-region',
                type: 'POST',
                data: { id: optVal },
                success: function (a, b, c) {
                    $TO.removeAttr('disabled');
                    for (var i = 0; i < a.length; i++) {
                        $TO.append('<option value="' + a[i].tcgplayer + '">' + a[i].name + ' - ' + a[i].address + ', ' + a[i].city + '</option>')
                    }
                },
                error: function (a, b, c) {
                    confirm('Impossibile recuperare gli organizzatori per la regione selezionata. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
                }
            });
        }
        else {
            $TO.prop('disabled', true);
        }
        $.ajax({
            url: '/owts/get-tournaments-by-TO',
            type: 'POST',
            data: { TO: '' },
            success: function (a, b, c) {
                var $tournament_list = $('#tournament-list');
                $tournament_list.empty();
                $tournament_list.html(a);
            },
            error: function (a, b, c) {
                confirm('Impossibile recuperare i tornei per l\'organizzatore selezionato. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
            }
        });
        history.pushState({ shop: optVal, to: '' }, "", "/owts");
    });
    $('#tournamentTO').on('change', function (e) {
        var old_optVal = $("#tournamentRegion").find('option:selected').val();
        var optVal = $(this).find('option:selected').val();
        $.ajax({
            url: '/owts/get-tournaments-by-TO',
            type: 'POST',
            data: { TO: optVal },
            success: function (a, b, c) {
                var $tournament_list = $('#tournament-list');
                $tournament_list.empty();
                $tournament_list.html(a);
            },
            error: function (a, b, c) {
                confirm('Impossibile recuperare i tornei per l\'organizzatore selezionato. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
            }
        });
        history.pushState({ shop: old_optVal, to: optVal }, "", "/owts?TO=" + optVal);
    });
    window.onpopstate = function (e) {
        if (e.state != null) {
            $('#tournamentRegion').val(e.state.shop);
            $.ajax({
                url: '/owts/get_TO_by_region',
                type: 'POST',
                data: { id: e.state.shop },
                success: function (a, b, c) {
                    $('#tournamentTO').removeAttr('disabled');
                    for (var i = 0; i < a.length; i++) {
                        $('#tournamentTO').append('<option value="' + a[i].tcgplayer + '">' + a[i].name + ' - ' + a[i].address + ', ' + a[i].city + '</option>')
                    }
                    $.ajax({
                        url: '/owts/get-tournaments-by-TO',
                        type: 'POST',
                        data: { TO: e.state.to },
                        success: function (d, f, g) {
                            var $tournament_list = $('#tournament-list');
                            $tournament_list.empty();
                            $tournament_list.html(d);
                            $('#tournamentTO').val(e.state.to);
                        },
                        error: function (d, f, g) {
                            confirm('Impossibile recuperare i tornei per l\'organizzatore selezionato. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
                        }
                    });
                },
                error: function (a, b, c) {
                    confirm('Impossibile recuperare gli organizzatori per la regione selezionata. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
                }
            });
        }
        else {
            $('#tournamentRegion').val('');
            $('#tournamentTO').val('');
            $('#tournamentTO').prop('disabled', true);
            $('#tournamentTO').find('>option:not([value=""])').remove();
            $.ajax({
                url: '/owts/get-tournaments-by-TO',
                type: 'POST',
                data: { TO: '' },
                success: function (a, b, c) {
                    var $tournament_list = $('#tournament-list');
                    $tournament_list.empty();
                    $tournament_list.html(a);
                },
                error: function (a, b, c) {
                    confirm('Impossibile recuperare i tornei per l\'organizzatore selezionato. Riprovare più tardi. Se il problema persiste contattare un amministratore.')
                }
            });
        }
    }
});