
let btn = document.querySelector('.btn-to-top'),
    scrollTarget = document.documentElement;


document.getElementsByTagName("body")[0].onscroll = function () {
   if (scrollTarget.scrollTop > topSpace) {
      btn.classList.add('active');
   } else {
      btn.classList.remove('active');
   }
};

btn.addEventListener('click', function () {
   window.scrollTo(0, 0);
});

let topSpace = 100;

