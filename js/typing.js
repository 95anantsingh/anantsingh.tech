
$(document).ready(function() {
  
  $(function(){
    
  	$('#typed-head').typed({
      stringsElement: document.getElementById('typed-string1'),
      startDelay: 1500,
      typeSpeed: 35,
      callback: function() {
        $(".typed-cursor").hide();
        string2();
      }
    });
    
  });

  function string2() {
    Typed.new('#typed-intro', {
      stringsElement: document.getElementById('typed-string2'),
      startDelay: 800,
      typeSpeed: 25,
      callback: function() {
        $(".typed-cursor").hide();
        introEnd();
      }
    });
  }

  function introEnd() {
    Typed.new('#intro-end', {
      strings: ["understand cause and effect.","extract decision making insights.","help machines learn.","make the world a better place. ^3000"],
      backDelay: 1000,
      typeSpeed: 40,
      backSpeed: 30,
      callback: function() {
        $(".typed-cursor").hide();
      }
    });
  }
});