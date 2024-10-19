const 다크모드버튼 = document.querySelector(".btn");
let 클릭횟수 = 0;

다크모드버튼.addEventListener("click", function () {
  클릭횟수 = 클릭횟수 + 1;
  if (클릭횟수 % 2 == 1) {
    document.getElementsByClassName("btn")[0].innerHTML = "YellowBg 😴";
    document.getElementsByClassName("bg")[0].classList.add("blackBg");
  } else {
    document.getElementsByClassName("btn")[0].innerHTML = "PinkBg 😎";
    document.getElementsByClassName("bg")[0].classList.remove("blackBg");
  }
});

//타임아웃, 타임인터벌
var count = 0;

setInterval(function () {
  count += 1;
  document.querySelector("#num").innerHTML = count;
}, 1000);

// 캐러셀-구현만 집중해서 코드 줄이는 작업 필요함.
document.querySelector(".carouselBtn1").addEventListener("click", function () {
  document.querySelector(".overflowhidden").style.transform = "translate(0%)";

  document.querySelector(".overflowhidden").style.transition = "all 0.5s";
  // 하나만 추가했는데 아래에도 애니메이션이 적용됨.. 의도한 것은 아님
});

document.querySelector(".carouselBtn2").addEventListener("click", function () {
  document.querySelector(".overflowhidden").style.transform =
    "translateX(-105%)";
});

document.querySelector(".carouselBtn3").addEventListener("click", function () {
  document.querySelector(".overflowhidden").style.transform =
    "translate(-209.5%)";
});
