$(document).ready(function () {

    var animate;

    $("img").addClass("animated bounce");
    
    $('#submit').on('click', function (e) {
        checked = $("input[type=checkbox]:checked").length;

        if (!checked) {
            $('#toast').toast({ autohide: false }).toast('show');
            return false;
        }
        


    });
    $('#check').on('click', function () {
        $('#red').prop('checked', true);
        $('#green').prop('checked', true);
        $('#blue').prop('checked', true);
    });
    $('#uncheck').on('click', function () {
        $('#blue').prop('checked', false);
        $('#red').prop('checked', false);
        $('#green').prop('checked', false);
    });
    $('body').hover(function () {
        $('h1').css("color", "black")

    });
    $('#redImg').hover(function () {
        $('h1').css("color", "red")

    });
    $('#greenImg').hover(function () {
        $('h1').css("color", "green")

    });
    $('#blueImg').hover(function () {
        $('h1').css("color", "blue")
    });
    $('#orangeImg').hover(function () {
        $('h1').css("color", "orange")
    });
    
});


$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
});

