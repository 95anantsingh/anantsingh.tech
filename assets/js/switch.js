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
        a.animate({top:'-600'},300,"swing",
          function() { a.toggle(); n.animate({top:'600'},2,"swing",
          function() { n.toggle(); n.animate({top:'0'},300,
          function() { a.clearQueue(); n.clearQueue();})});}
        );
      }
    }
    else if([$(this).hasClass("up")?"next":"prev"]=="prev"){
      if(index>0){
        var n = $($wrap[(index-1)]);
        a.animate({top:'600'},300,"swing",
          function() { a.toggle(); n.animate({top:'-600'},2,
          function() { n.toggle(); n.animate({top:'0'},300,"swing",
          function() { a.clearQueue(); n.clearQueue();})});}
        );
      }
    }
  } 
});