var API_URL = "https://api.openweathermap.org/data/2.5/weather?appid=0b334e7b835bb4536bafa78fb731cb82"

var getWeather = function() {
	var cityName = $("input").val();
	API_URL += "&q=" + cityName + "&units=metric";
  $.getJSON(API_URL, function(data){
    //format the response
    var html = ""
    html += "<h2>Weather in " + data.name+"</h2>"
    html += "Temperature: " + data.main.temp+"c°<br>"
    html += "Pressure: " + data.main.pressure+"bar<br>"
    html += "Humidity: " + data.main.humidity+"%<br>"
    html += "Max Temp: " + data.main.temp_max+"c°<br>"
    html += "<p>"+data.weather[0].description+"<img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'/>"+"</p>"
    $("#weather_conditions").html(html);
    
  })
}