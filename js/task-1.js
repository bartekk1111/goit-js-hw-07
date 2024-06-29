const categoryItems = document.querySelectorAll("ul#categories .item");

console.log("Number of categories: ", categoryItems.length);

categoryItems.forEach((categoryItem) => {
    const heading = categoryItem.querySelector("h2");
    console.log("Category: ", heading.textContent);
    const items = categoryItem.querySelectorAll("li");
    console.log("Elements: ", items.length);
});
