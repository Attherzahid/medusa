jQuery(document).ready(function () {
  if (window.innerWidth <= 991) {
    jQuery(".header").addClass("active");
  } else {
    jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();

      if (scroll >= 100) {
        jQuery(".header").addClass("active");
      } else {
        jQuery(".header").removeClass("active");
      }
    });
  }

  $(".tab-nav li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".tab-nav li").removeClass("active");
    $(".tab").removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });

  $(".accordion-header").on("click", function () {
    var $item = $(this).closest(".accordion-item");
    var isActive = $item.hasClass("active");

    // Close all
    $(".accordion-item").removeClass("active");

    // Open clicked one if not already active
    if (!isActive) {
      $item.addClass("active");
    }
  });

  $(".team-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
  });
});
