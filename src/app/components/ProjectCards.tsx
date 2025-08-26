import { ProjectCardsType } from '../types/Projects'
import styles from './components.module.css'
import Image from "next/image";
interface Props extends ProjectCardsType {
    onClick: (value: string) => void
}

const ProjectCards:React.FC<Props> = (props: Props) => {
    const {title, description, techStack, image, onClick} = props

    const clickRegistered = () => {
        onClick(title)
    }

    return (
        <div className={styles.projectbody} onClick={()=> clickRegistered()}>
            <h3 className={styles.projecttitle}>
                {title}
            </h3>
            <div className={styles.projectmain}>
                 
                {image && <Image width={500} height={500} className={styles.projectimg} alt="picture of project" src={image} />}
            </div>
            <div className={styles.techbuttons}>
                {techStack?.map((i, key)=>{
                    return (
                        <div className={styles.techButton} key={key} >{i}</div>
                    )
                })}
            </div>
            <div className={styles.projectdescription} dangerouslySetInnerHTML={{__html: description}}/>

        </div>
    )
}

export default ProjectCards;