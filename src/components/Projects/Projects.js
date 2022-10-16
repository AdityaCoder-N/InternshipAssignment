import React,{useState,useEffect} from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return(
        <div className='row'>

            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            <div className={(width>=995)?'col-md-4':'col-md-6'}>
                <ProjectItem contentTitle="Diwali Campaign"/>
            </div>
            
        </div>
    )

}

export default Projects