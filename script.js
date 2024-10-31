document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector("input[type='text']");
  const recipeContainers = document.querySelectorAll(".contentRecipe, .content > div");

  searchInput.addEventListener("input", function() {
    const filter = searchInput.value.toUpperCase();
    recipeContainers.forEach(function(container) {
      const recipeNameElement = container.querySelector("h3").textContent.toUpperCase();
      if (recipeNameElement.includes(filter)) {
        container.style.display = "";
      } else {
        container.style.display = "none";
      }
    });
  });
});
