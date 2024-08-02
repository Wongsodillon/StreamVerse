import React, { useState } from 'react';

function filter(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <div className={`filter-toggler ${isSidebarOpen ? 'open' : 'close'}`} onClick={toggleSidebar}  >
                <p className="toggler-icon">{isSidebarOpen ? '✕' : '☰'}</p> 
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`} style={{width: isSidebarOpen ? 'calc(210px + 10%)' : '0', transition: 'width 0.3s',paddingBottom: '5vh'}}>
                {isSidebarOpen && (
                    <div>
                        <div style={{marginTop:"50px", marginLeft:"20px"}}>
                            <div style={{fontWeight:"bold"}}>Employment Type</div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Full Time Jobs</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Part Time Jobs</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Remote Jobs</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">InternShips</div>
                                
                            </div>
                        </div>
                        <div style={{marginTop:"30px", marginLeft:"20px"}}>
                            <div style={{fontWeight:"bold"}}>Employment Level</div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Entry Level</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Mid Level</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Senior Level</div>
                                
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">Mid Level</div>
                            </div>
                        </div>
                        <div style={{marginTop:"30px", marginLeft:"20px"}}>
                            <div style={{fontWeight:"bold"}}>Salary Range</div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}} >
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">$500 - $1000</div>   
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">$1000 - $1500</div>
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">$1500 - $2000</div>
                            </div>
                            <div className="d-flex align-items-center" style={{marginLeft:"20px"}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{marginRight:"5px"}}
                                />
                                <div className="bg-light">$2000 - $2500</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default filter
