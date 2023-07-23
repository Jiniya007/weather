import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function Temperature() {
    const [searchValue,setSearchValue] = useState('pune');
    const [tempInfo , setTempInfo]= useState({});



    const getWeatherInfo= async()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c8c787163cbeed66c6db2b1349233107`
          let resp = await fetch(url);
          let data = await resp.json();
    
  
          const { temp, humidity, pressure } = data.main;
          const { main: weathermood } = data.weather[0];
          const { name } = data;
          const { speed } = data.wind;
          const { country, sunset } = data.sys;
          // console.log(temp)

          const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
          };
          setTempInfo(myNewWeatherInfo)

            
        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(()=>{
      getWeatherInfo()
    },[])
  return (
    <>
      <div
        className="max-w-[1240px] flex justify-center items-align-center
    h-full mx-auto mt-[150px]"
      >
        <div className="w-[100%] relative flex   justify-center">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="searchBar"
            className="w-[50%] text-2xl border-none rounded
            py-2 px-2 outline-none  text-[#000]"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
          <button
            className="border border-black py-1 px-2
            text-2xl rounded bg-[#00b4cc] font-semi-bold text-white"
            type="button"
             onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard  tempInfo={tempInfo}/>
    </>
  );
}

export default Temperature;
