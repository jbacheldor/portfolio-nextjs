'use client'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ProjectCardsType } from '../types/Projects'

interface Props extends ProjectCardsType {
    onClick: (value: string) => void
}

const ProjectCards:React.FC<Props> = (props: Props) => {
    const {link, title, description, techStack, repolink, image, onClick} = props

    // const openProject = () => {
    //     redirect(`/${link}`)
    // }

    const clickRegistered = () => {
        onClick(title)
    }

    return (
        <div className="project-body" onClick={()=> clickRegistered()}>
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
            <div id="project-description" dangerouslySetInnerHTML={{__html: description}}/>

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
            #project-description {
                margin: 10px;
                font-size: small;
                text-overflow: ellipsis;
                overflow: hidden;
                height: 70px;
                border: 1px solid black;
                border-radius: 5px;
                padding: 5px;
                background-color: cornsilk;
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
            a {
                text-decoration: underline;
            }

            `}
        </style>
        </div>
    )
}

export default ProjectCards;