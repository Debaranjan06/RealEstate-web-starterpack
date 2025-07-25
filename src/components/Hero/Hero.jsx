import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi';
// import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">

            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <h1>Discover <br />
                    Most Suitable <br/>
                    Property
                    </h1>
                </div>
            
                <div className="flexColStart hero-des">
                    <span>Find of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
                
                <div className="flexCenter search-bar">
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            {/* <CountUp start={88000} end={90000} duration={3} separator=',' /> */}
                        </span>
                        <span className='secondaryText'>
                            Premium Products
                        </span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            {/* <CountUp start={88000} end={90000} duration={3} separator=',' /> */}
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            {/* <CountUp start={88000} end={90000} duration={3} separator=',' /> */}
                        </span>
                        <span className='secondaryText'>
                            Award Winning
                        </span>
                    </div>
                </div>
            </div>

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
