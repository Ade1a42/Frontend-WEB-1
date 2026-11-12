$(document).ready(
    function() {

        // Effect 1: hero text fades in when the page opens
        $('.hero-content').hide().fadeIn(900);

        // Effect 2: all cards fade in
        $('.card').hide().fadeIn(800);


        // Effect 3: "More about me" menu (same idea as my accordion in Assignment 6)
        $('.more-btn').click
        (
            function()
            {
                $(this).next('.more-panel').slideToggle('fast');
            }
        );


        // Effect 4: back to top button
        // fadeIn after scrolling down, fadeOut near the top
        $(window).scroll
        (
            function()
            {
                if($(this).scrollTop() > 300){
                    $('#backTopBtn').fadeIn();
                }
                else{
                    $('#backTopBtn').fadeOut();
                }
            }
        );

        // smooth scroll to the top with animate()
        $('#backTopBtn').click
        (
            function()
            {
                $('html, body').animate({ scrollTop: 0 }, 600);
            }
        );

    }
);
