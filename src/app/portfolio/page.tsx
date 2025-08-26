'use client'
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { projectsData } from "../data/projects";
import ProjectPopup from "../components/ProjectPopup";
import { ProjectCardsType } from "../types/Projects";
import styles from './portfolio.module.css'

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
        <div className={styles.projectbody}>
            <h2 className={styles.h2}>Discography</h2>
            <hr/>
            <div className={styles.projects}>
            {projectsData.map((i, key)=> {
                return  <ProjectCards {...i} onClick={(value: string) => openWindow(value)}/>
                
            })}
            {openProject.title != '' &&
                <ProjectPopup {...openProject} onClose={() => closeWindow()}/>
            }
            </div>
        </div>
    )
}

export default PortfolioPage;