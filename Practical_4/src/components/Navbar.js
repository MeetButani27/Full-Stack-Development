import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <Link className="navbar-brand mx-3 text-light" to="/" style={{ 'font-size':'22px' }}><b>MEET BUTANI</b></Link >
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link ms-5 text-warning" style={{'font-size':'18px'}} to="/">Home</Link >
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link mx-2 text-light" style={{'font-size':'17px'}} to="/projects">Projects</Link >
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link mx-2 text-light" style={{'font-size':'17px'}} to="/achievements">Achievements</Link >
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link mx-2 text-light" style={{'font-size':'17px'}} to="/contactUs">Contact Us</Link >
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link mx-2 text-light" style={{'font-size':'17px'}} to="/about">About</Link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar