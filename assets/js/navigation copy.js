var $wrap = $(("div[id=wrapper]"));
var len = $wrap.length;
var dots = document.getElementsByClassName("dot");
var $sec;

function hideAll(){
  for (var li of $wrap) {
    var p = $(li);
    p.toggle();
  }
}

function perticularProject(ind){
  var ind; 
  $($wrap[ind]).toggle();
  dots[ind].style.backgroundColor = "rgb(212, 212, 212)";
  $sec = $($wrap[ind]).children("section");
}

function passData(p) {
  window.open('./projects.html?p=' + encodeURIComponent(p),"_self")
}

function parseData () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }
  var cat = data.p;
  perticularProject(cat);
}

$(".up, .down").click(function(){ 
  var a = $wrap.filter(function(i, el) { return el.getBoundingClientRect().bottom > 0;});
  var index = $wrap.index(a);
  if($(this).hasClass("up")){
    if(index+1<len){
      $sec = $($wrap[index+1]).children("section");
      dots[index].style.backgroundColor = "#575757"
      dots[index+1].style.backgroundColor = "rgb(212, 212, 212)"
      var n = $($wrap[index+1]);
      a.animate({top:'-600'},300,"swing",
        function() { a.toggle(); n.animate({top:'600'},2,"swing",
        function() { n.toggle(); n.animate({top:'0'},300,
        function() { a.clearQueue(); n.clearQueue();})});}
      );
    }
  }
  else if($(this).hasClass("down")){
    if(index>0){
      $sec = $($wrap[index-1]).children("section");
      dots[index].style.backgroundColor = "#575757"
      dots[index-1].style.backgroundColor = "rgb(212, 212, 212)"
      var n = $($wrap[index-1]);
      a.animate({top:'600'},300,"swing",
        function() { a.toggle(); n.animate({top:'-600'},2,
        function() { n.toggle(); n.animate({top:'0'},300,"swing",
        function() { a.clearQueue(); n.clearQueue();})});}
      );
    }
  }
});


$(".prev, .next").click(function(){
  var a = $sec.filter(function(i, el) {return el.getBoundingClientRect().left > 0});
  if(a.length>0) var index = $sec.index(a[0]);
  else var index = $sec.length-1;
  var len = $sec.length;
  if($(this).hasClass("next")){
    if(index+1<len){
      console.log($(this).attr('class'));
      $(this).attr('class', $(this).attr('class') + " disabled");
      var n = $($sec[index+1]).offset().left;
      $("html, body").stop().animate({scrollLeft: n-100},800,"swing");
    }
    else if(index+1==len){
      $('html,body').animate({scrollLeft: document.body.scrollWidth},800,"swing");
    }
  }
  else if($(this).hasClass("prev")){
    if(index>0){
      var n = $($sec[index-1]).offset().left;
      $("html, body").stop().animate({scrollLeft: n-100},800,"swing");
    }
  }
});
