'use client'

import { ProjectCardsType } from "../types/Projects";

interface Props extends ProjectCardsType {
    onClose: () => void
}

const ProjectPopup:React.FC<Props> = (props: Props) => {
    const {title, description, link, repolink, video, image, techStack, onClose} = props

    const closeWindow = () => {
        onClose()
    }

    return (
        <div className="popup-window">
            <button onClick={() => closeWindow()}>x</button>


        <style jsx>
            {`
            div.popup-window {
                position: absolute;
                height: 500px;
                width: 200px;
                background-color: peachpuff;
                border: 1px solid black;
            }

            
            `}
        </style>
        </div>
    )
}

export default ProjectPopup;