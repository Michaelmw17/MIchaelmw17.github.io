//Dark/light
const addDarkmodeWidget = () => {
    
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

//Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = ()  => {
scrollFunction();
};

const scrollFunction = () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block";
} else {
  myButton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};
