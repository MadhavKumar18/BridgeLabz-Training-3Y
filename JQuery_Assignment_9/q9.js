// jqV1 is jQuery 1.12.4; jqV2 is jQuery 3.7.1. Both were isolated with noConflict(true).
jqV1(function () {
  const slides = ["Slide 1: Learn jQuery basics", "Slide 2: Build interactive pages", "Slide 3: Practice DOM traversal", "Slide 4: Handle user events", "Slide 5: Create dynamic interfaces"];
  let current = 0;

  function showSlide() { jqV1("#carouselText").text(slides[current]); }
  jqV1("#nextSlide").on("click", function () { current = (current + 1) % slides.length; showSlide(); });
  jqV1("#previousSlide").on("click", function () { current = (current - 1 + slides.length) % slides.length; showSlide(); });

  // Version 1 applies the active state to the selected widget.
  jqV1(".widget").on("click", function () {
    jqV1(".widget").removeClass("active-widget");
    jqV1(this).addClass("active-widget");
  });
});

jqV2(function () {
  // Version 2 handles the notification modal.
  jqV2("#openModal").on("click", function () { jqV2("#noticeModal").css("display", "flex").hide().fadeIn(180); });
  jqV2("#closeModal, #noticeModal").on("click", function (event) {
    if (event.target === this || event.target.id === "closeModal") jqV2("#noticeModal").fadeOut(180);
  });

  // Version 2 adds a simple hover tooltip to elements with a title attribute.
  jqV2("[title]").on("mouseenter", function () {
    jqV2("<div>", { id: "jqueryTooltip", text: jqV2(this).attr("title") })
      .css({ position: "fixed", bottom: "20px", right: "20px", background: "#172033", color: "#fff", padding: "10px 14px", borderRadius: "8px", zIndex: 1000 })
      .appendTo("body");
  }).on("mouseleave", function () { jqV2("#jqueryTooltip").remove(); });
});
