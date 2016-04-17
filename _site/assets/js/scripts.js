$(function() {

    // Logo animation
    setTimeout(function() {
        $('#logo-landing').addClass('hover');
    }, 1000)
    setTimeout(function() {
        $('#logo-landing').removeClass('hover');
    }, 1200)
    setTimeout(function() {
        $('#logo-landing').addClass('hover');
    }, 1400)
    setTimeout(function() {
        $('#logo-landing').removeClass('hover');
    }, 1600)


    // Sticky navbar
    $("#sticky").sticky({
        topSpacing: 50
    });

    // Smooth scroll
    smoothScroll.init();

    $('.collapsor > .uncollapse').on('click', function() {
        var _this = $(this)
        if (!$(this).parent().hasClass('uncollapsed')) {
            $(this).parent().velocity({
                maxHeight: 2000
            }, {
                duration: 300,
                easing: "easeInOut"
            }).addClass('uncollapsed');
            $(this).text('Show less');
            setTimeout(function(){
                _this.parent().css("overflow", "visible");
            }, 320);
        } else {
            $(this).parent().velocity({
                maxHeight: 250
            }, {
                duration: 300,
                easing: "easeInOut"
            }).removeClass('uncollapsed');
            $(this).text('Show full example');
            _this.parent().css("overflow", "hidden");
        }
    });

});
