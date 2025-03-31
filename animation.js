window.onload = function() {
  window.scrollTo(0, 0);
};

// ScrollReveal().reveal("h1, h2, p", {
// duration: 1000,
//  origin: "bottom",
//  distance: "50px",
//  delay: 400
//});

ScrollReveal().reveal("h1, h2, p", {
  duration: 1000,
  origin: "right",
  distance: "50px",
  delay: 200
});

ScrollReveal().clean('.autor, .title, .hidden, .content, .cardcontent p, .popover');