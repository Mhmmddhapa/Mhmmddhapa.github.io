let currentSlide = 1;
const totalSlides = 10;

function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.display = 'none';
    slide.classList.remove('floatdown'); // Hilangkan kelas floatdown dari setiap slide
  });

  const slideToShow = document.getElementById(`slide${slideNumber}`);
  if (slideToShow) {
    slideToShow.style.display = 'block';
    slideToShow.classList.add('floatdown'); // Tambahkan kelas floatdown pada slide yang ditampilkan
  }

  if (slideNumber === 3) {
    const sendButton = document.getElementById('sendButton');
    if (sendButton) {
      sendButton.addEventListener('click', sendWishes);
    }
  } else {
    const sendButton = document.getElementById('sendButton');
    if (sendButton) {
      sendButton.removeEventListener('click', sendWishes);
    }
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  showSlide(currentSlide);
}

function sendWishes() {
  alert('Wishing you a fantastic birthday!');
  // Tambahkan logika untuk menampilkan efek kado atau tindakan lainnya di sini jika diperlukan
}

// Dalam skrip JavaScript Anda
const sparkles = document.querySelector('.sparkles');

function createSparkles() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkles.appendChild(sparkle);
  }
}

document.getElementById("playButton").addEventListener("click", function() {
  var audio = document.getElementById("backgroundMusic");
  audio.play();
});


// Panggil fungsi createSparkles() ketika dokumen dimuat
document.addEventListener('DOMContentLoaded', createSparkles);


document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentSlide);
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
  }
});
