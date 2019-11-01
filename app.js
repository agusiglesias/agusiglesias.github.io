
const elements = document.querySelectorAll(".hidden");
const triggerMultiplier = 1.5;
const windowHeight = window.innerHeight / triggerMultiplier;

scrollAppear = () => {
  elements.forEach(element => {
    //   get each element's distance from top of screen & computed height
    let positionFromTop = element.getBoundingClientRect().top;
    let elementHeight = parseInt(window.getComputedStyle(element).height);

    // trigger animation on scroll down
    if (positionFromTop < windowHeight) {
      element.classList.replace("hidden", "fade-in");
    }

    // re-hide elements after leaving the screen
    if (
      positionFromTop > windowHeight * triggerMultiplier ||
      positionFromTop < -elementHeight
    ) {
      element.classList.replace("fade-in", "hidden");
    }
  });
};

// run function when scrolling
window.addEventListener("scroll", scrollAppear);