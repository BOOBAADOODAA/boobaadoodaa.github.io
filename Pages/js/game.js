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
  "little.jpg": "Little Owl",
  "marsh.jpg": "Marsh Harrier",
  "merlin.jpg": "Merlin",
  "montagu.jpg": "Montagu's Harrier",
  "osprey.jpg": "Osprey",
  "owl-link.jpg": "Barn Owl",
  "peregrine.jpg": "Peregrine Falcon",
  "seo.jpg": "Short Eared owl",
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
      quiz_form.replaceChildren();
      const question_template = document.getElementById("questions");
      for (const id of qset) {
        const question = question_template.content.cloneNode(true);
        const stride = id * 5 + 1;
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
          answer_buttons[idx].value = random_decoys[(idx + stride) % 3];
          answer_buttons[idx].id = img;
          answer_buttons[idx].addEventListener("click", (e) => {
            if (quiz_images[e.target.id] == e.target.value) {
              console.log("corect");
            } else {
              console.log("wrong");
            }
            e.target.closest("fieldset").disabled = true;
          });
        }
        quiz_form.appendChild(question);
      }
    });
    startQuiz.click();
  }
});
