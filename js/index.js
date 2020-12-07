// UI Interactions
console.log("this works")

// SCROLL TO TOP
$("#logo").click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("logo was clicked")
});


// HOVER STATES
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
