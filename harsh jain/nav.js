import React from 'react'
import logo from '../imges/logo.jpeg'

export default function Navbar() {
    return (
        <div class="navbar navbar-expand-lg navbar-light bg-light">
        <img class="navbar-brand mx-5" src={logo} style={{heigh:"50px",width:"100px"}}></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <button class="btn text-danger btn-white  my-2 my-sm-0 mx-1 nav-item" id ="home" type="submit"><strong>Home</strong></button>
            <button class="btn text-danger  btn-white   my-2 my-sm-0 mx-1 nav-item" id="donate blood" type="submit"><strong>Donate Blood</strong></button>
        <button class="btn text-danger btn-white  my-2 my-sm-0 mx-1 nav-item" id ="host camp" type="submit"><strong>Host Camp</strong></button>
            <button class="btn text-danger btn-white  my-2 my-sm-0 mx-1 nav-item" id="about us" type="submit"><strong>About us</strong></button>
        <button class="btn text-danger btn-white my-2 my-sm-0 mx-1 nav-item" id ="contact us" type="submit"><strong>Contact us</strong></button>
          
          <button class="btn btn-danger text-white my-2 my-sm-0 mx-2 nav-item" id ="register" type="submit">Register</button>
          <button class="btn btn-danger text-white my-2 my-sm-0 mx-2 nav-item" id="login" type="submit">Login</button>
          </div>
    
      </div>
    )
}
