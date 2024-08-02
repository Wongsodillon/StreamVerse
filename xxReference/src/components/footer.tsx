import React, { useState } from 'react';
import { Link } from "react-router-dom"
// import sos1 from '../Assets/sos1.png';
// import sos2 from '../Assets/sos2.png';
// import sos3 from '../Assets/sos3.png';
// import sos4 from '../Assets/sos4.png';
import logo from "../assets/CarrerSpotlogo.svg"

function Footer() {
    return (
        <section className="Footer bg-primary" style={{marginTop:"150px"}}>
            <div className='row-ftr' style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '20px' }}>
                <div className='col-6-1-ftr' style={{ textAlign: 'right', paddingRight: '10px' }}>
                    <div className='ftrTxt'>
                    <img className="image-fluid" src={logo} style={{ objectFit: "contain", width: 150, height: "auto" }} id="" alt="" />

                    </div>
                </div>
                <hr className="vertical-line" style={{ gridColumn: '2', margin: '0', height: '100%', width: '2px', backgroundColor: 'black' }} />
                <div className='col-6-2-ftr' style={{ textAlign: 'left', paddingLeft: '10px' }}>
                    <div className='row-in-col2-ftr' style={{ marginBottom: '5px' }}>
                        <p id='followUs' style={{ margin: 0 }}>Follow Us</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <img src={sos1} alt="imgsos" className="" id="sos1" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos2} alt="imgsos" className="" id="sos2" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos3} alt="imgsos" className="" id="sos3" style={{ height: 30, width: "auto", margin: '0 5px' }} />
                        <img src={sos4} alt="imgsos" className="" id="sos4" style={{ height: 30, width: "auto", margin: '0 5px' }} /> */}
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Footer;
