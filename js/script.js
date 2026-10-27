$(document).ready(function () {
  console.log("js load complete");

  $(".siren-area").on("mouseenter", function () {
    $(".siren-area").addClass("on");
    $(".preview").addClass("on");
  });
  $(".siren-area").on("mouseleave", function () {
    $(".siren-area").removeClass("on");
    $(".preview").removeClass("on");
  });

  let boat_status = 0;
  $(".boat").on("click", function () {
    if (boat_status == 0) {
      $(".boat").removeClass("shake-b");
      $(".boat").addClass("shake-a");
      $(".ripple").removeClass("wave-b");
      $(".ripple").addClass("wave-a");
      boat_status = 1;
    } else {
      $(".boat").removeClass("shake-a");
      $(".boat").addClass("shake-b");
      $(".ripple").removeClass("wave-a");
      $(".ripple").addClass("wave-b");
      boat_status = 0;
    }
  });

  $(".moon-area").on("click", function () {
    $(".char-popup").addClass("on");
    $(".dim").addClass("on");
  });
  $(".close-btn, .dim").on("click", function () {
    $(".char-popup").removeClass("on");
    $(".dim").removeClass("on");
  });
});
