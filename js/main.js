// при нажатии на любой из button, значение data-rad которого начинается с radio
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');

btn1.addEventListener("click", function() {
  line1.focus();
});

btn2.addEventListener("click", function() {
  line2.focus();
});

line1.addEventListener("focus", function() {
  btn1.click();
});

line2.addEventListener("focus", function() {
  btn2.click();
})

document.querySelectorAll(".clear-btn")
.forEach(function (elem) {
  elem.onclick = function (e) {
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector)
    .forEach(function (item) {
      item.value = "";
    });
  };
});
