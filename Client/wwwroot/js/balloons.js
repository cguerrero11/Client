$(document).ready(function () {

    var animate;
    var rando = (Math.round(Math.random() * 10));

    switch (rando) {
        case 1:
            animate = 'bounce';
            break;
        case 2:
            animate = 'flash';
            break;
        case 3:
            animate = 'rubberBand';
            break;
        case 4:
            animate = 'shake';
            break;
        case 5:
            animate = 'swing';
            break;
        case 6:
            animate = 'tada';
            break;
        case 7:
            animate = 'wobble';
            break;
        case 8:
            animate = 'jello';
            break;
        case 9:
            animate = 'heartBeat';
            break;
        case 10:
            animate = 'headShake';
            break;
        default:
            animate = 'bounce';
            break;
    }

    $('h1').addClass('animated ' + animate);
    
    $('#submit').on('click', function (e) {
        e.preventDefault();
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
        animate();
    });

    $("label[for='red']").hover(function () {
        $('h1').css("color", "red")
    });

    $("label[for='green']").hover(function () {
        $('h1').css("color", "green")

    });
    $("label[for='blue']").hover(function () {
        $('h1').css("color", "blue")
    });
    $("label").mouseout(function () {
        $('h1').css("color", "black");
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

