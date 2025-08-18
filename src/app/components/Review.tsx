'use client'

type Props = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
    continues?: string,
    considers?: string
}

const Review:React.FC<Props> = ({name, review, date, relation, company, rating}) => {

    return (
        <div id="review-body">
            <span>{name} - [{relation} from {company}] says:</span>
            <div>{review}</div>
            <div>
                <span>continues:</span>
                <span>considers:</span>
            </div>
            <div id="bottom-section">
                <span>{rating}/10</span>
                <span>Submitted on: {date}</span>
            </div>
        <style jsx>
            {`
            div#review-body {
                background-color: pink;
                border-radius: 20px;
                min-width: 250px;
                text-align:center;
                padding: 10px;
                margin: 10px;
            }
            div#bottom-section {
                display: flex;
                justify-content: space-between;
            }
            `}
        </style>
        </div>
    )
}

export default Review;