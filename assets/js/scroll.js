var $sec = $("section");
var n, a;
var x, y = 102;
$(".prev, .next").click(function(){
    var a = Math.trunc($sec.filter(function(i, el) {
            return el.getBoundingClientRect().right > 0;
        })[$(this).hasClass("next")?"next":"prev"]("section").offset().left);
    $("html, body").stop().animate({scrollLeft: a+1});
});