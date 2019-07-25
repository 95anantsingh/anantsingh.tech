var $wrap = $(("div[id=wrapper]"));
var len = $wrap.length;
var dots = document.getElementsByClassName("dot");

function hideAll(){
  for (var li of $wrap) {
    var p = $(li);
    p.toggle();
  } 
  //$($wrap[0]).toggle();
}

function perticularProject(ind){
  var ind;
  // for (var li of $wrap) {
  //   var p = $(li);
  //   p.toggle();
  // } 
  $($wrap[ind]).toggle();
  dots[ind].style.backgroundColor = "#717171"
}

function passData(p) {
  url = ('./projects.html?p=' + encodeURIComponent(p));
  window.open(url,"_self")
}

function parseData () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;  
  console.log("parseData cat: %d",cat)
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }
  var cat = data.p;
  console.log("parseData cat: %d",cat)
  perticularProject(cat);
}

$(".up, .down").click(function(){ 
  if([$(this).hasClass("up")?"next":"prev"]!=null){ 
    var a = $wrap.filter(function(i, el) { return el.getBoundingClientRect().bottom > 0;});
    var index = $wrap.index(a);

    if([$(this).hasClass("up")?"next":"prev"]=="next"){
      if(index+1<len){
        dots[index].style.backgroundColor = "#bbb"
        dots[index+1].style.backgroundColor = "#717171"
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
        dots[index].style.backgroundColor = "#bbb"
        dots[index-1].style.backgroundColor = "#717171"
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

