$(document).ready(function () {

    $("#contact-reason").prop("selectedIndex", -1);

    $("#input-area, #checkbox-area, #textarea-area, #button-area").hide();

    $("#contact-reason").change(function () {
        $("#input-area").fadeIn("slow");
    });

<<<<<<< HEAD
    $("#form-email").on("keypress input", function () {
=======
    $("#form-phone").inputmask("(999) 999-9999");

    //$("#form-phone").keypress(function (event) {
    //    if (isNaN(event.key)) {
    //        alert("Only digits!");
    //        $("#form-phone").val(function (index, value) {
    //                return value.substr(0, value.length - 2);
    //        });
    //    }
    //    //if (event.which !== 8 && event.which !== 0 ) {
    //    //    alert("Only digits!");
    //    //}
    //});

    $("#form-email").on("keypress input", (function () {
>>>>>>> master
        $("#checkbox-area").fadeIn("slow");
    });

    $(".radio-answer").change(function () {
        $("#textarea-area").fadeIn("slow");
        $("#button-area").fadeIn("slow");
    });

    $("#submit-btn").submit(function () {
        
    });
});