console.log("index script loaded");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(data) {
  console.log("mine data er: ", data);

  const categoryContainer = document.getElementById("categoryContainer");

  const markup = data
    .map(
      (element) => `
                <a href="produktliste.html?category=${element.category}" class="boxes">
                    ${element.category.toUpperCase()}
                </a>
            `
    )
    .join("");

  console.log("min markup er ", markup);

  categoryContainer.innerHTML = markup;
}
