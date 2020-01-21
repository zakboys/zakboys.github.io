$(window).ready(function () {
    var subString = window.location.href.split(location.origin + "/")[1];
    console.log(subString);
});