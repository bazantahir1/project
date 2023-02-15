import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
         <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo-item">
                <div className="f-logo">
                  <Link><img src="img/logo.png" alt="logo" /></Link>
                </div>
                <p>Despite growth of the Internet over the past seven years, the use of toll-free phone numbers
                  in television advertising continues.</p>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="footer-widget">
                <h5>Our Blog</h5>
                <div className="footer-blog">
                  <Link to="#" className="fb-item">
                    <h6>Most people who work</h6>
                    <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
                  </Link>
                  <Link to="#" className="fb-item">
                    <h6>Freelance Design Tricks How </h6>
                    <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
                  </Link>
                  <Link to="#" className="fb-item">
                    <h6>have a computer at home have had </h6>
                    <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>Program</h5>
                <ul className="workout-program">
                  <li><Link to="">Bodybuilding</Link></li>
                  <li><Link to="">Running</Link></li>
                  <li><Link to="">Streching</Link></li>
                  <li><Link to="">Weight Loss</Link></li>
                  <li><Link to="">Gym Fitness</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h5>Get Info</h5>
                <ul className="footer-info">
                  <li>
                    <i className="fa fa-phone" />
                    <span>Phone:</span>
                    (+92) 300 6789155
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    <span>Email:</span>
                    ShoaibGym@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Address</span>
                    Shoaib Gym Punjab Society Zaheer Chowk College Road Lahore 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer