const circular = document.querySelector('.progress-circular');
const valueText = document.querySelector('.value');
const valueInput = document.getElementById('value-input');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');

function updateValue() {
  const value = Math.min(100, Math.max(0, valueInput.value)); 
  valueText.textContent = `${value}%`;
  const angle = (value / 100) * 360;
  circular.style.background = `conic-gradient(#880bea ${angle}deg, #ededed 0deg)`;
}


function toggleAnimation() {
  if (animateToggle.checked) {
    circular.style.animation = 'bubble 3s ease-in-out infinite, float 6s ease-in-out infinite';
  } else {
    circular.style.animation = 'none';
  }
}


function toggleVisibility() {
  circular.style.display = hideToggle.checked ? 'none' : 'flex';
}


valueInput.addEventListener('input', updateValue);
animateToggle.addEventListener('change', toggleAnimation);
hideToggle.addEventListener('change', toggleVisibility);


const style = document.createElement('style');
style.textContent = `


  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-10px, -5px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    75% {
      transform: translate(-5px, 10px);
    }
  }
`;
document.head.appendChild(style);
