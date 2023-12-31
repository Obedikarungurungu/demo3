import React, { useState } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import rain_icon from '../Assets/rain.png';
import humidity_icon from '../Assets/humidity.png';
import drizzle_icon from '../Assets/drizzle.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

// const url=`https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=8e9185ec81e1eda9464b845ac0911a20`

const WeatherApp = () => {
  let api_key = '8e9185ec81e1eda9464b845ac0911a20';

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async (e) => {
    e.preventDefault();
    const element = document.getElementsByClassName('form-control');
    if (element[0].value === '') {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-speed');
    const temprature = document.getElementsByClassName('weather-temp');
    const loction = document.getElementsByClassName('weather-loction');

    humidity[0].innerHTML = data.main.humidity + ' %';
    wind[0].innerHTML = Math.floor(data.wind.speed) + ' km/h';
    temprature[0].innerHTML = Math.floor(data.main.temp) + '°c';
    loction[0].innerHTML = data.name;

    switch (data.weather[0].icon) {
      case '02d':
      case '02n':
        setWicon(clear_icon);
        break;
      case '03d':
      case '03n':
        setWicon(drizzle_icon);
        break;
      case '04d':
      case '04n':
        setWicon(drizzle_icon);
        break;
      case '09d':
      case '09n':
        setWicon(rain_icon);
        break;
      case '10d':
      case '10n':
        setWicon(rain_icon);
        break;
      case '13d':
      case '13n':
        setWicon(snow_icon);
        break;
      default:
        setWicon(clear_icon);
    }
  };

  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">WeatherApp</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" onClick={search}>
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">25°c</div>
      <div className="weather-loction">Sydney</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">68%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
