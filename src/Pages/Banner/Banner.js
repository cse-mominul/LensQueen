import React from 'react';
import silderPic1 from '../../Assets/s11.jpg'
import silderPic2 from '../../Assets/s3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-90">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='carousel-img w-full'>
    <img src={silderPic1} className=" w-full" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
      <h3 className='text-6xl font-bold text-white'>Lens Queen</h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
      <p className='text-xl text-white'>A tear contains an ocean. A photographer is aware of the tiny moments in a persons life that reveal greater truths</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className="btn btn-outline mr-5 btn-primary">Login</button>
    <button className="btn btn-primary">Register</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='carousel-img w-full'>
    <img src={silderPic2} className=" w-full" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
      <h3 className='text-6xl font-bold text-white'>Lens Queen</h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-200 top-1/2">
      <p  className='text-xl text-white'>Save Your Memories With Us</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className="btn btn-outline mr-5 btn-accent BtnClass">Login</button>
    <button className="btn btn-active btn-accent">Register</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>