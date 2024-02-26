import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeather] = useState();
    const{
        temp, pressure, humidity,weathermood,name,speed,country, sunset
      } = tempInfo;

      let sec = sunset;
      let date = new Date(sec*1000);
      let timestr = `${date.getHours()}:${date.getMinutes()}`

      useEffect(() =>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                setWeather("wi-day-cloudy");
                break;
                case "Haze":
                    setWeather("wi-fog");
                    break; 
                    case "Clear":
                    setWeather("wi-day-sunny");
                    break; 
                    default:
                        break; 
            }

        }

      },[weathermood])
  return (
    <>
    <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name} {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br></br>
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br></br>
                humadity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br></br>
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br></br>
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard