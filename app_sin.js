const navSide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');



burger.addEventListener('click',() => {
      //Toglle Nav
     nav.classList.toggle('nav-active');

     //Animate links
     navLinks.forEach((link, index) => {
       if (link.style.animation){
         link.style.animation = '';
         } else {
         link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
         }
     });
  });
}

navSide();

//CONTENT
function fnTest1(divName) {
  var frm = document.getElementById(divName);
  document.getElementById("iframe_s").src = "./신/sin1.html"
  if (frm.style.display != "block") {
   frm.style.display = "block";
 } else{
   frm.style.display = "none";
  }
 }

 function fnTest2(divName) {
   var frm = document.getElementById(divName);
   document.getElementById("iframe_s").src = "./신/sin2.html"
   if (frm.style.display != "block") {
    frm.style.display = "block";
  } else{
    frm.style.display = "none";
   }
  }

  function fnTest3(divName) {
    var frm = document.getElementById(divName);
    document.getElementById("iframe_s").src = "./신/sin3.html"
    if (frm.style.display != "block") {
     frm.style.display = "block";
   } else{
     frm.style.display = "none";
    }
   }

   function fnTest4(divName) {
     var frm = document.getElementById(divName);
     document.getElementById("iframe_s").src = "./신/sin4.html"
     if (frm.style.display != "block") {
      frm.style.display = "block";
    } else{
      frm.style.display = "none";
     }
    }

    function fnTest5(divName) {
      var frm = document.getElementById(divName);
      document.getElementById("iframe_s").src = "./신/sin5.html"
      if (frm.style.display != "block") {
       frm.style.display = "block";
     } else{
       frm.style.display = "none";
      }
     }

     function fnTest6(divName) {
       var frm = document.getElementById(divName);
       document.getElementById("iframe_s").src = "./신/sin6.html"
       if (frm.style.display != "block") {
        frm.style.display = "block";
      } else{
        frm.style.display = "none";
       }
      }

      function fnTest7(divName) {
        var frm = document.getElementById(divName);
        document.getElementById("iframe_s").src = "./신/sin7.html"
        if (frm.style.display != "block") {
         frm.style.display = "block";
       } else{
         frm.style.display = "none";
        }
       }

       function fnTest8(divName) {
         var frm = document.getElementById(divName);
         document.getElementById("iframe_s").src = "./신/sin8.html"
         if (frm.style.display != "block") {
          frm.style.display = "block";
        } else{
          frm.style.display = "none";
         }
        }

        function fnTest9(divName) {
          var frm = document.getElementById(divName);
          document.getElementById("iframe_s").src = "./신/sin9.html"
          if (frm.style.display != "block") {
           frm.style.display = "block";
         } else{
           frm.style.display = "none";
          }
         }

         function fnTest10(divName) {
           var frm = document.getElementById(divName);
           document.getElementById("iframe_s").src = "./신/sin10.html"
           if (frm.style.display != "block") {
            frm.style.display = "block";
          } else{
            frm.style.display = "none";
           }
          }
