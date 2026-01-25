//This is the javascript for every page that is needed for the theme button.
// when page loads
document.addEventListener("DOMContentLoaded", () => {
  //This variable is an Id given to the theme  button.
  const themeBtn = document.getElementById("theme-toggle");
  //If theme button is still therere.
  if (themeBtn) {
    if (localStorage.getItem("savedtheme") === "darktheme") {
      //Adding the dark mode class on the body.
      document.body.classList.add("dark-mode");
    }
    //listening for the button press
    themeBtn.addEventListener("click", (e) => {
      //It is removing the variable fromt he list.
      localStorage.removeItem("savedtheme");
      //Its turning on and off the dark mode class on the body.
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        //Recording to local file stoarage a variable for theme tag.
        localStorage.setItem("savedtheme", "darktheme");
      }
    });
  }
});
