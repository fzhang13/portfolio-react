import $ from 'jquery'

$(document).ready(function(){
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The  number specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 500) {
            $(this).addClass("slide");
          }
      });
    });
  })


