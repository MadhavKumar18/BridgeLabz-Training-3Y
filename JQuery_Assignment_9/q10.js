$(function () {
  const $form = $("#registrationForm");

  function setError($field, errorSelector, message) {
    // Use .css() to visibly mark invalid fields and clear the style when valid.
    $field.toggleClass("invalid", Boolean(message));
    $(errorSelector).text(message);
  }

  $form.on("submit", function (event) {
    event.preventDefault();
    const $name = $("#name"), $email = $("#email"), $password = $("#password");
    const name = $name.val().trim();
    const email = $email.val().trim().toLowerCase();
    const password = $password.val();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const registeredEmails = JSON.parse(localStorage.getItem("registeredEmails") || "[]");

    const nameError = name ? "" : "Name is required.";
    let emailError = !email ? "Email is required." : (!emailPattern.test(email) ? "Enter a valid email address." : "");
    if (!emailError && registeredEmails.includes(email)) emailError = "This email is already registered.";
    const passwordError = password.length >= 8 ? "" : "Password must contain at least 8 characters.";

    setError($name, "#nameError", nameError);
    setError($email, "#emailError", emailError);
    setError($password, "#passwordError", passwordError);

    if (!nameError && !emailError && !passwordError) {
      registeredEmails.push(email);
      localStorage.setItem("registeredEmails", JSON.stringify(registeredEmails));
      $("#formSuccess").text("Registration successful! Welcome, " + name + ".");
      $form[0].reset();
    } else {
      $("#formSuccess").text("");
    }
  });

  // Remove an error border as soon as the user edits the corresponding field.
  $form.find("input").on("input", function () {
    $(this).removeClass("invalid");
  });
});
