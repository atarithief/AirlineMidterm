/*
 Resize based on content div -- if content div is above 80vh, give foot-container bottom 0
 */
$(document).ready(function () {
    var contentSize = $(".content").outerHeight(true);
    alert(contentSize);
});