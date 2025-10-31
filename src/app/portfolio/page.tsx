'use client'
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { projectsData } from "../data/projects";
import { ProjectCardsType } from "../types/Projects";
import styles from './portfolio.module.css'
import dynamic from 'next/dynamic';

const initialData: ProjectCardsType = {
    title: '',
    description: '',
    link: '',
    repolink: '',
    video: '',
    image: '',
    onClick: () => {}
}

const PopUpComponent = dynamic(() => import ("../components/ProjectPopup"), {
//   loading: () => <ChartSkeleton />,
  ssr: false // Skip server-side rendering for client-only components
});


const PortfolioPage = () => {
    const [openProject, setProject] = useState<ProjectCardsType>(initialData)

    const openWindow = (e: string): void => {
        const openData = projectsData.find(o => o.title === e)
        if(openData) setProject(openData)
    }

    const closeWindow = () => {
        setProject(initialData)
    }

    return (
        <div className={styles.projectbody}>
            {openProject.title != '' &&
                <PopUpComponent {...openProject} onClose={() => closeWindow()}/>
            }
            <h2 className={styles.h2}>Discography</h2>
            <hr/>
            <div className={styles.projects}>
            {projectsData.map((i, key)=> {
                return  <ProjectCards key={key} {...i} onClick={(value: string) => openWindow(value)}/>
                
            })}
            </div>
        </div>
    )
}

export default PortfolioPage;