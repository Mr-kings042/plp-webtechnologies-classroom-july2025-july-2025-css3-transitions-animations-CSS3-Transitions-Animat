// === Global scope variable ===
const box = document.getElementById('animatedBox');
const triggerBtn = document.getElementById('startAnimBtn');

// Function with parameters & return value
function toggleAnimation(element, className) {
  // Local variable to show scope
  let isActive = element.classList.contains(className);
  
  if (isActive) {
    element.classList.remove(className);
    return false; // returns boolean
  } else {
    element.classList.add(className);
    return true;
  }
}

// Another function showing reusability and calculation
function startBoxAnimation() {
  // Use toggleAnimation and capture the returned value
  const started = toggleAnimation(box, 'animate');

  // Also trigger slide-in if starting animation for the first time
  if (started) {
    box.classList.add('slide-in');
  } else {
    box.classList.remove('slide-in');
  }
}

// Attach event listener to button
triggerBtn.addEventListener('click', startBoxAnimation);
