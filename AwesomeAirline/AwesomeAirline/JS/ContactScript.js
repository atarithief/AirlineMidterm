$(document).ready(function () {

    $("#contact-reason").prop("selectedIndex", -1);

    $("#input-area, #checkbox-area, #textarea-area, #button-area").hide();

    $("#contact-reason").change(function () {
        $("#input-area").fadeIn("slow");
    });

    $("#form-phone").inputmask("(999) 999-9999");

    $("#form-email").on("keypress input", (function () {
        $("#checkbox-area").fadeIn("slow");
    }));

    $(".radio-answer").change(function () {
        $("#textarea-area").fadeIn("slow");
        $("#button-area").fadeIn("slow");
    });

    $("#submit-btn").submit(function () {
        $("#contact-form").submit;
    });
});