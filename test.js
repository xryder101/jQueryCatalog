/*document ready event */
$(function () {
    /*Selects .Hide class and fires the .click event method which will hide the content box in 1500 milliseconds*/
    $(".Hide").click(function () {
        $(".Hide").hide(1500);
    });
    /*Selects .Hide-and-show class and fires the .click event method which will hide the content box for a duration of 1500 milliseconds and then show the content box for a duration of 1500 milliseconds */
    $(".Hide-and-Show").click(function () {
        $(".Hide-and-Show").hide(1500).show(1500);
    });
    /*Selects .Toggle-btn class and fires the .click event method which will toggle the content box in 1500 milliseconds*/
    $(".Toggle-btn").click(function () {
        $(".Toggle").toggle(1500);
    })
    /*Selects .Fade-Out class and fires the .click event method which will Fade out the content box in 1500 milliseconds*/
    $(".Fade-Out").click(function () {
        $(".Fade-Out").fadeOut(1500);
    })
    /*Selects .Fade-Out-and-Fade-in class and fires the .click event method which will fade out the content box in 1500 milliseconds then fade back in in 1500 milliseconds*/
    $(".Fade-Out-and-Fade-in").click(function () {
        $(".Fade-Out-and-Fade-in").fadeOut(1500).fadeIn(1500);
    })
    /*Selects .Fade-Toggle-btn class and fires the .click event method which will fade toggle the content box in 1500 milliseconds*/
    $(".Fade-Toggle-btn").click(function () {
        $(".Fade-Toggle").fadeToggle(1500);
    })
    /*Selects .Slide-Up class and fires the .click event method which will Slide the content box up in 1500 milliseconds*/
    $(".Slide-Up").click(function () {
        $(".Slide-Up").slideUp(1500);
    })
    /*Selects .slide-Toggle-btn class and fires the .click event method which will slide the content box in 1500 milliseconds*/
    $(".Slide-Toggle-btn").click(function () {
        $(".Slide-Toggle").slideToggle(1500);
    })
});

/*Javascript code minified/compressed to optimize webpage speed via reducing file size*/
/*$(function(){$(".Hide").click(function(){$(".Hide").hide(1500);});$(".Hide-and-Show").click(function(){$(".Hide-and-Show").hide(1500).show(1500);});$(".Toggle-btn").click(function(){$(".Toggle").toggle(1500);}) $(".Fade-Out").click(function(){$(".Fade-Out").fadeOut(1500);}) $(".Fade-Out-and-Fade-in").click(function(){$(".Fade-Out-and-Fade-in").fadeOut(1500).fadeIn(1500);}) $(".Fade-Toggle-btn").click(function(){$(".Fade-Toggle").fadeToggle(1500);}) $(".Slide-Up").click(function(){$(".Slide-Up").slideUp(1500);}) $(".Slide-Toggle-btn").click(function(){$(".Slide-Toggle").slideToggle(1500);})});*/