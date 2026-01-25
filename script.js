const quiz_images = {
  "Buzzard2.jpg": "Common Buzzard",
  "barn.jpg": "Barn Owl",
  "falcon-link.jpg": "Peregrine Falcon",
  "gold.jpg": "Golden Eagle",
  "gosh.jpg": "Goshawk",
  "harrier-link.jpg": "Hen Harrier",
  "hen.jpg": "Hen Harrier",
  "hobby.jpg": "Hobby",
  "kestrel.jpg": "Kestrel",
  "kite.jpg": "Red Kite",
  "leo.jpg": "Long Earded Owl",
  "little.jpg": "little.jpg",
  "marsh.jpg": "marsh.jpg",
  "merlin.jpg": "merlin.jpg",
  "montagu.jpg": "montagu.jpg",
  "osprey.jpg": "osprey.jpg",
  "owl-link.jpg": "owl-link.jpg",
  "peregrine.jpg": "peregrine.jpg",
  "seo.jpg": "seo.jpg",
  "sparrow.jpg": "sparrow.jpg",
  "tawny.jpg": "tawny.jpg",
  "white.jpg": "white.jpg",
};
const decoys = ["Morhen", "avocado"];
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  const startQuiz = document.getElementById("start-quiz");

  if (themeBtn) {
    if (localStorage.getItem("savedtheme") === "darktheme") {
      document.body.classList.add("dark-mode");
    }
    themeBtn.addEventListener("click", (e) => {
      localStorage.removeItem("savedtheme");
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("savedtheme", "darktheme");
      }
    });
  }
  if (startQuiz) {
    startQuiz.addEventListener("click", (e) => {
      const qset = new Set();
      while (qset.size < 5) {
        var idx = Math.floor(Math.random() * Object.keys(quiz_images).length);
        qset.add(idx);
      }
      const qsetcopy = Array.from(qset);
      document.getElementById("quiz-img").src =
        Object.keys(quiz_images)[qsetcopy[0]];
    });
    startQuiz.click();
    q;
  }
});
