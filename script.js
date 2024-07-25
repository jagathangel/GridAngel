// https://coolors.co/363636-242f40-cca43b-e5e5e5-ffffff

$(".menu-btn").click(function () {
  let header = "header header header header header";
  let footer = "footer footer footer footer footer";
  let foot_header = "sidebar header header header header";
  let foot_footer = "sidebar footer footer footer footer";
  if ($(".sidebar").css("display") === "flex") {
    $(".sidebar").css("display", "none");
    $(".layout").css("grid-template-areas", `'${header}' '${footer}'`);
    $(".contents h2").css("display", "block");
  } else {
    $(".sidebar").css("display", "flex");
    $(".layout").css(
      "grid-template-areas",
      `'${foot_header}' '${foot_footer}'`
    );
    if ($(window).width() < "768px") {
      if ($("form").css("display") == "none") {
        $(".contents h2").css("display", "block");
      } else {
        $(".contents h2").css("display", "none");
      }
    }
    if ($(window).width() > "769px") {
      $(".contents h2").css("order", "1");
    }
  }
});

// Sidebar Flex

{
  if ($(".sidebar").css("display") === "none") {
    $(".sidebar").css("display", "flex");
  }
}
