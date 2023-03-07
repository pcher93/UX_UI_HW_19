$("nav a").on({
    hover: function(){
      $(this).css("background-color", "yellow");
    } 
    
  });

  $("nav a").ready(function() {
    $('leftbutton').click(function() {
      window.location.href = "https://drive.google.com/file/d/1ZD_du3jUAtHHFFzkJ_Xif80cz67BFg6n/view";
    });
  });

  $(document).ready(function() {
    $('nav a').click(function() {
      $('nav a').removeClass('home'); // Remove the active class from all links
      $(this).addClass('home'); // Add the active class to the clicked link
    });
  });
  