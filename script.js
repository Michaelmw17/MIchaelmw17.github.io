//Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the page, show the scrollTopButton
window.onscroll = ()  => {
scrollFunction();
};

const scrollFunction = () => {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
  myButton.style.display = "block";
} else {
  myButton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the page
const topFunction = () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};


// const clock = () => {
//       let date = new Date();
//       let hrs = date.getHours();
//       let mins = date.getMinutes();
//       let secs = date.getSeconds();
//       let period = "AM";
    
//       if (hrs == 0) hrs = 12;
//       if (hrs > 12) {
//         hrs = hrs - 12;
//         period = "PM";
//       }
    
//       hrs = hrs < 10 ? `0${hrs}` : hrs;
//       mins = mins < 10 ? `0${mins}` : mins;
//       secs = secs < 10 ? `0${secs}` : secs;
    
//       let time = `${hrs}:${mins}:${secs} ${period}`;
//       setInterval(clock, 1000);
//       document.getElementById("clock").innerText = time;
//     }
    
// clock();