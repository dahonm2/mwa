window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "15px";    
      document.getElementById("button1").style.fontSize = "15px";
      document.getElementById("button2").style.fontSize = "15px";
      
    } else {
      document.getElementById("header").style.fontSize = "25px";
      document.getElementById("button1").style.fontSize = "25px";
      document.getElementById("button2").style.fontSize = "25px";
    }
  }

  