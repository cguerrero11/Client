$(document).ready(function () {

    var animate;
    
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
        animate();
    });
    $('#uncheck').on('click', function () {
        $('#blue').prop('checked', false);
        $('#red').prop('checked', false);
        $('#green').prop('checked', false);
        animate();
    });

    $('#red').hover(function () {
        $('h1').css("color", "red")

    });

    $('#green').hover(function () {
        $('h1').css("color", "green")

    });
    $('#blue').hover(function () {
        $('h1').css("color", "blue")
    });
    
});


$(function animate() {
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

