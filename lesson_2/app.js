const slides = document.getElementsByClassName("slide");
const navs = document.querySelectorAll(".nav-item");

function updateSlider(index) {
  for (const slide of slides) {
    slide.classList.remove("active");
  }

  for (const nav of navs) {
    nav.classList.remove("active");
  }

  const activeSlide = slides[index];
  activeSlide.classList.add("active");
  const backgroundImage = activeSlide.style.backgroundImage;
  document.body.style.backgroundImage = backgroundImage;

  navs[index].classList.add("active");
}

let slideIndex = 0;
updateSlider(slideIndex);

const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

nextBtn.addEventListener("click", function () {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }

  updateSlider(slideIndex);
});

prevBtn.onclick = function () {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex -= 1;
  }

  updateSlider(slideIndex);
};

// Debug - отладка

// setInterval(() => {
//     nextBtn.dispatchEvent(new Event("click"));
// }, 2000);
