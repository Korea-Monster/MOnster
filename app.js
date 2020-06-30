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
  document.getElementById("iframe_s").src = "./동물/animal.html"
  if (frm.style.display != "block") {
   frm.style.display = "block";
 } else{
   frm.style.display = "none";
  }
 }

 function fnTest2(divName) {
   var frm = document.getElementById(divName);
   document.getElementById("iframe_s").src = "./동물/animal2.html"
   if (frm.style.display != "block") {
    frm.style.display = "block";
  } else{
    frm.style.display = "none";
   }
  }

  function fnTest3(divName) {
    var frm = document.getElementById(divName);
    document.getElementById("iframe_s").src = "./동물/animal3.html"
    if (frm.style.display != "block") {
     frm.style.display = "block";
   } else{
     frm.style.display = "none";
    }
   }

   function fnTest4(divName) {
     var frm = document.getElementById(divName);
     document.getElementById("iframe_s").src = "./동물/animal4.html"
     if (frm.style.display != "block") {
      frm.style.display = "block";
    } else{
      frm.style.display = "none";
     }
    }

    function fnTest5(divName) {
      var frm = document.getElementById(divName);
      document.getElementById("iframe_s").src = "./동물/animal5.html"
      if (frm.style.display != "block") {
       frm.style.display = "block";
     } else{
       frm.style.display = "none";
      }
     }

     function fnTest6(divName) {
       var frm = document.getElementById(divName);
       document.getElementById("iframe_s").src = "./동물/animal6.html"
       if (frm.style.display != "block") {
        frm.style.display = "block";
      } else{
        frm.style.display = "none";
       }
      }

      function fnTest7(divName) {
        var frm = document.getElementById(divName);
        document.getElementById("iframe_s").src = "./동물/animal7.html"
        if (frm.style.display != "block") {
         frm.style.display = "block";
       } else{
         frm.style.display = "none";
        }
       }

       function fnTest8(divName) {
         var frm = document.getElementById(divName);
         document.getElementById("iframe_s").src = "./동물/animal8.html"
         if (frm.style.display != "block") {
          frm.style.display = "block";
        } else{
          frm.style.display = "none";
         }
        }

        function fnTest9(divName) {
          var frm = document.getElementById(divName);
          document.getElementById("iframe_s").src = "./동물/animal9.html"
          if (frm.style.display != "block") {
           frm.style.display = "block";
         } else{
           frm.style.display = "none";
          }
         }

         function fnTest10(divName) {
           var frm = document.getElementById(divName);
           document.getElementById("iframe_s").src = "./동물/animal10.html"
           if (frm.style.display != "block") {
            frm.style.display = "block";
          } else{
            frm.style.display = "none";
           }
          }
