$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCHeivNlIRM-vr8QZTLzJV3Rb_j2rzuu_4",
        databaseURL: "https://pavilion-ca145.firebaseio.com"
    };
    firebase.initializeApp(config);

    // MOJS burst object
    var burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 4: 22 },
        angle: 45,
        count: 14,
        children: {
            radius: 2.5,
            fill: '#F357B4',
            scale: { 1: 0, easing: 'quad.in' },
            pathScale: [.8, null],
            degreeShift: [13, null],
            duration: [500, 700],
            easing: 'quint.out'
        }
    });

    var firstCookieNotification = false;

    //cookie notification
    var cookieNotification = function() {
        $(".cookie-notification").velocity({
            top: ["80vh", "90vh"],
            opacity: 1
        }, {
            delay: 500,
            duration: 600,
            easing: "spring"
        });

        setTimeout(function() {
            $(".cookie-notification").addClass("active");
        }, 800);

        $(".cookie-notification").velocity({
            top: ["90vh", "80vh"],
            opacity: 0
        }, {
            delay: 1500,
            duration: 300,
            easing: "easeOutQuint"
        });
        setTimeout(function() {
            $(".cookie-notification").removeClass("active");
            firstCookieNotification = true;
        }, 3000);
    }

    // Favorite templates object
    var templatesFavorited = {},
        // Look if cookie is present
        favoritedCookie = Cookies.get("favorited");

    // If cookie is here parse it and fill the object
    if (favoritedCookie != null) {
        templatesFavorited = JSON.parse(favoritedCookie);
    }

    // Look over object to add classes for previously favorited templates
    for (prop in templatesFavorited) {
        if (prop != null) {
            $(".template[data-template=" + prop + "]").find(".template-favorite").addClass("favorited");
        }
    }

    // Favorite template click action
    $(".template-favorite").on("click", function(e) {
        e.preventDefault();

        // If not yet favorited, do this
        if (!$(this).hasClass("favorited")) {
            var countContainer = $(this).find(".favorite-count"),
                currentCount = parseInt(countContainer.attr("data-count")),
                newCount = currentCount + 1,
                templateName = $(this).parents(".template").attr("data-template");

            // Add template like to object with templatename : true
            templatesFavorited[templateName] = true;

            // Set cookie
            Cookies.set("favorited", templatesFavorited, {
                expires: 365
            });

            // Set new count in firebase
            firebase.database().ref('/' + templateName).set({
                count: newCount
            });

            // add class favorited to container
            $(this).addClass("favorited");

            // Get heart-icon dimensions and coordinated for burst animation
            var heartDimensionsW = $(".material-icons.favorite-icon").outerWidth() / 2,
                heartDimensionsH = $(".material-icons.favorite-icon").outerHeight() / 2,
                heartPosition = $(".template[data-template=" + templateName + "]").find(".material-icons.favorite-icon").offset(),
                coords = { 
                    x: heartPosition.left + heartDimensionsW, 
                    y: heartPosition.top + heartDimensionsH - 2 // compensate for translateY(2px) on .template-favorite
                };

            // Trigger burst animation with coordinates
            burst.tune(coords).replay();

            //Do cookie notifications
            if (!firstCookieNotification) {
                cookieNotification();
            }

        } else {
            console.log("You've already liked the - " + $(this).prev().text() + " - template.");
        }
    });

    // Read amount of likes from database root
    var favCountRef = firebase.database().ref('/');
    favCountRef.on('value', function(snapshot) {
        // Push result object to update function
        updateFavCount(snapshot.val());
    });

    // Update function
    var updateFavCount = function(obj) {
        for (prop in obj) {
            // find card with corresponding template attribute
            $(".template[data-template=" + prop + "]")
                // look up the favorite count container
                .find(".favorite-count")
                // set the text to retrieved count
                .text(obj[prop].count)
                // set attribute count to retrieved counter
                .attr("data-count", obj[prop].count)
                // look up spinner container
                .siblings(".spinner")
                // fadeout spinner container
                .velocity("fadeOut");
        }
    }
});
