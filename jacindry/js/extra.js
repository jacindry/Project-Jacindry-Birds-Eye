new BeerSlider(document.getElementById('compare'));
new BeerSlider(document.getElementById('compare-2'));
new BeerSlider(document.getElementById('compare-3'));
new BeerSlider(document.getElementById('compare-4'));
new BeerSlider(document.getElementById('compare-5'));
new BeerSlider(document.getElementById('compare-6'));


  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("backToTopBtn").style.display = "block";
      } else {
          document.getElementById("backToTopBtn").style.display = "none";
      }
  }

  // Scroll to the top when the button is clicked
  document.getElementById("backToTopBtn").onclick = function() {
      scrollToTop();
  };

  function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
