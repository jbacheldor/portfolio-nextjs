'use client'

type Props = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
    carosel?: number
}

const Review:React.FC<Props> = ({ name, review, date, relation, company, rating}) => {

    // useEffect(()=> {
    //     carosel= window.innerWidth
    // }, [])

    return (
        <div className="reviewbody">
            <div className='top-section'><span>{name} - {relation} from {company} says:</span></div>
            <div className="review">{review}</div>
            <div className="bottomsection">
                <span>{rating && <p>{rating}/5</p>}</span>
                <span>Submitted on: {date}</span>
            </div>
            <style jsx>
                {`
                .reviewbody {
                    background-color: peachpuff;
                    border-radius: 20px;
                    height: 100%;
                    min-width: 300px;
                    min-height: 100px;
                    max-width: 300px;
                    text-align:center;
                    padding: 10px;
                    margin: 10px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                }
                .review {
                    margin: 10px;
                }
                .bottomsection {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 550;
                }
                .top-section {
                    text-align: left;
                    font-weight: 550;
                }

            `}

            </style>
        </div>

    )
}

export default Review;