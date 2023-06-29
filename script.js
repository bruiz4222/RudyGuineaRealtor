function openTab( evt, tabName ) {
    var i, tab_content, tab;
    tab_content = document.getElementsByClassName( "tab_content" );
    for ( i=0; i<tab_content.length; i++ ) {
        tab_content[i].style.display = "none";
    }

    tab = document.getElementsByClassName( "tab" );
    for ( i=0; i<tab.length; i++ ) {
        tab[i].className = tab[i].className.replace( " active", "" );
    }

    document.getElementById( tabName ).style.display = "block";
    evt.currentTarget.className += " active";
}

function openModal() {
    var modal = document.getElementById( "the_modal" );
    var btn = document.getElementById( "open_button" );
    var span = document.getElementsByClassName( "close" )[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }   

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function openModal2() {
  var modal = document.getElementById( "the_modal2" );
  var btn = document.getElementById( "open_button2" );
  var span = document.getElementsByClassName( "close2" )[0];

  btn.onclick = function() {
      modal.style.display = "block";  
  }

  span.onclick = function() {
      modal.style.display = "none";
  }   

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function openModal3() {
  var modal = document.getElementById( "the_modal3" );
  var btn = document.getElementById( "open_button3" );
  var span = document.getElementsByClassName( "close3" )[0];

  btn.onclick = function() {
      modal.style.display = "block";  
  }

  span.onclick = function() {
      modal.style.display = "none";
  }   

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
