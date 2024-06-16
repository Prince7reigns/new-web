
const keyId="12db9062f8d7093e6b6f9dcecfcdf2c8"
const mainURL =`https://api.openweathermap.org/data/2.5/weather?q=pune&appid=${keyId}&units=metric`;

const button = document.querySelector(".button")
const city = document.querySelector("#search");
const h1 = document.querySelector(".temp")
const citySet=document.querySelector(".city")
const hum=document.querySelector("#hum")
const spee=document.querySelector("#spee")


function message(str){
    city.placeholder=str;
    city.value=""
}

function settingValues(temp,weatherMood,cityName,speed,humidity){
    h1.innerHTML=temp
    citySet.innerHTML=cityName
    hum.innerHTML=`${humidity}%`
    spee.innerHTML=`${speed}km/h`
}
async function fun(url){
   try{
    let response = await fetch(url)
    if (response.status === 404) {
        throw new Error("Please enter a valid city name")
    }
    let data = await response.json();
   console.log(data);
    let temp = data.main.temp
    let weatherMood = data.weather.main
    let cityName=data.name;
    let speed = data.wind.speed
    let humidity1= data.main.humidity 
    settingValues(temp,weatherMood,cityName,speed,humidity1)

   }catch(error){
    console.log(error);
    message(error)
   }
  
}

function check(input){
    if( input===""||!isNaN(input)){
        message("Please enter a valid city name")

    }else{
        let lowerValue=input.toLowerCase()
        let newURL=`https://api.openweathermap.org/data/2.5/weather?q=${lowerValue}&appid=12db9062f8d7093e6b6f9dcecfcdf2c8&units=metric`
        fun(newURL)
    }
}

button.addEventListener("click" ,(e) => {
    e.preventDefault();
    const cityValue = city.value;
    check(cityValue,city) 
})
