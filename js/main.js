$(document).ready(function() {
  $(".home-slider").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".services-slider").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });

  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
  }, {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
  }]
  });

  var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 1,
    speed: 2500,
    cssEase: "cubic-bezier(.84, 0, .08, .99)",
    asNavFor: ".text-slider",
    centerMode: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  };

  var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2500,
    cssEase: "cubic-bezier(.84, 0, .08, .99)",
    asNavFor: ".image-slider",
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  };

  $(".image-slider").slick(sickPrimary);
  $(".text-slider").slick(sickSecondary);

  $(".dropdown").hover(
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(!0, !0)
        .delay(200)
        .fadeIn(500);
    },
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(!0, !0)
        .delay(200)
        .fadeOut(500);
    }
  );

  $(".nav-search").click(function() {
    $(".fixed-search").toggleClass("none");
  });

  $(".fixed-search").click(function(e) {
    if ($(e.target).closest(".fixed-search form").length === 0) {
      $(".fixed-search").addClass("none");
    }
  });

  let material = new Blotter.LiquidDistortMaterial();

  if ($(".b-title-p").length > 0) {
    const elem = document.querySelector(".b-title");
    const textEl = elem.querySelector(".b-title-p");
    const text = new Blotter.Text(textEl.innerHTML, {
      family: "'audrey', serif",
      size: 72,
      fill: "#d1b464"
    });

    elem.removeChild(textEl);

    material.uniforms.uSpeed.value = 0.1;
    material.uniforms.uVolatility.value = 0.08;
    material.uniforms.uSeed.value = 0.1;

    let blotter = new Blotter(material, {
      texts: text
    });

    let scope = blotter.forText(text);
    scope.appendTo(elem);
  }

  //---------------------------------------------

  if ($(".b-title-p2").length > 0) {
    const elem2 = document.querySelector(".b-title2");
    const textEl2 = elem2.querySelector(".b-title-p2");
    const text2 = new Blotter.Text(textEl2.innerHTML, {
      family: "'audrey', serif",
      size: 72,
      fill: "#d1b464"
    });

    elem2.removeChild(textEl2);
    let material2 = new Blotter.LiquidDistortMaterial();

    material2.uniforms.uSpeed.value = 0.1;
    material2.uniforms.uVolatility.value = 0.08;
    material2.uniforms.uSeed.value = 0.1;

    let blotter2 = new Blotter(material, {
      texts: text2
    });

    let scope2 = blotter2.forText(text2);
    scope2.appendTo(elem2);
  }

  //-----------------------------------------------

  if ($(".b-title-p3").length > 0) {
    const elem3 = document.querySelector(".b-title3");
    const textEl3 = elem3.querySelector(".b-title-p3");
    const text3 = new Blotter.Text(textEl3.innerHTML, {
      family: "'audrey', serif",
      size: 72,
      fill: "#d1b464"
    });

    elem3.removeChild(textEl3);
    let material3 = new Blotter.LiquidDistortMaterial();

    material3.uniforms.uSpeed.value = 0.1;
    material3.uniforms.uVolatility.value = 0.08;
    material3.uniforms.uSeed.value = 0.1;

    let blotter3 = new Blotter(material, {
      texts: text3
    });

    let scope3 = blotter3.forText(text3);
    scope3.appendTo(elem3);
  }
});
