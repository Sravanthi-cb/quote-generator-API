
$(document).ready(function(){
  var quote;	
  var author;
  var randomPhoto = "";
  var photoName = "";
  //Function for quote api
  function getNewQuote(){  
	$.ajax({
	  url: 'https://quotes.stormconsultancy.co.uk/random.json',
      success: function(response) {
	     quote =  response.quote;
		 author = response.author;
		 $('#quote').text(quote);
		 if (author){
		   $('#author').text('by ' + author);	 
		 } else {
		    $('#author').text('- unknown');	 
		 }
	  }	  	  
	});
  
  }
 //Function for image api
 function changeImage() {   
  $.ajax({
  url: "https://api.unsplash.com/photos/random?client_id=b8807aacf1d71d738e2fbd0c753f352e1a6d190202ef84f584ce648b34c70dcf",
  cache: false,
  success: function(result){
    randomPhoto = result.urls.regular;
    photoName = result.user.name; 
    $('body').css('background-image', 'url('+ randomPhoto +')');  
  } 
});
};
  
  // Display the quote on page load
   getNewQuote();
  // Dsiplay the background-image on poage load 
   changeImage();
  $('.get-quote').on('click', function(event) {
	event.preventDefault();
	getNewQuote();
	changeImage();
  });
 //Shares the quote on tweeter
  $('.share-quote').on('click', function(event){
	event.preventDefault();
	window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " - " + author));	  
  });
   
});

