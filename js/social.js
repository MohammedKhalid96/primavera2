$(document).ready(function() {
  $(".social-open-menu").click(function() {
    $("#social-share.popsOpen.minDetOpen .social-itens").toggleClass("hidden");
    $("#social-share.popsOpen.minDetOpen .social-itens").toggleClass("open");

    $(".social-itens").toggleClass("open");
    $(".social-itens").toggleClass("hidden");
    $("#social-share").toggleClass("popsOpen");
    $("#social-share").removeClass("minDetOpen");
  });

  $(".expandDetails").click(function() {
    $("#social-share").addClass("minDetOpen");
    $(".social-itens").removeClass("open");
    $(".social-itens").addClass("hidden");
  });

  $("#social-share .minidetails button").click(function() {
    $("#social-share").removeClass("minDetOpen");
    $(".social-itens").toggleClass("open");
    $(".social-itens").toggleClass("hidden");
  });
});
