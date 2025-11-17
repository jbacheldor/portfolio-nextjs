import GifWrapper from "../components/GifWrapper"
import SVGCard from "../components/SVGCard"
import { gifData, svgData } from "../data/svgs"
import styles from './design.module.css'

const DesignPage:React.FC = () => {
    return (
        <div className={styles.designbody}>
            <h2 className={styles.h2}>Mockups</h2>
            <hr/>
            <div className={styles.mockUp}>
                <h3>Look Book</h3>
                <video className={styles.video}  height="450px" muted autoPlay loop>
                    <source  src={'./websites/open-close.mov'} />
                </video>
                <p>Small project inspired by <a href="https://x.com/samdape/status/1936518319462367609">Samuel Pietz</a> for holding graphic design things.</p>
                <p>Check it out <a href="https://www.figma.com/proto/1GHsBPSYkvYI3FtpYItzmg/look-book?page-id=0%3A1&node-id=1-3&p=f&viewport=-858%2C458%2C0.28&t=70ztOSi91PC210dp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1">here</a></p>
            </div>
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