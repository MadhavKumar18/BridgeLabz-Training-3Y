$(function () {
  // Use children() to select only direct reports belonging to the clicked manager.
  $(".manager > strong").on("click", function () {
    $(this).siblings(".reports").children(".employee").toggleClass("highlight");
  });

  // .next() retrieves the contact block immediately after the employee name.
  $(".employee").hover(
    function () { $(this).children(".contact").stop(true, true).slideDown(100); },
    function () { $(this).children(".contact").stop(true, true).slideUp(100); }
  );

  $(".department-title").on("click", function () {
    $(this).parent(".department").children(".team").find(".member").toggleClass("highlight");
  });

  $("#randomEmployee").on("click", function () {
    const $employees = $(".employee");
    const index = Math.floor(Math.random() * $employees.length);
    const $chosen = $employees.eq(index);
    $employees.removeClass("selected");
    // parent() locates the reports container; siblings() highlights peer employees.
    $chosen.addClass("selected").siblings(".employee").addClass("highlight");
    $chosen.siblings(".employee").not($chosen).addClass("highlight");
  });

  $("#toggleTeam").on("click", function () {
    // parent() and find() demonstrate traversal from each department to its team members.
    $(".department").each(function () {
      $(this).parent().find(".team").slideToggle();
    });
  });
});
