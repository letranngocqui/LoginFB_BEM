const sizeList = document.querySelectorAll('.size');
const toppingList = document.querySelectorAll('.topping');

sizeList.forEach(size => {
  size.addEventListener('click', function () {
    sizeList.forEach(s => s.classList.remove('dang-chon'));
    this.classList.add('dang-chon');
  })
})

toppingList.forEach(topping => {
  topping.addEventListener('click', function () {
    this.classList.toggle('dang-chon');
  })
})
