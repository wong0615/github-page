(function() {
  // everything on document ready
  $.ajax({
    type: 'GET',
    url: fileLocation,
    dataType: 'xml', // or json
    success: function(data) {
      // upon a successful call, what to do with the data retrieved
    },
    error: function(error, text, thrown) {
      // console log the error to help you
    }
  })
});