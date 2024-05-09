document.addEventListener("DOMContentLoaded", function () {
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
  setInterval(switchLights, 1000); // Adjust interval as needed (in milliseconds)
});

document.addEventListener("DOMContentLoaded", function () {
  const durationInput = document.getElementById("transitionDuration");

  durationInput.addEventListener("input", function () {
    const duration = parseFloat(this.value);
    document.documentElement.style.setProperty(
      "--transition-duration",
      duration + "s"
    );
  });
});
