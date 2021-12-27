$(document).ready(() => {
  //what we do toggle
  $(".show-icon").on("click", () => {
    $(".hide-content").show();
    $(".show-icon").hide();
  });

  $(".hide-content").on("click", () => {
    $(".show-icon").show();
    $(".hide-content").hide();
  });

  $(".show-icon1").on("click", () => {
    $(".hide-content1").show();
    $(".show-icon1").hide();
  });

  $(".hide-content1").on("click", () => {
    $(".show-icon1").show();
    $(".hide-content1").hide();
  });

  $(".show-icon2").on("click", () => {
    $(".hide-content2").show();
    $(".show-icon2").hide();
  });

  $(".hide-content2").on("click", () => {
    $(".show-icon2").show();
    $(".hide-content2").hide();
  });

});
