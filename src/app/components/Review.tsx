'use client'

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

    // useEffect(()=> {
    //     carosel= window.innerWidth
    // }, [])

    return (
        <div className="reviewbody">
            <span>{name} - [{relation} from {company}] says:</span>
            <div>{review}</div>
            <div className="bottomsection">
                <span>{rating}/5</span>
                <span>Submitted on: {date}</span>
            </div>
            <style jsx>
                {`
                .reviewbody {
                    background-color: peachpuff;
                    border-radius: 20px;
                    height: 100%;
                    min-width: 250px;
                    min-height: 100px;
                    text-align:center;
                    padding: 10px;
                    margin: 10px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                }
                .bottomsection {
                    display: flex;
                    justify-content: space-between;
                }

            `}

            </style>
        </div>

    )
}

export default Review;