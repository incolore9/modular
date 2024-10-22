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
  document.querySelector(".carouselContainer").style.transform =
    "translate(0%)";
  document.querySelector(".carouselContainer").style.transition = "all 0.5s";
});

document.querySelector(".carouselBtn2").addEventListener("click", function () {
  document.querySelector(".carouselContainer").style.transform =
    "translateX(-33.87%)";
  document.querySelector(".carouselContainer").style.transition = "all 0.5s";
});

document.querySelector(".carouselBtn3").addEventListener("click", function () {
  document.querySelector(".carouselContainer").style.transform =
    "translate(-67.74%)";
  document.querySelector(".carouselContainer").style.transition = "all 0.5s";
});

// '다음'버튼 구현
var now = 1;

document
  .querySelector(".carouselBtnNext")
  .addEventListener("click", function () {
    if (now == 1) {
      document.querySelector(".carouselContainer").style.transform =
        "translateX(-33.87%)";
      document.querySelector(".carouselContainer").style.transition =
        "all 0.5s";
      now += 1;
    } else if (now == 2) {
      document.querySelector(".carouselContainer").style.transform =
        "translate(-67.74%)";
      document.querySelector(".carouselContainer").style.transition =
        "all 0.5s";
      now += 1;
    } else if (now == 3) {
      document.querySelector(".carouselContainer").style.transform =
        "translate(0%)";
      document.querySelector(".carouselContainer").style.transition =
        "all 0.5s";
      now -= 2;
    }
  });

// 위 내용 응용: 자동 전환 캐러셀
var time = 0;

setInterval(function () {
  time += 1;
  if (time == 1) {
    document.querySelector(".autoCarouselContainer").style.transform =
      "translate(-25%)";
    document.querySelector(".autoCarouselContainer").style.transition =
      "all 1s";
  }
  if (time == 2) {
    document.querySelector(".autoCarouselContainer").style.transform =
      "translate(-50%)";
  }
  if (time == 3) {
    document.querySelector(".autoCarouselContainer").style.transform =
      "translate(-75%)";
    time -= 3;
  }
}, 1000);
// 처음으로 돌아갈 때 되감는 듯한 애니메이션은 어떻게 처리할 지 고민..

// 토글 메뉴 실습
document
  .getElementsByClassName("toggle1")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("toggleArea1")[0]
      .classList.toggle("open");
  });

  document
  .getElementsByClassName("toggle2")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("toggleArea2")[0]
      .classList.toggle("open");
  });

  document
  .getElementsByClassName("toggle3")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("toggleArea3")[0]
      .classList.toggle("open");
  });


