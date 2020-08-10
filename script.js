$(document).ready(function() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/country?format=json&name=usa",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "78e0cd5f3fmsh2af5609de3ce269p15d043jsne0237af7c234"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    
    // Get a reference to the container
    $("#totalNumCases").text(response[0].confirmed);

    // Set the content of that container to the target value from the response

  });
});
