$(document).ready(
    function() {
        console.log('jQuery is ready!');
    }
);

$('#text').text("I am changed text!!!");

$('.htmlChage').html('I have changed <button type="button">Click me</h3>');

$('h4').css
({
    'color': 'red',
    'text-align': 'center'
})

$('#hideBtn').click
(
    function()
    {
        $('#longText').hide();
    }
);

$('#showBtn').click
(
    function()
    {
        $('#longText').show();
    }
);

$('#toggleBtn').click
(
    function()
    {
        $('#longText').toggle();
    }
);

$('#fadeInBtn').click
(
    function()
    {
        $('#photo').fadeIn();
    }
);

$('#fadeOutBtn').click
(
    function()
    {
        $('#photo').fadeOut();
    }
);

$('#fadeToggleBtn').click
(
    function()
    {
        $('#photo').fadeToggle();
    }
);




$('#slideUpBtn').click
(
    function()
    {
        $('#slidePanel').slideUp();
    }
);

$('#slideDownBtn').click
(
    function()
    {
        $('#slidePanel').slideDown();
    }
);

$('#slideToggleBtn').click
(
    function()
    {
        $('#slidePanel').slideToggle();
    }
);






$('#addItem').click
(
    function() 
    {
        $('#ulList').append('<li>Appended Item (Bottom)</li>');
    }
);

$('#prependItem').click
(
    function() 
    {
        $('#ulList').prepend('<li>Prepended Item (Top)</li>');
    }
);

$('#removeItem').click
(
    function() 
    {
        $('#ulList li:last').remove();
    }
);


$('#changeImgBtn').click
(
    function() 
    {
        $('#attributePhoto').attr('src', 'photo2.jpg');
    }
);

$('#changeLinkBtn').click
(
    function() 
    {
        $('#myLink').attr('href', 'https://www.github.com');
        $('#myLink').text('Visit GitHub');
    }
);





$('#userInput').keyup
( 
    function() 
    {
        let nameValue = $(this).val();
        $('#displayName').text(nameValue);
    }
);

$('#mailInput').keyup
( 
    function() 
    {
        let emailValue = $(this).val();
        $('#displayEmail').text(emailValue);
    }
);





$('#basicAnmBtn').click
(
    function() 
    {
        $('#animBox').animate
        (
            {
                width: '150px',
                height: '150px',
                left: '100px'
            }, 
            1000
        ); 
    }
);


$('#seqAnmBtn').click
(
    function() 
    {
        $('#animBox')
        .animate({ left: '200px' }, 500)  
        .animate({ top: '100px' }, 500)   
        .animate({ width: '50px', height: '50px' }, 500) 
        .animate({ left: '0px', top: '0px', width: '100px', height: '100px' }, 500); 
    }
);


$('#CombAnmBtn').click
(
    function() 
    {
        $('#animBox').animate
        (
            {
                opacity: 0.4,
                width: '180px',
                height: '180px',
                left: '150px',
                top: '50px'
            },
            1000
        );
    }
);



// Accordion Menu
$('.accordion').click
(
    function() 
    {
        $(this).next('.panel').slideToggle('fast');
    }
);