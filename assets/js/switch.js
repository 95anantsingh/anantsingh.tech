var $wrap = $(("div[id=wrapper]"));
var len = $wrap.length;

function hideall(){
  for (var li of $wrap) {
    var p = $(li);
    p.toggle();
  } 
  $($wrap[0]).toggle();
}


$(".up, .down").click(function(){ 
  if([$(this).hasClass("up")?"next":"prev"]!=null){ 
    var a = $wrap.filter(function(i, el) { return el.getBoundingClientRect().bottom > 0;});
    var index = $wrap.index(a);
    if([$(this).hasClass("up")?"next":"prev"]=="next"){
      if(index+1<len){
        var n = $($wrap[index+1]);
        a.animate({top:'-800'},"slow",
          function() { a.toggle(); n.animate({top:'800'},2,
          function() { n.toggle(); n.animate({top:'0'},"slow",
          function() { a.clearQueue(); n.clearQueue();})});}
        );
      }
    }

    else if([$(this).hasClass("up")?"next":"prev"]=="prev"){
      if(index>0){
        var p = $($wrap[index-1]);
        console.log("Index: %d",index);
        console.log(p);
        a.animate({top:"100px"},"slow", function() {a.toggle();p.toggle();});
        //p.toggle();
        //a.animate({top:"800"},"slow",
        //  function() { a.hide(); p.animate({bottom:'800'},2,
        //  function() { p.show(); p.animate({bottom:'0'},"slow",
        //  function() { a.clearQueue(); p.clearQueue();})});}
        //);
      }
    }
  } 
});