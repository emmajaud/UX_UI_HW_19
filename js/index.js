// UI Interactions
console.log("this works")

// SCROLL TO TOP
$("#logo").click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("logo was clicked")
});


// HOVER STATES
$("button").hover(function() {
    var shadow = $(this).css("box-shadow");
    if (shadow == "rgba(0, 0, 0, 0.725) 0px 3px 6px 0px"){
        $(this).css("box-shadow", "0px 3px 6px #00000029");
    }
    else {
        $(this).css("box-shadow", "0px 3px 6px #000000B9");
    }
});

var scaleW = "no";
$("#img-1").hover(function() {
    var w = $("#img-1").width();
    var newW = w * 1.02;

    if (scaleW == "yes"){
        var changeBack = w / 1.02;
        $(this).animate({width: changeBack});
        scaleW = "no";
    }
    else {
        $(this).animate({width: newW});
        scaleW = "yes";
        console.log(scaleW)
    }
});
$("#img-2").hover(function() {
    var w2 = $(this).width();
    var newW2 = w2 * 1.02;

    if (scaleW == "yes"){
        var changeBack = w2 / 1.02;
        $(this).animate({width: changeBack});
        scaleW = "no";
    }
    else {
        $(this).animate({width: newW2});
        scaleW = "yes";
        console.log(scaleW)
    }
});


$(".workHover").hover(function() {
    var decor = $(this).css("text-decoration");
    if (decor == "underline solid rgb(0, 0, 0)"){
        $(".workHover").css("text-decoration", "none");
    }
    else {
        $(".workHover").css("text-decoration", "underline");
    }
    console.log(decor);
});
$(".aboutHover").hover(function() {
    var decor = $(this).css("text-decoration");
    if (decor == "underline solid rgb(0, 0, 0)"){
        $(".aboutHover").css("text-decoration", "none");
    }
    else {
        $(".aboutHover").css("text-decoration", "underline");
    }
    console.log(decor);
});
$(".contactHover").hover(function() {
    var decor = $(this).css("text-decoration");
    if (decor == "underline solid rgb(0, 0, 0)"){
        $(".contactHover").css("text-decoration", "none");
    }
    else {
        $(".contactHover").css("text-decoration", "underline");
    }
    console.log(decor);
});
$(".resumeHover").hover(function() {
    var decor = $(this).css("text-decoration");
    if (decor == "underline solid rgb(0, 0, 0)"){
        $(".resumeHover").css("text-decoration", "none");
    }
    else {
        $(".resumeHover").css("text-decoration", "underline");
    }
    console.log(decor);
});
$(".linkedinHover").hover(function() {
    var decor = $(this).css("text-decoration");
    if (decor == "underline solid rgb(0, 0, 0)"){
        $(".linkedinHover").css("text-decoration", "none");
    }
    else {
        $(".linkedinHover").css("text-decoration", "underline");
    }
    console.log(decor);
});
