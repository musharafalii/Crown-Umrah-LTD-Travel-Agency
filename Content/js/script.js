(function($) {
    $(document).ready(function() {
        $('#divmenu').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
        var activeElement = $('#divmenu>ul>li:first');

        $('#divmenu>ul>li').each(function() {
            if ($(this).hasClass('active')) {
                activeElement = $(this);
            }
        });


        //var posLeft = activeElement.position().left;
        //var elementWidth = activeElement.width();
        //posLeft = posLeft + elementWidth / 2 - 6;
        //if (activeElement.hasClass('has-sub')) {
        //    posLeft -= 6;
        //}

        //$('#divmenu #pIndicator').css('left', posLeft);
        //var element, leftPos, indicator = $('#divmenu pIndicator');

        //$("#divmenu>ul>li").hover(function () {
        //    element = $(this);
        //    var w = element.width();
        //    if ($(this).hasClass('has-sub')) {
        //        leftPos = element.position().left + w / 2 - 12;
        //    }
        //    else {
        //        leftPos = element.position().left + w / 2 - 6;
        //    }

        //    $('#divmenu #pIndicator').css('left', leftPos);
        //}
        //, function () {
        //    $('#divmenu #pIndicator').css('left', posLeft);
        //});

        $('#divmenu>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
        $("#menu-button").click(function() {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
            } else {
                $(this).parent().addClass('open');
            }
        });
    });
})(jQuery);
$(document).ready(function() {
    $("a.bookForTour").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// JavaScript Document