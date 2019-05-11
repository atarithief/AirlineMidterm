$(document).ready(function () {

    $("#form-phone").keydown(function (event) {
        if ($(this).val().length >= 12) {
            $(this).val($(this).val().substr(0, 12));
        }
    });

    $("#form-phone").keyup(function (event) {
        if ($(this).val().length >= 12) {
            $(this).val($(this).val().substr(0, 12));
        }
    });

    $("#contact-reason").prop("selectedIndex", -1);

    $("#input-area, #checkbox-area, #textarea-area, #button-area").hide();

    $("#contact-reason").change(function () {
        $("#input-area").fadeIn("slow");
    });

    $("#form-email").on("keypress input", (function () {
        $("#checkbox-area").fadeIn("slow");
    }));

    $(".radio-answer").change(function () {
        $("#textarea-area").fadeIn("slow");
        $("#button-area").fadeIn("slow");
    });

    $("#submit-btn").submit(function () {

        $("#contact-form").submit();
    });
});

