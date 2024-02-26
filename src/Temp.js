import React, { useEffect, useState } from "react";
import "./Style.css";
import WeatherCard from "./weatherCard";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("Pune");
  const [tempInfo, setTempInfo ] = useState({})

  const serWeatherInfo = async () =>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f6f8f3e6d3da77673d824f13d86452da`
      const res = await fetch(url);
      const data = await res.json();

      const { temp, pressure, humidity } = data.main;
      const { main:weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

    const curWeatherInfo = {
      temp, pressure, humidity,weathermood,name,speed,country, sunset
    }
    setTempInfo(curWeatherInfo);
    } catch (error) {
      
    }
   
  }

  useEffect(() =>{
    serWeatherInfo();
  },[])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="...search"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="searchButton" onClick={serWeatherInfo}>search</button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
