import SVGCard from "../components/SVGCard"
import { svgData } from "../data/svgs"
import styles from './design.module.css'

const DesignPage:React.FC = () => {
    return (
        <div className={styles.designbody}>
            <h2 className={styles.h2}>SVG Icons</h2>
            <hr/>
            <div className={styles.svgs}>
            {svgData.map((i)=> {
                return (
                    <SVGCard {...i}/>
                )
            })}
            </div>
        </div>
    )
}

export default DesignPage