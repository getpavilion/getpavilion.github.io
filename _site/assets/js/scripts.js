$(function() {

    // Sticky navbar
    $("#sticky").sticky({
        topSpacing: 60
    });
    
    // Disable click
    $(".disable-click").on("click", function(e){
        e.preventDefault();
    });
    
    // Copy script tag functions
    var clipboard = new Clipboard(".copy-script-tag");
    var stopFeedbackTimeout;
    var startFeedbackTimeout;
    
        var stopFeedback = function() {
            stopFeedbackTimeout = setTimeout(function(){
                $(".copy-script-tag").removeClass('feedback');
            }, 700);
        }
        
        var startFeedback = function() {
            clearTimeout(stopFeedbackTimeout);
            $(".copy-script-tag").addClass('feedback');
        }
    
        clipboard.on('success', function() {
            clearTimeout(startFeedbackTimeout);
            $(".copy-script-tag").removeClass('feedback');
            startFeedbackTimeout = setTimeout(function(){
                startFeedback();
                stopFeedback();
            },100);
        });

    // Smooth scroll
    smoothScroll.init();

    // Code collapses
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



    // Mobile menu
    var attrTimeout;
    $(".mobile-header-nav-button").on("click", function() {
        if (!$(this).hasClass("active")) {
            
            $(this).addClass("active");
            
            $(".header-nav").velocity("slideDown", {
                duration: 500,
                easing: "spring"
            });
            
            setTimeout(function(){
                $(".header").addClass('shadow-on');
            }, 500);
            
            clearTimeout(attrTimeout);
        } else {
            
            $(this).removeClass("active");
            
            $(".header-nav").velocity("slideUp", {
                duration: 300,
                easing: "easeOutQuint"
            });
            
            attrTimeout = setTimeout(function() {
                $(".header-nav").attr("style", "");
                $(".header").removeClass('shadow-on');
            }, 500);
        }
    });

});


// Sticky animating header

var sticky = false,
    showSticky = false,
    header = $('.header'),
    heroSection = $('.hero-section'),
    versionSection = $('.version-picker'),
    navHeight = header.outerHeight(),
    showHeight = header.outerHeight() + heroSection.outerHeight() + versionSection.outerHeight();
    
$(window).on('scroll', function(){
    
    // set it to sticky
    
    if ($('body').scrollTop() > navHeight && sticky === false) {
        header.addClass('sticky');
        sticky = true;
    } else if ($('body').scrollTop() <= navHeight && sticky === true) {
        header.removeClass('sticky');
        sticky = false;
    }
    
    // show sticky header when scrolled far enough
    
    if ($('body').scrollTop() > showHeight && showSticky === false) {
        header.addClass('show-sticky');
        showSticky = true;
    } else if ($('body').scrollTop() <= showHeight && showSticky === true) {
        header.removeClass('show-sticky');
        showSticky = false;
    }
});