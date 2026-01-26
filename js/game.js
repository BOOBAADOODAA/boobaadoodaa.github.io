//This Is a list of all the images that will be used in the quiz.
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
//This is a list of all the decoys that will be used in the quiz.
const decoys = ["Morhen", "avocado"];
//The document gets add event listener when the page is loaded.(Rephrase it)
document.addEventListener("DOMContentLoaded", () => {
  const startQuiz = document.getElementById("start-quiz");
  if (startQuiz) {
    startQuiz.addEventListener("click", (e) => {
      const qset = new Set();
      const keys = Object.keys(quiz_images);
      while (qset.size < 5) {
        var idx = Math.floor(Math.random() * keys.length);
        qset.add(idx);
      }
      const quiz_form = document.getElementById("quiz");
      const question_template = document.getElementById("questions");
      for (const id of qset) {
        const question = question_template.content.cloneNode(true);
        const img = keys[id];
        const dset = new Set();
        while (dset.size < 2) {
          var idx = Math.floor(Math.random() * decoys.length);
          dset.add(decoys[idx]);
        }
        dset.add(quiz_images[img]);
        const random_decoys = [...dset];
        const answer_buttons = question.querySelectorAll(".a");
        question.querySelector(".quiz-img").src = `img/${img}`;
        for (let idx = 0; idx < 3; idx++) {
          answer_buttons[idx].value = random_decoys[idx];
        }
        quiz_form.appendChild(question);
      }
    });
    startQuiz.click();
  }
});
