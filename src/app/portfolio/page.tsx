'use client'
import ProjectCards from "../components/ProjectCards";
import { projectsData } from "../data/projects";

const PortfolioPage = () => {

    return (
        <div id="projects">
            {projectsData.map((i, key)=> {
                return  <ProjectCards {...i}/>
                
            })}
        <style jsx>
            {`
            div#projects {
                margin: 10px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                width: 100%;
            }

            `}
            
        </style>
        </div>
    )
}

export default PortfolioPage;