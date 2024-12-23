const allitems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allitems.length}`);
allitems.forEach(item => {
  const category = item.querySelector('h2');
  const itemscount = item.querySelectorAll('li');

  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${itemscount.length}`);
});
