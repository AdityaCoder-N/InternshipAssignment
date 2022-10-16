import React from 'react'
import "./projects.css"
const ProjectItem = (props)=>{
    return(
        <>
        <div className="card">
            <div className="card-body">

                <div className='card-title-container'>

                    <img src="./images/OYO.avif" className='card-image'/>
                    <h5 className="card-title">Oyo</h5> 

                    <button type="button" className="btn btn-outline-primary card-btn" >Submit Work</button>
                </div>

                <div className='card-content-container'>

                    <div className='content'>
                        <h6 className="card-subtitle mb-2 text-muted">{props.contentTitle}</h6>
                        <p className="card-text">This is a campaign to create stunning video from a botique...</p>
                    </div>
                    
                    <div className='price'> ₹2500</div>
                </div>

                
                
            </div>
        </div>
        </>
    )
}

export default ProjectItem