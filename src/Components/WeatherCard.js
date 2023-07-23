import React, { useEffect, useState } from 'react'

function WeatherCard({tempInfo}) {
    const [weatherState , setWeatheState] = useState("");
    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case 'Clouds':setWeatheState("wi-day-cloudy")
                     break;
                     case "Haze":
                        setWeatheState("wi-day-fog");
                        break;
                      case "Clear":
                        setWeatheState("wi-day-sunny");
                        break;
                      case "Mist":
                        setWeatheState("wi-dust");
                        break;
                
                default:
                    setWeatheState("wi-day-sunny");

                    break;
            }
        }
    }, [weathermood])


    // converting second
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}: ${date.getMinutes()}`
  return (
    <>
    <div className=" md:max-w-[1240px] mx-auto flex justify-center py-[50px] ">
    <div className=" md:w-[600px] h-[450px]  rounded box">
        <div className="weatherIcon ">
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
            <div className="temprature">
                <span>{temp}&deg;</span>
            </div>
        <div className="description">
            <div className="wetherConditon">{weathermood}</div>
            <div className="place">{name} , {country}</div>
        </div>
        <div className="date">
            {new Date().toLocaleString()}
        </div>
        </div>
        <div className="md:w-[100%]  text-center py-4 ">
         <div className="row flex justify-between">
            <div className="col-4">
                <p className=" text-[10px] md:text-2xl">
                    <i className={"wi wi-sunset"}></i>
                </p>
                <p className='py-2 px-2 text-[20px] md:text-1xl font-bold'>
                    {timeStr} PM <br />
                    sunset
                
                </p>
            </div>
            <div className="col-4">
                <p className="text-2xl">
                    <i className={"wi wi-humidity"}></i>
                </p>
                <p className='py-2 px-2 text-1xl font-bold'>
                    {humidity}<br />
                    humidity
                </p>
            </div>
            <div className="col-4">
                <p className="text-center text-2xl">
                    <i className={"wi wi-rain"}></i>
                </p>
                <p className='py-2 px-2 text-1xl font-bold '>
                    {pressure} <br />
                    pressure
                </p>
            </div>
            <div className="col-4">
                <p className="text-2xl">
                    <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className='py-2 px-2 text-1xl font-bold'>
                    {speed} <br />
                    speed
                </p>
            </div>
         </div>



        </div>




    </div>
        
        </div>
      
    </>
  )
}

export default WeatherCard
