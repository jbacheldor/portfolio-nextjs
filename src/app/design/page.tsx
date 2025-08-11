'use client'
import SVGCard from "../components/SVGCard"
import { svgData } from "../data/svgs"

const DesignPage:React.FC = () => {
    return (
        <div id="design-body">
            <h2>Design !</h2>
            <hr/>
            <h3>Websites</h3>
            <hr/>
            <h3>SVG Icons / Digital Art</h3>
            <hr/>
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
                    margin: 10px;
                }
                hr {
                    width: 80%;
                    margin: 5px;
                    height: 5px;
                    border-radius: 5px;
                    background-color: peachpuff;
                    border: none;
                }
                div#design-body {
                    display: flex;
                    flex-direction: column;
                    margin: 0 80px;
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