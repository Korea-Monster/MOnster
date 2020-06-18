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

  if (frm.style.display != "block") {
   frm.style.display = "block";
 } else{
   frm.style.display = "none";
  }
 }
