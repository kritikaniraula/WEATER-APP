let weather={
    "apiKey":"39e7f73d4b713264be53252bae0364c1",
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=39e7f73d4b713264be53252bae0364c1") 
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather:function(data) {
        const {name}= data;
        const {icon,description} = data.weather[0];
        const {temp, humidity} = data.main;
        const{speed} = data.wind;
        
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png"; 
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"  ;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600%C3%97900/?" + name + "')"  
    },
search: function(){
 this.fetchWeather(document.querySelector(".search-bar").value);
}   

};

document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
    });

document.querySelector(".search-bar").addEventListener("keyup", function (event){
if (event.key == "Enter"){
    weather.search();
}
})





