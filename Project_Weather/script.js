const apiKey ="b4f93509218e51a8e0c3cc7157a0edee"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const weatherIcon= document.querySelector(".weather-icon");
const searchBtn = document.querySelector(".search button");


async function checkweather(city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}` );
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
document.querySelector(".wind").innerHTML =data.wind.speed+ "km/hr";

if(data.weather[0].main == "Clouds"){
 weatherIcon.src = "clouds.png"

}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png"
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png"
}

else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png"
}

else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}

}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})




