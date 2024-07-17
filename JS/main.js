let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => 
    {
        searchForm.classList.toggle('active');
        shopingCart.classList.remove('active');
            loginForm.classList.remove('active');
            navbar.classList.remove('active');
    }

let shopingCart = document.querySelector('.shoping-cart');
document.querySelector('#cart-btn').onclick = () => 
    {
        shopingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => 
    {
        loginForm.classList.toggle('active');
        shopingCart.classList.remove('active');
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    }

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => 
    {
        navbar.classList.toggle('active');
        loginForm.classList.remove('active');
        shopingCart.classList.remove('active');
        searchForm.classList.remove('active');        
    }    


   window.onscroll = () => 
        {
            searchForm.classList.remove('active');
            shopingCart.classList.remove('active');
            loginForm.classList.remove('active');
            navbar.classList.remove('active');
        }    
   


    /* Initialize Swiper */
    var swiper = new Swiper(".product-slider", {
      loop: true,
      spaceBetween: 30,
      autoplay:{
      delay: 2000,
      disableOnInteraction: false,
      },
      
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

      /* Customer's Review Swiper */
      var swiper = new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay:{
        delay: 2000,
        disableOnInteraction: false,
        },
        
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

      /* Our Blogs Swiper */
      var swiper = new Swiper(".blog-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay:{
        delay: 2000,
        disableOnInteraction: false,
        },
        
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

