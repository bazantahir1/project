import React from 'react'

import { Link } from 'react-router-dom'

function Classes() {
  return (
    <div>
        <section className="classes-section">
        <div className="class-title set-bg" data-setbg="img/classes-title-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto text-center">
                <div className="section-title pl-lg-4 pr-lg-4 pl-0 pr-0">
                  <h2>Choose Your Program</h2>
                  <p>Our Crossfit experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="classes-item set-bg" data-setbg="img/classes/class-1.jpg">
                <h4>Crossfit Level 1</h4>
                <p>Sufferers around the globe will be happy to hear that there are sleep apnea remedies.</p>
                <Link to="#" className="primary-btn class-btn">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="classes-item set-bg" data-setbg="img/classes/class-2.jpg">
                <h4>BootCamp</h4>
                <p>The oil, also called linseed oil, has many industrial uses it is an important ingredient
                </p>
                <Link to="#" className="primary-btn class-btn">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="classes-item set-bg" data-setbg="img/classes/class-3.jpg">
                <h4>Energy Blast</h4>
                <p>It is a very common occurrence like cold or fever depending upon your lifestyle. </p>
                <Link to="#" className="primary-btn class-btn">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="classes-item set-bg" data-setbg="img/classes/class-4.jpg">
                <h4>CLASSIC BODY BALANCE</h4>
                <p>The procedure is usually a preferred alternative to photorefractive keratectomy,</p>
                <Link to ="#" className="primary-btn class-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Classes