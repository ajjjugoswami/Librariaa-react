import React from 'react'
import { Link } from 'react-router-dom'

export default function UserHomebarslider() {
  return (
    <div>
        <section>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
           
            <div class="carousel-inner">
                <div class="item slider1 active">
                    <img src="images/slider/2.PNG" alt="" style={{opacity:'0.9'}}/>
                    <div class="carousel-caption slider-con">
                        <h2>Welcome to <span>LIBRARIA</span></h2>
                        <p style={{fontSize:'27px',color:'SlateBlue'}}><strong>Unlock your potential with knowledge at our college library</strong></p>
                        <Link to="https://vcertk.com/vision-and-mission/" class="bann-btn-1" target='-'>Mision</Link><Link to="https://vcertk.com/vision-and-mission/" class="bann-btn-2" target='-'>Vision</Link>
                    </div>
                </div>
                <div class="item">
                    <img src="images/slider/5.JPG" alt="" style={{opacity:'0.9'}}/>
                    <div class="carousel-caption slider-con">
                        <h2>Admission open <span></span></h2>
                        <p style={{fontSize:'27px',color:'tomato'}}><strong>"Explore the world through our books - your journey starts here at the librarExplore the world through our books - your journey starts here at the library</strong></p>
                        <Link to="https://vcertk.com/admission-2018-19/" class="bann-btn-1" target='-'>Click Me</Link>
                    </div>
                </div>
                <div class="item">
                    <img src="images/slider/6.PNG" alt="" style={{opacity:'0.7'}}/>
                    <div class="carousel-caption slider-con">
                        <h2>Libraria <span></span></h2>
                        <p style={{fontSize:'27px',color:'black'}}><strong>Empowering Minds, Enriching Souls: Discover the World of Knowledge at Our College Library</strong></p>
                        <Link to="https://vcertk.com/vision-and-mission/" class="bann-btn-1" target='-'>Mision</Link><Link to="https://vcertk.com/vision-and-mission/" class="bann-btn-2" target='-'>Vision</Link>                    </div>
                </div>
            </div>

           
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <i class="fa fa-chevron-left slider-arr"></i>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <i class="fa fa-chevron-right slider-arr"></i>
            </a>
        </div>
    </section>
    </div>
  )
}
