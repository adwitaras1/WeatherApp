import TopBar from "./components/TopBar"
import InputField from "./components/InputField"
import Intro from "./components/Intro"
import Forecast from "./components/Forecast"
import axios from 'axios'
import {useState,useEffect,createContext} from 'react'


export const WeatherContext=createContext();

function App(){
  const [Data , setData] = useState([])
  const [city , setCity] = useState('Lucknow')
  const [bg , setBg] = useState("")


  function handlebg(id){
    if( id >= 200  && id < 300){
     setBg("bg-[url('./Images/Thunderstorm.webp')]")
    }
   
    else if( id >= 300  && id < 600){
     setBg("bg-[url('./Images/Drizzle.webp')]")
    }
   
    else if( id >= 600  && id < 700){
     setBg("bg-[url('./Images/Snow.webp')]")
    }
   
    else if( id >= 700  && id < 800){
     setBg("bg-[url('./Images/Haze.webp')]")
    }
   
    else if( id >= 801 && id < 900){
     setBg("bg-[url('./Images/Clouds.webp')]")
    }
   
    else{
     setBg("bg-[url('./Images/Clear.webp')]")
    }
   
    
   
   }








  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2203e8d6434a0cee809e7ad8f8e69490`
    axios.get(url).then(response =>{
        handlebg(response.data.weather[0].id)
        setData(response.data)
        
    }).catch(err =>{
      console.log(err);
    })


},[city])


  return(
    <>
    {Data.length===0 ? (<div>Loading...</div>) :
<>
<div className={`w-full pb-8 bg-cover text-white h-fit ${bg}`}>
  <WeatherContext.Provider value={Data}>
    <TopBar cityStateChanger={setCity}/>
    <InputField cityStateChanger={setCity}/>
    <Intro />
    <Forecast/>
    </WeatherContext.Provider>
    </div>
    </>
}
</>
  )
}
export default App;