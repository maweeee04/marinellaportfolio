const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// Iterate throughout slides index and multiply by 100% to slide throughout each
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// Counter to move throughout slides using buttons

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  // Functionality to pan through slides

  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  // Functionality to hide buttons as necessary

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
}

  prevBtn.style.display = 'none';