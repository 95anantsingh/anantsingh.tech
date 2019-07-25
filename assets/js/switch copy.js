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
    console.log("fdgsdh")
    if([$(this).hasClass("up")?"next":"prev"]=="next"){
      if(index+1<=len){
        console.log("index+1: %d",index+1);
        console.log("len: %d",len);
        console.log("Uindex+1<=len");
        var n = $($wrap[index+1]);
        a.animate({bottom:'800px'},"slow",
        function() {a.hide(); n.css({top:'800px'}); n.show(); n.animate({top:'0px'},"slow");})
      }
    }
    else if([$(this).hasClass("up")?"next":"prev"]=="prev"){
      if(index-1>=0){
        console.log("index+1: %d",index+1);
        console.log("len: %d",len);
        console.log("Dindex+1<=len");
        var n = $($wrap[index-1]);
        n.animate({top:'200px'},"slow",function() {n.hide();});
        n.show();
      }
    }
  } 
});