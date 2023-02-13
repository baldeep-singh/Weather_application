import react from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Weather from './Components/Weather';
function App() {
  const [Lat, setLat] =  useState(0);
  const [Long, setLong] = useState(0);
  const [Data ,setData] = useState(0);
  let  w_data = {"city": "chandigarh","temp":"100","humidity":"80%"};
  useEffect(
    function getData()
    {
        async function fetchData()
        {
          navigator.geolocation.getCurrentPosition(function(position)
           {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
           },function(){
         alert("could not get user data")
           }) ;
      let api_url= "http://api.openweathermap.org/data/2.5/weather?";
      let api_key= "7d23d146b001c0dbb9da12851c80ee83" ;
      const api = (api_url + "lat=" + Lat + "&lon=" + Long + "&appid=" + api_key);
      await fetch(`${api_url}/weather/?lat=${Lat}&lon=${Long}&units=metric&APPID=${api_key}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
          }
      fetchData();
    }
      );
 

  return (
   <Weather weatherData={w_data} />  );
}

export default App;
