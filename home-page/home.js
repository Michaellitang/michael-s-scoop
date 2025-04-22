document.addEventListener('DOMContentLoaded', function () {
    const productTrack = document.getElementById("productTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentSlide = 0;
    const productCards = document.querySelectorAll(".product-card");
    const productsPerSlide = 4; // 4 products per slide
    const totalSlides = Math.ceil(productCards.length / productsPerSlide); // Number of slides needed
  
    // Set the product track width dynamically based on the number of slides
    productTrack.style.width = `${totalSlides * 100}%`;
  
    function updateSlider() {
        const shift = (100 / totalSlides) * currentSlide;
        productTrack.style.transform = `translateX(-${shift}%)`;
      }
      
  
    // Previous button handler
    prevBtn.addEventListener("click", function () {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });
  
    // Next button handler
    nextBtn.addEventListener("click", function () {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
      }
    });
  });
  