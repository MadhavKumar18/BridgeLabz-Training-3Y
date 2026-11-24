$(function () {
  const $banners = $(".banner");
  let current = 0;
  $banners.hide().eq(0).show().addClass("active");

  $("#hideBanners").on("click", function () { $banners.hide(); });
  $("#showBanners").on("click", function () { $banners.show(); });
  $("#slideUp").on("click", function () { $banners.slideUp(); });
  $("#slideDown").on("click", function () { $banners.slideDown(); });
  $("#fadeOut").on("click", function () { $banners.fadeOut(); });
  $("#fadeIn").on("click", function () { $banners.fadeIn(); });

  // Rotate the active banner every five seconds using fade effects.
  setInterval(function () {
    $banners.eq(current).removeClass("active").fadeOut(350);
    current = (current + 1) % $banners.length;
    $banners.eq(current).fadeIn(350).addClass("active");
    $("#rotationStatus").text("Showing offer " + (current + 1) + " of " + $banners.length);
  }, 5000);
});
