
const categoriesList = document.getElementById('categories');


const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryElements = category.querySelectorAll('ul > li');

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
