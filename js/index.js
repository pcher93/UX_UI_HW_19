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