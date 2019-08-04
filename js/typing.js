
$(document).ready(function() {
  
  $(function(){
    
  	$('#typed-head').typed({
      stringsElement: document.getElementById('typed-string1'),
      startDelay: 1500,
      typeSpeed: 25,
      callback: function() {
        $(".typed-cursor").hide();
        string2();
      }
    });
    
  });

  function string2() {
    Typed.new('#typed-intro', {
      stringsElement: document.getElementById('typed-string2'),
      startDelay: 1000,
      typeSpeed: 15,
      callback: function() {
        $(".typed-cursor").hide();
        introEnd();
      }
    });
  }

  function introEnd() {
    Typed.new('#intro-end', {
      strings: ["understand cause and effect.","extract decision making insight.","help machines learn.","make the world a better place. ^3000"],
      backDelay: 2000,
      typeSpeed: 35,
      backSpeed: 0,
      callback: function() {
        $(".typed-cursor").hide();
      }
    });
  }
});