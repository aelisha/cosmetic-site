//top scroll btn
document.addEventListener("DOMContentLoaded", function () {
  var goToTopBtn = document.getElementById("goToTopBtn");

  function toggleGoToTopButton() {
    if (window.scrollY > window.innerHeight * 1.5) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  }

  toggleGoToTopButton();

  window.addEventListener("scroll", toggleGoToTopButton);

  goToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//home
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease",
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//collection
$(document).ready(function () {
  $(".sliderr").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//arrivals
$(document).ready(function () {
  $(".elem").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//advisor
$(document).ready(function () {
  $(".advise").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//testimonials
$(document).ready(function () {
  $(".test").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //fancybox
  $("[data-fancybox]").fancybox({
    transitionEffect: "slide",
    transitionDuration: 800,
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    arrows: true,
    infobar: true,
    thumbs: {
      autoStart: true,
      axis: "x",
    },
    fullScreen: {
      autoStart: true,
    },
  });
});

//clients
$(document).ready(function () {
  $(".c-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//footer telegram btn
function tele() {
  const emailInput = document.getElementById("email");
  const telegramIcon = emailInput.nextElementSibling;

  emailInput.addEventListener("input", function () {
    if (this.value === "") {
      telegramIcon.style.opacity = "1";
    } else {
      telegramIcon.style.opacity = "0";
    }
  });
}
tele();
