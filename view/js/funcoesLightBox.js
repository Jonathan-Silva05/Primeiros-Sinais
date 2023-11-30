


  /* =============== ANIMAÇÃO IMG TELA TODA =============== */   
    function openModalLightBox() {
      document.getElementById("myModal-Lightbox").style.display = "block";
    }

    function closeModalLightBox() {
      document.getElementById("myModal-Lightbox").style.display = "none";
    }

    var slideIndexLightBox = 1;
    showSlidesLightBox(slideIndexLightBox);

    function plusSlidesLightBox(n) {
      showSlidesLightBox(slideIndexLightBox += n);
    }

    function currentSlideLightBox(n) {
      showSlidesLightBox(slideIndexLightBox = n);
    }

    function showSlidesLightBox(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides-Lightbox");
      if (n > slides.length) {slideIndexLightBox = 1}
      if (n < 1) {slideIndexLightBox = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndexLightBox-1].style.display = "block";
    }  
  /* ============= FIM ANIMAÇÃO IMG TELA TODA ============= */