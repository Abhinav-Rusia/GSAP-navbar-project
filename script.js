let tl = gsap.timeline({ paused: true });
let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let fullMenu = document.querySelector("#full");

// Define smooth animation timeline
tl.to("#full", {
  right: "0",
  duration: 0.5,
  ease: "power3.out", // Smooth ease for entry
});

tl.from("#full h4", {
  opacity: 0,
  x: 100,
  duration: 0.6,
  stagger: 0.2,
  ease: "back.out(1.7)", // Smooth back easing for text items
});

tl.from("#full i", {
  opacity: 0,
  scale: 0.8, // Subtle scale effect
  duration: 0.4,
  ease: "elastic.out(1, 0.5)", // Elastic ease for the close icon
});

// Menu icon click to play the animation
menu.addEventListener("click", function (event) {
  event.stopPropagation();
  tl.play();
});

// Close icon click to reverse the animation
cross.addEventListener("click", function (event) {
  event.stopPropagation();
  tl.reverse();
});

// Add a click listener to close the menu if clicking outside of it
document.addEventListener("click", function (event) {
  if (!fullMenu.contains(event.target) && !menu.contains(event.target)) {
    tl.reverse();
  }
});
