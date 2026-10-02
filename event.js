const size_list = document.querySelectorAll('.size');
const topping_list = document.querySelectorAll('.topping');

size_list.forEach(size => {
  size.addEventListener('click', function () {
    size_list.forEach(s => s.classList.remove('dang-chon'));
    this.classList.add('dang-chon');
  })
})

topping_list.forEach(topping => {
  topping.addEventListener('click', function () {
    this.classList.toggle('dang-chon');
  })
})
