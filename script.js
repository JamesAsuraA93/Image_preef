$(document).ready(function () {
  $("#gallery img").click(function () {
    var galHref = $(this).attr("src");
    var galAlt = $(this).attr("alt");
    $("figure").css("display", "none");
    $("figure img").attr({ src: galHref, alt: galAlt });
    $("figcaption").html(galAlt);
    $("figure").fadeToggle(1000);
    return false;
  });
  $("figure img").hover(function () {
    $("figure img").css("scale", "1.15");
    $("figure img").css("transition-duration", "1000ms");

    return false;
  });

  $("figure img").mouseout(function () {
    $("figure img").css("scale", "1");
    $("figure img").css("transition-duration", "1000ms");
    return false;
  });
});
