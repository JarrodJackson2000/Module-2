document.addEventListener("DOMContentLoaded", function () {
  const durationInput = document.getElementById("transitionDuration");
  const intervalInput = document.getElementById("interval");
  let intervalID;

  durationInput.addEventListener("input", function () {
    const duration = parseFloat(this.value);
    document.documentElement.style.setProperty(
      "--transition-duration",
      duration + "s"
    );
  });

  intervalInput.addEventListener("input", function () {
    const interval = parseInt(this.value);
    clearInterval(intervalID); // Clear existing interval
    intervalID = setInterval(switchLights, interval);
  });

  const lights = document.querySelectorAll(".light");
  let currentIndex = 0;

  function switchLights() {
    // Turn off the current light
    lights[currentIndex].style.opacity = "0.6";
    // Calculate the index of the next light
    currentIndex = (currentIndex + 1) % lights.length;
    // Turn on the next light
    lights[currentIndex].style.opacity = "1";
  }

  // Initial setup
  lights.forEach((light, index) => {
    // Set initial opacity for all lights
    light.style.opacity = index === 0 ? "1" : "0.6";
  });

  // Start the loop
  intervalID = setInterval(switchLights, 1000); // Default interval is 1000 milliseconds
});
