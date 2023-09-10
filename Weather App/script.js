let inputbox=document.querySelector(".input-box");              //It is necessary to specify . and # accordingly before classname and id name in query selector.
const btn=document.getElementById("btn");
let img=document.querySelector(".weather-img");
let temperature=document.querySelector(".temperature");
let desc=document.querySelector(".description");
let humidity=document.getElementById("humidity");
let speed=document.getElementById("speed");


async function checkweather(cityname)
{
    let url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=c2f59580f511e8bc4fb0bbc14902e761";       //Use Postman to handle this api requests.
    let weatherdata=await fetch(url).then((response) => response.json());                  //To store all the json format response in weatherdata.
    console.log(weatherdata);

    if(weatherdata.cod==="404")                                            //cod will give the status of your request.
    {
        img.src="404.png";
        temperature.innerHTML="Location not found";
        desc.innerHTML="";
        humidity.innerHTML="Null";
        speed.innerHTML="Null";
    }

    temperature.innerHTML=`${Math.round(weatherdata.main.temp-273.15)}°C`;
    desc.innerHTML=`${weatherdata.weather[0].description}`;
    humidity.innerHTML=`${weatherdata.main.humidity}%`;
    speed.innerHTML=`${weatherdata.wind.speed}Km/h`;

    switch(weatherdata.weather[0].main)
    {
        case "Clouds":                      //Take case accordingly same, as present in json.
            img.src="cloud.png";
            break;
        case "Clear":
            img.src="clear.png";
            break;
        case "Rain":
            img.src="rain.png";
            break;
        case "Mist":
            img.src="mist.png";
            break;
        case "Snow":
            img.src="snow.png";
            break;
    }
}

btn.addEventListener("click", ()=>{
    checkweather(inputbox.value);
})