
import { Component, useEffect, useState } from 'react';
import axios from 'axios';

export default function Forecast() {

let [Forecast, setForecast] = useState('')

const locationParams = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10000,
  };

useEffect(() => {
    async function onLoadForecast(){ 
    if(navigator.geolocation){
        navigator.permissions.query({name:"geolocation"})
        .then(async (result) => {
        if (result.state === "granted" || result.state === "prompt"){
            let forecast = await getClientForecast()
            console.log(forecast)
            setForecast(forecast)
        }
        else if(result.state === "denied"){
            console.warn('Location services are turned off');
            let forecast = await reqForecast(53.837566, -9.351470)
            setForecast(forecast)
        }
        })
    }
    else{
        console.error('Geolocation not avaliable for your device')
    }

  } onLoadForecast()}, [])
  
async function getClientForecast(){
    return getLocation().then(async (coords) => {
        return reqForecast(coords.Lat,coords.Lon)
    })
}

async function reqForecast(Lat,Lon) {
        return await axios.get("http://192.168.1.37:5000/Forecast", 
        {headers: {"Access-Control-Allow-Origin": "*"}, 
        params:{"Lat":Lat, "Lon":Lon}})
        .then((response) => {return response.data})}
  
function getCoords(position){
    let Lat = position.coords.latitude,
        Lon = position.coords.longitude
   return {Lat, Lon}
}
  
async function getLocation(){
    return await new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(async position => {
        resolve(getCoords(position));
      },reject, locationParams);
    });
}

return(
    <div>
    <h1>temp:{Forecast.temp}</h1>
    <h1>cloudness:{Forecast.cloudness}</h1>
    <h1>condition:{Forecast.condition}</h1>
    <h1>daytime:{Forecast.daytime}</h1>
    <h1>feels_like:{Forecast.feels_like}</h1>
    <h1>icon:{Forecast.icon}</h1>
    <h1>season:{Forecast.season}</h1>
    <h1>source:{Forecast.source}</h1>
    <h1>uptime:{Forecast.uptime}</h1>
    <h1>wind_dir:{Forecast.wind_dir}</h1>
    <h1>wind_gust:{Forecast.wind_gust}</h1>
    <h1>wind_speed:{Forecast.wind_speed}</h1>
    </div>
  )
}