import React from 'react'
import './Homepage.css'

function Homepage() {
    return (
        <div>
            <header>
                <span className="logo">Esito For Devs</span>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Team</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Plans</li>
                        <li>Bugs & Errors</li>
                        <li className="loginbtn">Login</li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="get-started">
                    <div className="card">
                        <h2>Fixing Lot's of Bugs & Errors ?</h2>
                        <h3>Let's Get Started</h3>
                        <p>
                            If You are a Developer You Face Lot's of Bugs and Errors
                            . That's Why We Build this Platform For YouYou can Click on
                            Get Started Button to Get Startedwith the Platform and You c
                            an Post Your Bugs or Errors Here and also You can Help Some
                            one Whois Struggling to Fix Bugs and Errors .
                        </p>
                        <button>Get Started</button>
                    </div>
                    <img src='Images/struggle illus.png' />
                </div>
                <div className="bugs_error">
                    <h2>Latest Bugs & Errors</h2>
                    <div className="bugs_card">
                        <div className="card">
                            <div className="error_head">
                                <div className="error_user">
                                    <img src="" alt="avatar" />
                                    <h3>User Name</h3>
                                </div>
                                <p>Posting Time</p>
                            </div>
                            <div className="error_desc">
                                <h3>Error Description</h3>
                                <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <button>View Post</button>
                        </div>
                        <div className="card">
                            <div className="error_head">
                                <div className="error_user">
                                    <img src="" alt="avatar" />
                                    <h3>User Name</h3>
                                </div>
                                <p>Posting Time</p>
                            </div>
                            <div className="error_desc">
                                <h3>Error Description</h3>
                                <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <button>View Post</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage