$(function () {
  function attachTopicEvents($scope) {
    // Delegated .on() keeps dynamically created topic buttons interactive.
    $scope.find(".subscribe").on("click", function () {
      const $button = $(this);
      const active = $button.data("active") === true;
      $button.data("active", !active).text(active ? "Subscribe" : "Unsubscribe");
      $("#subscriptionMessage").text(
        active ? "Notifications disabled for this topic." : "Successfully subscribed. Notifications enabled!"
      ).stop(true, true).fadeIn();
      refreshRemoveOptions();
    });
  }

  function refreshRemoveOptions() {
    const $select = $("#removeTopic").empty().append('<option value="">Choose topic to remove</option>');
    $("#topics .topic").each(function (index) {
      $select.append($("<option>").val(index).text($(this).find("h2").text()));
    });
  }

  attachTopicEvents($("#topics"));
  refreshRemoveOptions();

  $("#addTopic").on("click", function () {
    const name = $("#newTopic").val().trim();
    if (!name) { alert("Enter a topic name first."); return; }
    const $topic = $("<article>", { class: "card topic" })
      .append($("<h2>").text(name))
      .append($("<button>", { class: "subscribe", text: "Subscribe" }));
    $("#topics").append($topic);
    attachTopicEvents($topic);
    $("#newTopic").val("");
    refreshRemoveOptions();
    $("#subscriptionMessage").text("New topic added: " + name).fadeIn();
  });

  $("#removeSelected").on("click", function () {
    const index = $("#removeTopic").val();
    if (index === "") return;
    const $topic = $("#topics .topic").eq(Number(index));
    // .off() detaches the event handler before the selected topic is removed.
    $topic.find(".subscribe").off("click").end().remove();
    refreshRemoveOptions();
    $("#subscriptionMessage").text("Selected subscription topic removed.").fadeIn();
  });
});
