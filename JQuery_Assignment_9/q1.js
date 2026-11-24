$(function () {
  // Choose a greeting based on the visitor's local hour.
  const hour = new Date().getHours();
  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  $("#greeting").text(greeting + "! Welcome to our website.");

  // Replace the time-based greeting with a motivational quote.
  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Believe in yourself — every small step moves you forward.");
  });

  // Toggle the extra welcome message without removing it from the page.
  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").slideToggle();
  });

  $("#greeting").on("click", function () {
    alert("Thanks for visiting our website!");
  });
});
