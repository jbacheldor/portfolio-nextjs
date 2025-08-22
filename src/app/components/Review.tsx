'use client'

import { useEffect } from "react"

type Props = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
    carosel: number
}

const Review:React.FC<Props> = ({carosel, name, review, date, relation, company, rating}) => {

    useEffect(()=> {
        carosel= window.innerWidth
    }, [])

    return (
        <div id="review-body">
            <span>{name} - [{relation} from {company}] says:</span>
            <div>{review}</div>
            <div id="bottom-section">
                <span>{rating}/5</span>
                <span>Submitted on: {date}</span>
            </div>
        <style jsx>
            {`
            div#review-body {
                background-color: pink;
                border-radius: 20px;
                height: 100%;
                min-width: 250px;
                min-height: 100px;
                text-align:center;
                padding: 10px;
                margin: 10px;
                // transition: animation 200ms;
                animation: horizontalLoop 20s linear infinite;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
            }
            div#bottom-section {
                display: flex;
                justify-content: space-between;
            }
            @keyframes horizontalLoop {
                0% {
                    transform: translateX(0px);
                }
                100% {
                    // transform: translateX(-100px)
                    transform: translateX(-${carosel}px)
                }
            `}
        </style>
        </div>
    )
}

export default Review;