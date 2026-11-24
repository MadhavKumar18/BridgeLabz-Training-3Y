$(function () {
  let postNumber = 5;

  function createPost(title, description, featured) {
    const $post = $("<article>", { class: "post" });
    $post.append($("<h2>").text(title));
    $post.append($("<p>").text(description));
    if (featured) $post.prepend($("<strong>", { text: "FEATURED · " }));
    return $post;
  }

  $("#addPost").on("click", function () {
    postNumber++;
    $("#posts").append(createPost("New Blog Post " + postNumber, "This post was added dynamically.", false));
  });

  $("#featuredPost").on("click", function () {
    $("#posts").prepend(createPost("Featured: jQuery in Action", "A featured post is inserted at the beginning.", true));
  });

  $("#removeLast").on("click", function () {
    $("#posts .post").last().remove();
  });

  // Insert tags relative to the first post using before() and after().
  const $first = $("#posts .post").first();
  $first.before($("<p>", { class: "tag", text: "Editor's Pick" }));
  $first.after($("<span>", { class: "tag", text: "JavaScript" }));

  // Highlight posts whose content contains selected keywords.
  $("#posts .post").filter(function () {
    return /javascript|jquery|data science/i.test($(this).text());
  }).addClass("highlight");
});
