const starsContainer = document.querySelector(".stars");
// const stars = starsContainer.querySelectorAll("div");
const stars = starsContainer.children;
const ratingValue = document.querySelector(".rating-value");
const ratingText = document.querySelector(".rating-text");

function updateRating(rating) {
  for (let i = 1; i <= stars.length; i++) {
    if (rating >= i) {
      stars[i - 1].classList.add("checked");
    } else {
      stars[i - 1].classList.remove("checked");
    }
  }

  // ratingValue.setAttribute("data-value", rating);
  ratingValue.dataset.value = rating;

  if (rating === 5) {
    blowConfetti();
  }
}

// for(const star of stars){
//     star.onclick = function(){
//         // star-1
//         // const rating = Number(star.id.slice(-1));
//         const rating = Number(star.dataset.rating);
//         updateRating(rating);
//     }
// }

starsContainer.onclick = function (event) {
  if (event.target.id && event.target.id.startsWith("star-")) {
    const rating = Number(event.target.dataset.rating);
    updateRating(rating);
  }
};

starsContainer.onmouseover = function (event) {
  if (event.target.id && event.target.id.startsWith("star-")) {
    const rating = Number(event.target.dataset.rating);
    switch (rating) {
      case 1:
        ratingText.dataset.content = "Ужасно";
        break;
      case 2:
        ratingText.dataset.content = "Плохо";
        break;
      case 3:
        ratingText.dataset.content = "Удовлетворительно";
        break;
      case 4:
        ratingText.dataset.content = "Хорошо";
        break;
      case 5:
        ratingText.dataset.content = "Отлично";
        break;
    }
  }
};

starsContainer.onmouseleave = function () {
  ratingText.dataset.content = "";
};

// CDN - Content Delivery Network

function blowConfetti() {
  confetti({
    particleCount: 400,
    angle: 60,
    spread: 75,
    origin: { x: 0 },
  });

  confetti({
    particleCount: 400,
    angle: 120,
    spread: 75,
    origin: { x: 1 },
  });
}
