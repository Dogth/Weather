const axios = require('axios');
const express = require('express');
const cors = require('cors')
const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/Forecast', async (req, res) => { 
  const APIKey = "87978085-2aaa-42fe-a69b-1dbd5aef136b"
  const Header = {headers: {"X-Yandex-API-Key": APIKey},}

  async function YandexWeather (Lat,Lon) {
    let Data
    await axios.get("https://api.weather.yandex.ru/v2/forecast?lat="+Lat+"&lon="+Lon, Header)
    .then(response => {
        console.log('Requested forecast from Yandex')
        Data = response.data})
    .catch((error) => {
        console.log(error);
        return error})
        
    return Data
    }
  const Forecast = await YandexWeather(55,37)
  res.json([Forecast])
  console.log("Request to Express Server: " + req)
  console.log("Server response sent")
}); 