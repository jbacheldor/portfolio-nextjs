'use client'
import { SVGType } from "../types/SVGS";
import Button from "./Button";
import styles from './components.module.css'

const SVGCard:React.FC<SVGType> = (props: SVGType) => {
    const {title, image} = props

    return (
        <div className={styles.svgbody}>
            <h3>{title}</h3>
            <img className={styles.svgimg} src={`${image}`} width="100px" height="100px"></img>
            <a href={`${image}`} download={`${title}`}>
                <Button text="download"/> 
            </a>
        </div>
    )
}

export default SVGCard;