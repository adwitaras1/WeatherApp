import { useContext } from 'react';
import {BsFillSunriseFill , BsFillSunsetFill ,BsWind ,    BsFillDropletFill , BsCloudFill, BsEyeFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import { WeatherContext } from '../App';
function Intro(){
const Data=useContext(WeatherContext)

    return(
        <>
        <div className='flex flex-col items-center text-center justify-center'>
      <div className='my-8 gap-3 text-center items-center justify-center flex flex-col'>
        <h3 className='text-3xl mb-4 font-bold'>{Data.name} {Data.sys.countrycode}</h3>
        <h3 className='text-3xl mb-4 font-bold'>{Math.floor(Data.main.temp/10)}&deg;C</h3>
        <h3 className='text-2xl mb-4 font-bold'>{Data.weather[0].description}</h3>
        <img className=" items-center w-24" src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@4x.png`}  alt="icon"/>
        
      </div>
      
      <div className="flex flex-col gap-5 items-center justify-center text-center ">
      <div className="flex-row gap-3 flex">
       <p className='flex gap-3 flex-row'><BsFillSunriseFill size={25}/>Sunrise-{new Date(Data.sys.sunrise * 1000).toLocaleTimeString().sunrise}</p>
       <p>|</p>
       <p className='flex gap-3 flex-row'><BsFillSunsetFill size={25}/>Sunset-{new Date(Data.sys.sunset * 1000).toLocaleTimeString().sunset}</p>
      </div>
      
      <div className="flex-row gap-3 flex">
       <p className='flex gap-3 flex-row'><BsEyeFill size={25}/>visibility-{(Data.visibility/1000)}km</p>
       <p>|</p>
       <p className='flex gap-3 flex-row'><BsWind size={25}/>Wind Speed-{Data.wind.speed}km/hr</p>
      </div>

      <div className="flex-row gap-3 flex">
       <p className='flex gap-3 flex-row'><BsCaretUpFill size={25}/>Maximum-{Math.floor(Data.main.temp_max / 10).maximum}&deg;C</p>
       <p>|</p>
       <p className='flex gap-3 flex-row'><BsCaretDownFill size={25}/>Minimum-{Math.floor(Data.main.temp_min/10).minimum}&deg;C</p>
      </div>

      <div className="flex-row gap-3 flex">
       <p className='flex gap-3 flex-row'><BsFillDropletFill size={25}/>humidity-{Data.main.humidity}</p>
       <p>|</p>
       <p className='flex gap-3 flex-row'><BsCloudFill size={25}/>Cloud-{Data.clouds.all}</p>
      </div>
      </div>
      </div>
      </>
    )
}
export default Intro;