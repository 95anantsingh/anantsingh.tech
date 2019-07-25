var $sec = $("section");
var n, a;
var x, y = 102;
$(".prev, .next").click(function(){
    var a = Math.trunc($sec.filter(function(i, el) {
            return el.getBoundingClientRect().right > 0;
        })[$(this).hasClass("next")?"next":"prev"]("section").offset().left);
        
    if([$(this).hasClass("next")?"next":"prev"]=="next"){
        y=x;
        if(a==x){
            a = Math.trunc($sec.filter(function(i, el) {
                  return el.getBoundingClientRect().right > 0;
                })["next"]("section")["next"]("section").offset().left);
        }
        $("html, body").stop().animate({scrollLeft: a-20});
        x=a;
    }
    else{
        if(y>a){
            a=y;
            y=0;
        }
        $("html, body").stop().animate({scrollLeft: a+1});
    }
   
});