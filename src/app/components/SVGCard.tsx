'use client'
import Image from "next/image";
import { SVGType } from "../types/SVGS";
import Button from "./Button";
import styles from './components.module.css'

const SVGCard:React.FC<SVGType> = (props: SVGType) => {
    const {title, image} = props

    return (
        <div className={styles.svgbody}>
            <h3>{title}</h3>
            <Image className={styles.svgimg} alt="picture of svg" src={`${image}`} width={100} height={100} />
            <a href={`${image}`} download={`${title}`}>
                <Button text="download"/> 
            </a>
        </div>
    )
}

export default SVGCard;