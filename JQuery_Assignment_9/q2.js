$(function () {
  // Highlight the clicked product; data-discount is styled through an attribute selector in CSS.
  $(".product").on("click", function (event) {
    if ($(event.target).closest(".favorite").length) return;
    $(this).toggleClass("highlight");
    if ($(this).data("stock") === "out") alert("Sorry, this product is currently out of stock.");
  });

  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(120); },
    function () { $(this).find(".details").stop(true, true).slideUp(120); }
  );

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    const selected = $(this).toggleClass("selected").hasClass("selected");
    $(this).text(selected ? "★" : "☆").attr("aria-pressed", selected);
  });
});
