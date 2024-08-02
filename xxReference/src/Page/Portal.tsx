import React from 'react';
import Navbar from "../components/navbar.tsx";
import Search from "../components/search.tsx";
import Filter from "../components/filter.tsx";
import Jobs from "../components/jobs.tsx";
import './Style/main.css';
import Footer from '../components/footer.tsx';

const Job = () => {
  return (
    <div>
      <div className='Home bg-body-secondary'>
        <Navbar/> 
        <Filter/>
        <div className="container mt-4">
          <div className="row justify-content-center">
          <Search/>
            <div className="col text-center">
              <div className="d-flex flex-wrap justify-content-center mt-4">
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
                <div className="col col-md-5 col-lg-4"><Jobs /></div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Job
