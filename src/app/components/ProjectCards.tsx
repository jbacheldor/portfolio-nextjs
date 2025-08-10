'use client'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ProjectCards as ProjectCardType } from '../types/Projects'

const ProjectCards:React.FC<ProjectCardType> = (props: ProjectCardType) => {
    const {link, title, description} = props
    const techStack = ["nextjs", "ts", "vercel"]
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

            </div>
            <div className="techbuttons">
                {techStack.map((i, key)=>{
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
                width: 300px;
                margin: 10px;
                height: 300px;
                background-color: pink;
            }
            .project-title {
                text-align: center;
                padding: 5px;
            }
            .project-main {
                background-color: white;
                margin: 10px;
                height: 150px;
                border-radius: 5px;
                border: 1 solid black;
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
                color: white;
                background-color: purple;
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