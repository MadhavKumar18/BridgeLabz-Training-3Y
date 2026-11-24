$(function () {
  $(".faq-question").on("click", function () {
    $(this).next(".answer").stop(true, true).slideToggle();
  });

  // Double-clicking any question collapses every answer.
  $(".faq-question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp();
  });

  // Focus and blur styles are applied to the containing FAQ item.
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").css("background-color", "#eff6ff");
  }).on("blur", function () {
    $(this).closest(".faq-item").css("background-color", "");
  });
});
