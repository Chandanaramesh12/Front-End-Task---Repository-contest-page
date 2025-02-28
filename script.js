// document.addEventListener("DOMContentLoaded", function () {
//     const sortSelect = document.getElementById("sortOptions");
//     const sortRatingSelect = document.getElementById("sortRatings");
//     const searchBar = document.getElementById("searchBar");
//     const filterCheckboxes = document.querySelectorAll(".filter");
//     const recipeGrid = document.querySelector(".recipe-grid");

//     function updateRecipes() {
//         let recipes = Array.from(document.querySelectorAll(".recipe-card"));

//         // Get Selected Filters
//         const selectedFilters = Array.from(filterCheckboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.value.toLowerCase());

//         // Get Search Query
//         const searchQuery = searchBar.value.toLowerCase();

//         // Filter Recipes
//         let visibleRecipes = recipes.filter(recipe => {
//             const category = recipe.getAttribute("data-category").toLowerCase();
//             const title = recipe.querySelector("h3").textContent.toLowerCase();

//             const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(category);
//             const matchesSearch = searchQuery === "" || title.includes(searchQuery);

//             return matchesFilter && matchesSearch;
//         });

//         // Sort Recipes
//         if (sortSelect.value === "newest") {
//             visibleRecipes.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
//         } else if (sortSelect.value === "oldest") {
//             visibleRecipes.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
//         }

//         if (sortRatingSelect.value === "highest") {
//             visibleRecipes.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
//         } else if (sortRatingSelect.value === "lowest") {
//             visibleRecipes.sort((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
//         }

//         // Update UI
//         recipeGrid.innerHTML = "";
//         visibleRecipes.forEach(recipe => recipeGrid.appendChild(recipe));
//     }

//     // Attach Event Listeners
//     sortSelect.addEventListener("change", updateRecipes);
//     sortRatingSelect.addEventListener("change", updateRecipes);
//     filterCheckboxes.forEach(checkbox => checkbox.addEventListener("change", updateRecipes));
//     searchBar.addEventListener("input", updateRecipes);

//     // Initial Update
//     updateRecipes();
// });










document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const filterCheckboxes = document.querySelectorAll(".filter");
    const sortDateSelect = document.getElementById("sortOptions");
    const sortRatingSelect = document.getElementById("sortRatings");
    const recipeGrid = document.querySelector(".recipe-grid");

    function updateRecipes() {
        let recipes = Array.from(document.querySelectorAll(".recipe-card"));
        const searchQuery = searchBar.value.toLowerCase();
        const selectedFilters = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.toLowerCase());

        let visibleRecipes = recipes.filter(recipe => {
            const category = recipe.getAttribute("data-category").toLowerCase();
            const title = recipe.querySelector("h3").textContent.toLowerCase();
            
            const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(category);
            const matchesSearch = searchQuery === "" || title.includes(searchQuery);

            return matchesFilter && matchesSearch;
        });

        // Sorting logic
        if (sortDateSelect.value === "newest") {
            visibleRecipes.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
        } else if (sortDateSelect.value === "oldest") {
            visibleRecipes.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
        }

        if (sortRatingSelect.value === "highest") {
            visibleRecipes.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
        } else if (sortRatingSelect.value === "lowest") {
            visibleRecipes.sort((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
        }

        // Clear and update UI
        recipeGrid.innerHTML = "";
        visibleRecipes.forEach(recipe => recipeGrid.appendChild(recipe));

        console.log("Filtered recipes:", visibleRecipes.length);
    }

    // Attach event listeners
    searchBar.addEventListener("input", updateRecipes);
    filterCheckboxes.forEach(checkbox => checkbox.addEventListener("change", updateRecipes));
    sortDateSelect.addEventListener("change", updateRecipes);
    sortRatingSelect.addEventListener("change", updateRecipes);

    // Initial update
    updateRecipes();
});

