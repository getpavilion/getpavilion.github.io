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
        
        var codeHeight = $(this).prev().find('code').outerHeight();
        
        if (!$(this).parent().hasClass('open')) {
            $(this).prev().find('pre').velocity({
                maxHeight: codeHeight + 50
            }, {
                duration: 400,
                easing: "easInOut"
            });
            $(this).parent().addClass('open');
            $(this).text('Close example');
        } else {
            $(this).prev().find('pre').velocity({
                maxHeight: 250
            }, {
                duration: 400,
                easing: "easInOut"
            });
            $(this).parent().removeClass('open');
            $(this).text('Show full example');
        }
    });

});
