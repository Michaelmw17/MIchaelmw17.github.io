//Dark/light
function addDarkmodeWidget() {
    
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = ()  => {
scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};

// (function() {
//       'use strict';
//       window.addEventListener('load', function() {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function(form) {
//           form.addEventListener('submit', function(event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add('was-validated');
//           }, false);
//         });
//       }, false);
//     })();

