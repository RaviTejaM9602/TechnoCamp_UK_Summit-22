const navigation = document.querySelector('.mobile-nav');
const expandMenu = () => {
  navigation.classList.remove('close-scroll-bar');
  navigation.classList.add('open-scroll-bar');
};

const closeMenu = () => {
  navigation.classList.remove('open-scroll-bar');
  navigation.classList.add('close-scroll-bar');
};

document.querySelector('.open').addEventListener('click', expandMenu);

const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));

const header = document.querySelector('.page-header');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('white-bg')) {
      header.classList.add('white-bg');
    }
  } else {
    header.classList.remove('white-bg');
  }
});
