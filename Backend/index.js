const axios = require('axios');
const express = require('express');
const cors = require('cors')
const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/Forecast', async (req, res) => { 
  const APIKey = "87978085-2aaa-42fe-a69b-1dbd5aef136b"
  const Header = {headers: {"X-Yandex-API-Key": APIKey},}

  async function YandexWeather (Lat,Lon) {
   return await axios.get("https://api.weather.yandex.ru/v2/forecast?lat="+Lat+"&lon="+Lon+"&lang=en_US", Header)
    .then(response => {
        console.log('Requested forecast from Yandex')
        return response.data.fact})
    .catch((error) => {
        console.log(error);
        return error})
    }
    //Add JSON Parser to minimize sending data to client
  const Forecast = await YandexWeather(req.query.Lat,req.query.Lon)
  console.log("---- BEGIN DEBUG STATEMENTS ----")
  console.log("Request to Express Server: " + req.query.Lat, req.query.Lon)
  console.log("API response: "+ res.statusCode)
  console.log("---- END DEBUG STATEMENTS ----")
  res.json(Forecast)
}); 