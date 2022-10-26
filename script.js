var swiper = new Swiper(".slide-depoimentos", {
  slidesPerView: 3,
  spaceBetween: 32,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3800,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loopedSlides: 8, // according to the codepen
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".s-depoimentos .container .top .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    525: {
      slidesPerView: 1.35,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 1.6,
      spaceBetween: 15,
    },
    670: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});

AOS.init({
duration: 1000,
startEvent: 'DOMContentLoaded',
once: true
});

const btnDropdown = document.querySelectorAll('.js-btn-dropdown');
const dropdowns = document.querySelectorAll('.js-dropdown');

const headerElement = document.getElementById('js-header');

const btnMenu = document.getElementById("js-btn-menu-mobile");

const overlayMenu = document.querySelector('.js-overlay');


btnDropdown.forEach((btn, index) => {
function handleDropdown(e) {
  e.preventDefault();

  const dropdownToBeClosed = Array  
    .from(dropdowns)
    .filter((drop) => drop !== dropdowns[index])
    .find((dropdown) => dropdown.classList.contains('active'))
  if(dropdownToBeClosed) {
    dropdownToBeClosed.classList.remove('active');
  }

  dropdowns[index].classList.toggle('active');
}
btn.addEventListener('click', handleDropdown);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });
})

})

function fixedMenu() {
if(window.pageYOffset > 80) {
  headerElement.classList.add('fixed-menu');
} else {
  headerElement.classList.remove('fixed-menu')
}
}

document.addEventListener('scroll', fixedMenu);

function handleMenu() {
document.documentElement.classList.toggle('menu-opened');
}

btnMenu.addEventListener('click', handleMenu);
overlayMenu.addEventListener('click', handleMenu);
