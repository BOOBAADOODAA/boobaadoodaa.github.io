//This Is a list of all the images that will be used in the quiz.
const quiz_images = {
  "Buzzard2.jpg": "Common Buzzard",
  "barn.jpg": "Barn Owl",
  "falcon-link.jpg": "Peregrine Falcon",
  "gold.jpg": "Golden Eagle",
  "gosh.jpg": "Northern Goshawk",
  "harrier-link.jpg": "Hen Harrier",
  "hen.jpg": "Hen Harrier",
  "hobby.jpg": "Eurasian Hobby",
  "kestrel.jpg": "Common Kestrel",
  "kite.jpg": "Red Kite",
  "leo.jpg": "Long Earded Owl",
  "little.jpg": "Little Owl",
  "marsh.jpg": "Eurasian Marsh Harrier",
  "merlin.jpg": "Merlin",
  "montagu.jpg": "Montagu's Harrier",
  "osprey.jpg": "Osprey",
  "owl-link.jpg": "Short eared Owl",
  "peregrine.jpg": "Peregrine Falcon",
  "seo.jpg": "Short Eared owl",
  "sparrow.jpg": "Eurasian Sparrowhawk",
  "tawny.jpg": "Tawny Owl",
  "white.jpg": "White tailed eagle",
};
//This is a list of all the decoys that will be used in the quiz.
const decoys = [
  "Northern Harrier",
  "Avocado",
  "Black Kite",
  "Black winged kite",
  "Bald Eagle",
  "Booted Eagle",
  "Bearded Vulture",
  "Palid Harrier",
  "Gyr Falcon",
  "Lesser Kestrel",
  "African Fish Eagle",
  "African Harrier-Hawk",
  "American Kestrel",
  "Andean Condor",
  "Aplomado Falcon",
  "Barred Owl",
  "Bateleur",
  "Bermuda Petrel",
  "Black Vulture",
  "Black-chested Buzzard-Eagle",
  "Black-shouldered Kite",
  "Bonelli's Eagle",
  "Booted Eagle",
  "Broad-winged Hawk",
  "Brown Snake Eagle",
  "Burrowing Owl",
  "California Condor",
  "Changeable Hawk-Eagle",
  "Cooper's Hawk",
  "Crested Caracara",
  "Crested Eagle",
  "Crested Goshawk",
  "Crown-crested Eagle",
  "Dickinson's Kestrel",
  "Eastern Screech-Owl",
  "Egyptian Vulture",
  "Eurasian Eagle-Owl",
  "Ferruginous Hawk",
  "Gabar Goshawk",
  "Galapagos Hawk",
  "Great Gray Owl",
  "Great Horned Owl",
  "Grey-faced Buzzard",
  "Griffon Vulture",
  "Harpy Eagle",
  "Harris's Hawk",
  "Imperial Eagle",
  "Japanese Sparrowhawk",
  "Lanner Falcon",
  "Lappet-faced Vulture",
  "Laughing Falcon",
  "Lesser Spotted Eagle",
  "Martial Eagle",
  "Mississippi Kite",
  "Pale Chanting Goshawk",
  "Philippine Eagle",
  "Red-shouldered Hawk",
  "Red-tailed Hawk",
  "Rough-legged Buzzard",
  "Secretarybird",
  "Sharp-shinned Hawk",
  "Short-toed Snake Eagle",
  "Snowy Owl",
  "Spanish Imperial Eagle",
  "Steller's Sea Eagle",
  "Swainson's Hawk",
  "Tawny Eagle",
  "Verreaux's Eagle",
  "White-bellied Sea Eagle",
];
//The document gets add event listener when the page is loaded.(Rephrase it)
document.addEventListener("DOMContentLoaded", () => {
  const startQuiz = document.getElementById("start-quiz");
  if (startQuiz) {
    startQuiz.addEventListener("click", (e) => {
      document.getElementById("good").className = "hidden";
      document.getElementById("bad").className = "hidden";
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
        var correct = 0;
        const answer_buttons = question.querySelectorAll(".a");
        question.querySelector(".quiz-img").src = `img/${img}`;
        for (let idx = 0; idx < 3; idx++) {
          answer_buttons[idx].value = random_decoys[(idx + stride) % 3];
          answer_buttons[idx].id = img;
          answer_buttons[idx].addEventListener("click", (e) => {
            if (quiz_images[e.target.id] == e.target.value) {
              correct = correct + 1;
              console.log("correct");
            }
            const nextElementSibling =
              e.target.closest("fieldset").nextElementSibling;
            if (nextElementSibling) {
              nextElementSibling.scrollIntoView({
                behavior: "smooth",
              });
            } else {
              if (correct >= 4) {
                document.getElementById("score_good").innerText = correct;
                document.getElementById("good").className = "show";
                document.getElementById("good").scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                document.getElementById("score_bad").innerText = correct;
                document.getElementById("bad").className = "show";
                document.getElementById("bad").scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
            e.target.closest("fieldset").disabled = true;
          });
        }
        quiz_form.appendChild(question);
      }
    });
  }
});
