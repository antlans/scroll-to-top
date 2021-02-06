document.addEventListener('DOMContentLoaded', () => {
   function toTop(top) {
      let btn = document.querySelector("#topTop"),
         scrollTarget = document.documentElement,
         topSpace = top;

      document.getElementsByTagName("body")[0].onscroll = function () {
         if (scrollTarget.scrollTop > topSpace) {
            btn.classList.add('active');
         } else {
            btn.classList.remove('active');
         }
      };

      btn.addEventListener('click', function () {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      });
   }
   toTop(11);
});


