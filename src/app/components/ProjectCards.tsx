'use client'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ProjectCards as ProjectCardType } from '../types/Projects'

const ProjectCards:React.FC<ProjectCardType> = (props: ProjectCardType) => {
    const {link, title, description, techStack, repolink, image} = props
    const [openProject, setProject] = useState("")

    // const openProject = () => {
    //     redirect(`/${link}`)
    // }

    return (
        <div className="project-body">
            <h3 className="project-title">
                {title}
            </h3>
            <div className='project-main' >
                {image && <img src={image}/>}
            </div>
            <div className="techbuttons">
                {techStack?.map((i, key)=>{
                    return (
                        <div key={key} className='techButton'>{i}</div>
                    )
                })}
            </div>
            <div className='project-description'>
                {description}
            </div>

        <style jsx>
            {`
            div.project-body {
                border: 1px black solid;
                border-radius: 5px;
                width: 400px;
                margin: 10px;
                height: 400px;
                background-color: peachpuff;
            }
            .project-title {
                text-align: center;
                padding: 5px;
            }
            .project-main {
                text-align: center;
                margin: 10px;
                height: 230px;
                border-radius: 5px;
            }
            img {
                width: inherit;
                height: inherit;
                max-height: 230px;
                max-width: 380px;
                overflow: hidden;
                border-radius: 5px;
                border: 1px solid black;
            }
            .project-main:hover {
                cursor: pointer;
            }    
            .project-description {
                margin: 10px;
                font-size: small;
                text-overflow: ellipsis;
                overflow: hidden;
                max-height: 7ch;
            }
            .techbuttons {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            .techButton {
                border-radius: 20px;
                color: chocolate;
                background-color: pink;
                padding: 5px;
                min-width: 60px;
                text-align: center;
                font-size: small;
                font-weight: 600;
            }

            `}
        </style>
        </div>
    )
}

export default ProjectCards;