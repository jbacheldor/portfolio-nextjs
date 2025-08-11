'use client'
import SVGCard from "../components/SVGCard"
import { svgData } from "../data/svgs"

const DesignPage:React.FC = () => {
    return (
        <div id="design-body">
            <h2>Design!!!</h2>
            <h3>Sewing</h3>
            <h3>Photography</h3>
            <h3>SVG Icons / Digital Art</h3>
            <div className="svgs">
            {svgData.map((i)=> {
                return (
                    <SVGCard {...i}/>
                )
            })}
            </div>
            <h3>Websites</h3>
            <style jsx>
                {`
                div#design-body {
                    display: flex;
                    flex-direction: column;
                    margin: 100px;
                    align-items: center;
                }
                .svgs {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                }
                `}
            </style>
        </div>
    )
}

export default DesignPage