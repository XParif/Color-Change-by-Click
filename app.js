/**
 * Project Requirements:
 * - change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener('click', function() {
      const bgColor = generateRGBColor();
      root.style.backgroundColor = bgColor;
  })
}

// Step 2 - random color generator function
function generateRGBColor() {
  // rgb(0, 0, 0), rgb(255, 255, 255)
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Step 3 - collect all necesseary references

// step 4 - handle the click event
