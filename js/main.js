$(function() {
  // everything on document ready
  $('.single-item').slick();
  
  $.ajax({
    type: 'GET',
    url : '../data/news.json',
    success: function(data) {
      if(data.length > 0){
        html = '';
        data.forEach(function(element) {
          html += '<div class="py-4 border-bottom">';
          html += '<p class="text-danger mb-1">'+element.date+'</p>';
          html += '<p class="m-0">'+element.headline+'</p>';
          html += '</div>';
        });
  
        $('.news-today').html(html);
      }
      else{
        $('.news-today').html('No entries found.');
      }
	  },
    error: function() {
      $('.news-today').html('Error Loading.');
    }
  });
});