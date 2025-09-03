import GifWrapper from "../components/GifWrapper"
import SVGCard from "../components/SVGCard"
import { gifData, svgData } from "../data/svgs"
import styles from './design.module.css'

const DesignPage:React.FC = () => {
    return (
        <div className={styles.designbody}>
            <h2 className={styles.h2}>SVG Icons</h2>
            <hr/>
            <div className={styles.svgs}>
            {svgData.map((i, key)=> {
                return (
                    <SVGCard key={key} {...i}/>
                )
            })}
            </div>
            <hr/>
            <h2 className={styles.h2}>Animations</h2>
            <hr/>
            {gifData.map((i, key) => {
                return (<GifWrapper key={key} {...i}/>)
            })}
        </div>
    )
}

export default DesignPage