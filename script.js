var owl = $(".owl-carousel").owlCarousel({
                items: 1,
  loop: true,
                margin: 20,
                nav: false,
                autoplay: false,
                autoplayTimeout: 2000,
                autoplayHoverPause: false
            });

            // Custom Navigation Events
            $('.owl-next').click(function() {
                owl.trigger('next.owl.carousel');
            });

            $('.owl-prev').click(function() {
                owl.trigger('prev.owl.carousel');
            });
var itemCount = $(".owl-carousel .item").length;
            for (var i = 0; i < itemCount / 2; i++) {
              if(i == 0) {
                $(".custom-nav").append('<div class="nav-button active" data-index="' + i + '">' + '</div>');
              } else {
                $(".custom-nav").append('<div class="nav-button" data-index="' + i + '">' + '</div>');
              }
                
            }

            // Navigation button click event
            $(".nav-button").click(function() {
                var index = $(this).data("index");
                owl.trigger('to.owl.carousel', [index + 2]);
            });
owl.on('changed.owl.carousel', function(event) {
                var currentIndex = event.item.index; // Get the current item index

                // Remove active class from all buttons
                $(".nav-button").removeClass("active");
                // Add active class to the corresponding button
                $(".nav-button").eq(currentIndex % (itemCount / 2)).addClass("active");
            });
document.querySelector(".toggle-menu").addEventListener('click', function() {
  let x = document.querySelector(".container ul").style.display;
  if(x == "none") {
    document.querySelector(".container ul").style.display = "block";
    document.querySelector(".toggle-menu").classList.add("active");
  }
  else {
    document.querySelector(".container ul").style.display = "none";
    document.querySelector(".toggle-menu").classList.remove('active');
  }
  
});
document.addEventListener('scroll', function() {
  if(window.scrollY >= window.innerHeight - 20) {
    document.querySelector(" nav").classList.add('sticky');
  } else {
    document.querySelector("nav").classList.remove('sticky');
  }
});
new WOW().init();
let list = document.querySelectorAll(".list .item");

list.forEach(function(item) {
  item.addEventListener('click', function(e) {
    list.forEach(function(i) {
      i.classList.remove("active");
    })
    item.classList.add("active");
  })
  
});

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener('click', function() {
    if(item.getAttribute('data-category') == "all") {
      document.querySelectorAll(".services2 .images .image").forEach(item2 => {
        item2.style.display = "block";
      });
    }
    else {
     document.querySelectorAll(".services2 .images .image").forEach(item2 => {
          if(item2.getAttribute('data-category') == item.getAttribute('data-category')) {
          item2.style.display = "block";
          } else {
             item2.style.display = "none";                                    
          }
      });
    }
    })
});

document.querySelectorAll(".images .image .plus-tag").forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelector(".services2 .popup").style.display = "block";
    let srcValue = item.parentElement.querySelector("img").getAttribute('src');
    document.querySelector(".services2 .popup .image").setAttribute('src', srcValue);
  })
})

document.querySelector(".services2 .popup .close").addEventListener('click', function() {
  document.querySelector(".services2 .popup").style.display = "none";
})


let elements = document.querySelectorAll(".skills-section .skills .skill .progress-bar .net");
console.log(elements);
for(let i = 0; i < elements.length; i = i + 1) {
  let item = elements[i];
  item.style.width = item.parentElement.getAttribute('data-percent') + "%";
}
