var xOffset = 250;
var yOffset = 40;
$(document).ready(function () {
    $('body').on('mouseover', '.cfv', function (e) {
        if (checkMediaQuery(768)) {
            this.t = this.title;
            this.title = "";
            var c = (this.t != "") ? "<br/>" + this.t : "";
            $('body').append('<p id="cfv_img_hover_preview"><img src="' + $(this).attr('data-href') + '" alt="CFV Card Image Preview" />' + c + '</p>');
            if ($('body').width() / 2 > e.pageX)
                $('#cfv_img_hover_preview').fadeIn('fast').css('top', (e.pageY - xOffset) + 'px').css('left', (e.pageX + yOffset) + 'px')
            else
                $('#cfv_img_hover_preview').fadeIn('fast').css('top', (e.pageY - xOffset) + 'px').css('left', (e.pageX - yOffset - 350) + 'px')
        }
    });
    $('body').on('mouseout', '.cfv', function (e) {
        $("#cfv_img_hover_preview").remove();
    });
    $('body').on('mousemove', '.cfv', function (e) {
        if ($('body').width() / 2 > e.pageX)
            $('#cfv_img_hover_preview')
                .css('top', (e.pageY - xOffset) + 'px')
                .css('left', (e.pageX + yOffset) + 'px');
        else
            $('#cfv_img_hover_preview')
                .css('top', (e.pageY - xOffset) + 'px')
                .css('left', (e.pageX - yOffset - 350) + 'px');
    });
});