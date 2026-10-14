console.log("script loaded");

let button_clicked = false;
//let이라는 변수선언을 통해 버튼클릭이라는 이름의 그릇에 false라는 값을 감듬

$(".button-1").on("click", function () {
  if (button_clicked == false) {
    $(".box-1").addClass("clicked");
    button_clicked = true;
  } else {
    $(".box-1").removeClass("clicked");
    button_clicked = false;
  }
});

let button_state = 0;
$(".button-2").on("click", function () {
  if (button_state == 0) {
    $(".box-2").css("width", "500px");
    button_state = 1;
  } else if (button_state == 1) {
    $(".box-2").css("height", "500px");
    button_state = 2;
  } else if (button_state == 2) {
    $(".box-2").css("width", "200px");
    $(".box-2").css("height", "200px");
    button_state = 0;
  }
});

//$(".button-2").on("click", function () {
//$(".box-2").css("width", "500px");
//});

$(".cat-img").on("mouseenter", function () {
  $(".cat-img").attr("src", "img/cat_mouseopen.png");
});

$(".cat-img").on("mouseleave", function () {
  $(".cat-img").attr("src", "img/cat_mouseclose.png");
});
