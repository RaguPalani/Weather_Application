import React from "react"
import './WeatherApp.css'

import search_icon from "../Assets/search.png" 
// import clear_icon from "../Assets/clear.png" 
import cloud_icon from "../Assets/cloud.png" 
// import drizzle_icon from "../Assets/drizzle.png" 
// import rain_icon from "../Assets/rain.png" 
// import snow_icon from "../Assets/snow.png" 
import wind_icon from "../Assets/wind.png" 
import humidity_icon from "../Assets/humidity.png" 

const WeatherApp = () => {

    let api_key = "14899e9b257d41be3063a4aa68dd9318"
    const search = async () => {
        const element = document.getElementsByClassName("city")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url)
        let datas = await response.json()
        const humidity = document.getElementsByClassName("humidity-percentage")
        const wind  = document.getElementsByClassName("wind-rate")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = datas.main.humidity +" %"
        wind[0].innerHTML = datas.wind.speed + " km/h"
        temp[0].innerHTML = datas.main.temp + "°c"
        location[0].innerHTML = datas.name
   
    }
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="city" placeholder="Search.." />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">--°c</div>
            <div className="weather-location">---</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percentage">--%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">-- km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp