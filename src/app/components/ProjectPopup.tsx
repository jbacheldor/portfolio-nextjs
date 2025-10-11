import { ProjectCardsType } from "../types/Projects";
import Button from "./Button";
import styles from './components.module.css'

interface Props extends ProjectCardsType {
    onClose: () => void
}

const ProjectPopup:React.FC<Props> = (props: Props) => {
    const {title, description, link, repolink, image, techStack, onClose} = props

    const closeWindow = () => {
        onClose()
    }

    const openLink = (link: string) => {
        window.open(link, "_blank");
    }

    return (
        <div className={styles.popupwindow}>
            <div className={styles.projectbanner}>
                <h4>{title}</h4>
                <button className={styles.closebutton} onClick={() => closeWindow()}>x</button>
            </div>
            <div className={styles.popimg}>
                <img width="45%" height="45%" alt="picture of project but larger" src={`${image}`}/>
            </div>
            <div className={styles.techstack}>
                {techStack?.map((key, index)=> (
                    <div key={index} className={styles.techButton}>{key}</div>
                ))}
            </div>
            <div className={styles.description} dangerouslySetInnerHTML={{__html: description}}/>
            <div className={styles.buttons}>
                <Button text="codebase" onClick={()=>openLink(repolink)}/>
                <Button text="website" onClick={()=>openLink(link)}/>
            </div>
        </div>
    )
}

export default ProjectPopup;