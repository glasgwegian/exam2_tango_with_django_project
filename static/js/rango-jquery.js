$(document).ready(function() {
    
    $('#about-btn').click(function() {
        alert('You clicked the button using JQuery!');
    })

    // $("#about-btn").click(function() {
    //     $('#about-btn').removeClass('btn-primary').addClass('btn-success');
    // })

    $('p').hover(
        function() {
        $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    )

    $('#about-btn').click(function() {
        msgStr = $('#msg').html();
        msgStr = msgStr + ' ooo, fancy!';

        $('#msg').html(msgStr);
    })

})