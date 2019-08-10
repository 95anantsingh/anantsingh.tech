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
  if(ind==0){
    document.getElementsByClassName("up")[0].classList.toggle("disabled")
  }
  else if(ind==len-1){
    document.getElementsByClassName("down")[0].classList.toggle("disabled")
  }
  document.getElementsByClassName("prev")[0].classList.toggle("disabled")
}

function passData(p) {
  window.open('./projects.html?p=' + encodeURIComponent(p),"_self")   //open in same tab
  //window.open('./projects.html?p=' + encodeURIComponent(p))
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

function ud(){
  var a = $wrap.filter(function(i, el) { return el.getBoundingClientRect().bottom > 0;});
  var index = $wrap.index(a);
  if(event.target.classList.contains("down")){
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
      if(index==0){
        console.log("index==1")
        document.getElementsByClassName("up")[0].classList.toggle("disabled");}
      if(index==len-2){
        console.log("(index==len-2)")
        document.getElementsByClassName("down")[0].classList.toggle("disabled");}
    }
  }
  else if(event.target.classList.contains("up")){
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
      if(index==len-1){
        console.log("ndex==len-1")
        document.getElementsByClassName("down")[0].classList.toggle("disabled");}
      if(index==1){
        console.log("index==1")
        document.getElementsByClassName("up")[0].classList.toggle("disabled");}
    }
  } 
}

function lr(){
  var a = $sec.filter(function(i, el) {return el.getBoundingClientRect().left > 0});
  if(a.length>0) var index = $sec.index(a[0]);
  else var index = $sec.length-1;
  var len = $sec.length;
  if(event.target.classList.contains("next")){
    if(index+1<len){
      var n = $($sec[index+1]).offset().left;
      $("html, body").stop().animate({scrollLeft: n-100},800,"swing");
      if(index==0){
        document.getElementsByClassName("prev")[0].classList.toggle("disabled");
      }
    }
    else if(index+1==len){
      $('html,body').animate({scrollLeft: document.body.scrollWidth},800,"swing");
      event.target.classList.toggle("disabled");
    }
  }
  else if(event.target.classList.contains("prev")){
    if(index>1){
      var n = $($sec[index-1]).offset().left;
      $("html, body").stop().animate({scrollLeft: n-100},800,"swing");
      if(index==len-1){
        document.getElementsByClassName("next")[0].classList.toggle("disabled");
      }
    }
    else if(index==1){
      $("html, body").stop().animate({scrollLeft: 0},800,"swing");
      event.target.classList.toggle("disabled");
    }
  }
}