'use client'

import { Html } from "next/document";
import { ProjectCardsType } from "../types/Projects";
import Button from "./Button";

interface Props extends ProjectCardsType {
    onClose: () => void
}

const ProjectPopup:React.FC<Props> = (props: Props) => {
    const {title, description, link, repolink, video, image, techStack, onClose} = props

    const closeWindow = () => {
        onClose()
    }

    const openLink = (link: string) => {
        window.open(link, "_blank");
    }

    return (
        <div className="popup-window">
            <div id="project-banner">
                <h4>{title}</h4>
                <button onClick={() => closeWindow()}>x</button>
            </div>
            <div id="project-img">
                <img src={`${image}`} width="60%" height="60%"/>
            </div>
            <div id="tech-stack">
                {techStack?.map((key, index)=> (
                    <Button text={key}  onClick={()=>console.log()}/>
                ))}
            </div>
            <div id="description" dangerouslySetInnerHTML={{__html: description}}/>
            <div id="buttons">
                <Button text="codebase" onClick={()=>openLink(repolink)}/>
                <Button text="website" onClick={()=>openLink(link)}/>
            </div>


        <style jsx>
            {`
            div.popup-window {
                position: absolute;
                // height: 500px;
                width: 500px;
                background-color: peachpuff;
                border: 1px solid black;
            }
            #project-img {
                text-align: center;
            }
            #project-banner {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 10px;
            }
            #buttons {
                display: flex;
                justify-content: space-around;
            }
            #tech-stack {
                display: flex;
                justify-content: space-around;
            }
            #description {
                margin: 5px 10px;
                border: 1px solid black;
                border-radius: 5px;
                padding: 5px;
                background-color: cornsilk;
            }
            button:hover {
                cursor: pointer;
            }
            a {
                text-decoration: underline;
            }

            
            `}
        </style>
        </div>
    )
}

export default ProjectPopup;