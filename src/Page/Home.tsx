import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar.tsx";
import Jobs from "../components/jobs.tsx";
import Search from "../components/search.tsx";
import Footer from "../components/footer.tsx";
import './Style/main.css';
import img from '../assets/Vector.png';
import img1 from '../assets/Discord.svg';
import img2 from '../assets/MailChimp.svg';
import img3 from '../assets/Medium.svg';
import img4 from '../assets/Microsoft.svg';
import img5 from '../assets/Square.svg';
import img6 from '../assets/SquareSpace.svg';
import img7 from '../assets/WealthSimple.svg';


const Home: React.FC = () => {

  return (
    <div className='Home bg-body-secondary'>
      <Navbar/>
      <div className='container d-flex justify-content-center' style={{marginTop:"50px"}}>
        <div className='row'>
          <div className="col text-center">
            <div style={{marginBottom:"25px", marginTop:"50px"}}>
            <h2 className="typing-text"><span>We'll get you </span><span className='text-primary'>hired</span></h2>
            <h2 className="typing-text"><span>hired in </span><span className='text-primary'>no time</span></h2>

            </div>
            <div className="div">
              <p className='mb-3'>Find job easy now !</p>
              <Search/>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div style={{marginTop:"20px", marginBottom:"50px"}}>
              <div className="row logos" style={{overflow:"hidden"}}>
                <div className="logos-slide">
                  <img className="image-fluid" src={img}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img1}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img3}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img4}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img5}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img6}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img7}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img1}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img5}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img3}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img7}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img4}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img5}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img6}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img1}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                </div>
                <div className="logos-slide">
                  <img className="image-fluid" src={img7}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img6}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img5}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img4}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img3}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img1}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img7}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img5}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img3}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img1}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img6}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img2}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img4}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                  <img className="image-fluid" src={img7}  style={{objectFit:"contain", width:200,height:"auto",margin:"10px"}} id="" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h2>Available <span className='text-primary'>Jobs</span></h2>
            <div className="d-flex flex-wrap justify-content-center mt-4">
              <div className="col col-md-5 col-lg-4"><Jobs /></div>
              {/* <div className="col col-md-5 col-lg-4"><Jobs /></div>
              <div className="col col-md-5 col-lg-4"><Jobs /></div>
              <div className="col col-md-5 col-lg-4"><Jobs /></div>
              <div className="col col-md-5 col-lg-4"><Jobs /></div>
              <div className="col col-md-5 col-lg-4"><Jobs /></div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
