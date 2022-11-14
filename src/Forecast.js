let Lat, Lon;
const LocationParams = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

/*

ToDo: Turn this into a Component.

          How it works:
1. Check if client has a geolocation capabilities
2. If True then get geolocation permissions
   If False display error
3. If Granted Get coordinates and save them in Lat/Lon vars
   If Denied display error
4. Call Express server w/ Lat/Lon in request params
   It will return full Forecast&Data as JSON

*/

async function CallAPI(Lat,Lon) {
    await axios.get("http://localhost:5000/Forecast", 
    {headers: {"Access-Control-Allow-Origin": "*"}, params:{"Lat":Lat, "Lon":Lon}})
    .then((response) => {return response.data})}

function getCoords(position){
    [Lat, Lon] = [position.coords.latitude,
                  position.coords.longitude]
}

function GetClientForecast(){
  if(navigator.geolocation){
    navigator.permissions.query({name:"geolocation"})
    .then((result) => {
      switch (result.state) {
        case 'granted': 
          navigator.geolocation.getCurrentPosition(getCoords(position))
            break;

        case 'denied':
          console.warn('Geolocation services are turned off');
          [Lat, Lon] = [53.837566, -9.351470]
          break;

        case 'prompt':
          navigator.geolocation.getCurrentPosition(getCoords(position),
            (error) => console.warn(error),
            LocationParams)
          break
      }
    })
  }
  else{
    console.error('Geolocation not avaliable for your device')
  }
  Forecast = CallAPI(Lat, Lon)
}
