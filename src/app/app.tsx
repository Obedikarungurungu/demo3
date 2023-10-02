import React, { useState } from "react";
import './app.css'
import './WeatherApp/WeatherApp'
import WeatherApp from "./WeatherApp/WeatherApp";

export function App() {
  return (
    <>
    <nav className="navbar bg-body-tertiary"  data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand"><img src="../public/favicon.ico" alt="" /></a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>

     <WeatherApp/>
    </>

  );
}

export default App;
