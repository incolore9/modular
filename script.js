const 다크모드버튼 = document.querySelector(".btn");
let 클릭횟수 = 0;

다크모드버튼.addEventListener("click", function () {
  클릭횟수 = 클릭횟수 + 1;
  if (클릭횟수 % 2 == 1) {
    document.getElementsByClassName("btn")[0].innerHTML = "darkMode 😴";
    document.getElementsByClassName("bg")[0].classList.add("blackBg");
  } else {
    document.getElementsByClassName("btn")[0].innerHTML = "lightMode 😎";
    document.getElementsByClassName("bg")[0].classList.remove("blackBg");
  }
});

//
var count = 0;

setInterval(function () {
  count += 1;
  document.querySelector("#num").innerHTML = count;
}, 1000);
