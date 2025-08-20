'use client'
import { SVGType } from "../types/SVGS";
import Button from "./Button";

const SVGCard:React.FC<SVGType> = (props: SVGType) => {
    const {title, image} = props

    return (
        <div className="svg-body">
            <h3>{title}</h3>
            <img src={`${image}`} width="100px" height="100px"></img>
            <a href={`${image}`} download={`${title}`}>
                <Button text="download"/> 
            </a>
            <style jsx>
                {`
                div.svg-body {
                    box-shadow: 2px 2px 10px peachpuff;
                    width: 170px;
                    border-radius: 10px;
                    // border: 1px solid black;
                    padding: 10px;
                    margin: 20px;
                    text-align: center;
                    transition: top ease 0.5s;
                    background-color: wheat;
                }
                div.svg-body:hover {
                    box-shadow: 2px 2px 10px peachpuff, 4px 4px 10px pink;
                    position: relative;
                    top: -1px;
                }    
                h3 {
                    min-height: 40px;
                }
                .svg-body > a, button {
                    display: flex;
                    justify-content: center;
                }
                img {
                    margin: 10px;
                }
                a {
                    text-decoration: none;
                }
                `}
            </style>
        </div>
    )
}

export default SVGCard;