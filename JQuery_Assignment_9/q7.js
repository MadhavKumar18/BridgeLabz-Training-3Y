$(function () {
  const $courses = $(".course");

  function filterCourses() {
    const term = $("#courseSearch").val().trim().toLowerCase();
    let count = 0;

    $courses.each(function () {
      const $course = $(this);
      const matches = $course.text().toLowerCase().includes(term);
      $course.toggle(matches);
      $course.find("h2, p").each(function () {
        // Reset previous highlighting before applying the current search match.
        $(this).html($(this).text());
        if (term && matches) {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp("(" + escaped + ")", "ig");
          $(this).html($(this).text().replace(regex, '<span class="match">$1</span>'));
        }
      });
      if (matches) count++;
    });
    $("#courseCount").text("Showing " + count + " of " + $courses.length + " courses");
  }

  // keyup provides real-time filtering as the visitor types.
  $("#courseSearch").on("keyup", filterCourses);
  $("#clearSearch").on("click", function () {
    $("#courseSearch").val("");
    filterCourses();
    $("#courseSearch").trigger("focus");
  });
});
