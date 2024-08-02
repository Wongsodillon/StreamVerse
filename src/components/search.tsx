import React from 'react'

const search = () => {
  return (
    <div style={{marginTop:"50px"}}>
        <form className="d-flex" role="search">
            <div className="form-control d-flex justify-content-between" style={{borderRadius:"40px", alignItems:"center"}}>
                <p style={{marginLeft:"20px",alignItems:"center"}}>Search Job Title </p>          
                <button className="btn btn-outline-success bg-primary text-white flex-end" style={{borderRadius:"40px"}} type="submit">Search</button>
            </div>
        </form>
    </div>
  )
}

export default search
