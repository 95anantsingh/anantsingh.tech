var $wrap = $(("div[id=wrapper]"));
var len = $wrap.length;

function hideall(){
  for (var li of $wrap) {
    var p = $(li);
    p.hide();
  } 
  $($wrap[0]).show();
}


$(".up, .down").click(function(){ 
  if([$(this).hasClass("up")?"next":"prev"]!=null){ 
    var a = $wrap.filter(function(i, el) { return el.getBoundingClientRect().bottom > 0;});
    var index = $wrap.index(a);
    if([$(this).hasClass("up")?"next":"prev"]=="next"){
      if(index+1<len){
        console.log("index+1: %d",index+1);
        console.log("len: %d",len);
        console.log("Uindex+1<=len");
        var n = $($wrap[index+1]);
        a.animate({bottom:'800'},"slow",
        function() {a.hide(); n.css({top:'800'}); n.show(); n.animate({top:'0'},"slow");});
      }
    }
    else if([$(this).hasClass("up")?"next":"prev"]=="prev"){
      if(index>0){
        console.log("index: %d",index);
        console.log("len: %d",len);
        console.log("Dindex>0");
        var n = $($wrap[index-1]);
        a.animate({top:'800'},"slow",
        function() {a.hide(); n.css({bottom:'800'}); n.show(); n.animate({bottom:'0'},"slow")});
      }
    }
  } 
});