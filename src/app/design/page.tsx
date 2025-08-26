'use client'
import SVGCard from "../components/SVGCard"
import { svgData } from "../data/svgs"

const DesignPage:React.FC = () => {
    return (
        <div id="design-body">
            {/* <h2>Design !</h2>
            <hr/> */}
            <h2>SVG Icons</h2>
            <hr/>
            {/* <div>
                <button>utility</button>
                <button>characters</button>
            </div> */}
            <div className="svgs">
            {svgData.map((i)=> {
                return (
                    <SVGCard {...i}/>
                )
            })}
            </div>
            <style jsx>
                {`
                h2 {
                    margin: 5px;
                }
                div#design-body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .svgs {
                    display: flex;
                    margin: 0 80px;
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