$(document).ready(function () {
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
        $('#black').prop('checked', true);
        $('#blue_green').prop('checked', true);
        $('#purple').prop('checked', true);
    });
    $('#uncheck').on('click', function () {
        $('#red').prop('checked', false);
        $('#green').prop('checked', false);
        $('#black').prop('checked', false);
        $('#blue_green').prop('checked', false);
        $('#purple').prop('checked', false);
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
    $('#blue_greenImg').hover(function () {
        $('h1').css("color", "teal")
    });
    $('#purpleImg').hover(function () {
        $('h1').css("color", "purple")
    });


    $('button').hover(function () {
        $('h1').css("color", "black")

    });
    


});


$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

