$(document).on("click", ".accordion", function () {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  var img = $(this).find("img");
  if (panel.style.display === "block") {
    img.attr("src", "./assets/open.svg");
    panel.style.display = "none";
  } else {
    img.attr("src", "./assets/close.svg");
    panel.style.display = "block";
  }
});

var number = 0;
var title = "Title";
var description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

$(document).on("click", "#add-new-acc-item", function () {
  $(".accordion-wrapper").append(
    '<div class="accordion-item"><div class="accordion"><div class="item-number">' +
      number +
      '</div><button class="accordion-title">' +
      title +
      '</button><div class="switch-button"><img src="./assets/open.svg" /></div></div><div class="content">' +
      description +
      "</div></div>"
  );
  $(".accordion-item").each(function (index) {
    if (index < 10) {
      $(this)
        .find(".item-number")
        .text("0" + ++index);
    } else {
      $(this)
        .find(".item-number")
        .text(++index);
    }
  });
});
