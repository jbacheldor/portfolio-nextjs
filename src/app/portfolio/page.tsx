'use client'
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { projectsData } from "../data/projects";
import ProjectPopup from "../components/ProjectPopup";
import { ProjectCardsType } from "../types/Projects";

const initialData: ProjectCardsType = {
    title: '',
    description: '',
    link: '',
    repolink: '',
    video: '',
    image: '',
    onClick: (value: string) => {}
}

const PortfolioPage = () => {
    const [openProject, setProject] = useState<ProjectCardsType>(initialData)

    const openWindow = (e: string): void => {
        let openData = projectsData.find(o => o.title === e)
        if(openData) setProject(openData)
    }

    const closeWindow = () => {
        setProject(initialData)
    }

    return (
        <div id="projects">
            {projectsData.map((i, key)=> {
                return  <ProjectCards {...i} onClick={(value: string) => openWindow(value)}/>
                
            })}
            {openProject.title != '' &&
                <ProjectPopup {...openProject} onClose={() => closeWindow()}/>
            }
        <style jsx>
            {`
            div#projects {
                margin: 10px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                width: 100%;
                position: relative;
            }

            `}
            
        </style>
        </div>
    )
}

export default PortfolioPage;