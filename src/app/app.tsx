import React, { useState } from "react";
import './app.css'

const myFunction = () => {
    return(
      alert('It is working')
    );
}

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
    <div className='container'>
      <div className="box">
        <div className="message">
          <h1>Click To Recive Message</h1>
        </div>
        <div className="alert">
        <button onClick={myFunction} type="button" className="btn btn-primary" >Alert Button</button>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
