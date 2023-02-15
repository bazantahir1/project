import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>
      <div>
      <div className="header-section">
        <div className="container-fluid">
          <div className="logo">
            <Link to="/"> <img src="img/logo.png" alt="logo" /> </Link>
          </div>

            <div className="container">
              <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                  <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    {/* <li><Link to="/aboutus">About us</Link></li> */}
                    <li><Link to="/classes">Schedule</Link></li>
                    <li><Link to ="/chooseus">Gallery</Link></li>
                    <li><Link to="/Exercise">Exercise</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
        </div>
        </div>
    </div>
    <section className="home-about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text">
                <h2>WELCOME TO CROSSFIT</h2>
                <p className="short-details">CrossFit is a cutting-edge functional fitness system that can help
                  everyday men.</p>
                <p className="long-details">Success isn'wt really that difficult. There is a significant portion of
                  the population here in North America, that actually want and need success to be hard! For
                  those of you who are serious about having more, doing more, giving more and being more.</p>
                <Link to="/login" className="primary-btn about-btn">Login</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src="img/home-about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home