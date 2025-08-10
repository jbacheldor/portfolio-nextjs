import Review from "../components/Review";


const ReviewsPage:React.FC = () => {

    return (
        <>
        <h1>
            from the vault:
        </h1>
        <div>
            <span>want to filter my reviews???</span>
            <button>family</button>
            <button>coworkers</button>
            <button>friends & roommates</button>
        </div>
        <Review name={"Joe"} review={"jess is soo stellar and cool"} date={"today"} relation={"manager"} company={"GE"}/>
        <div>
            want to submit your own review ????? 
        </div>
        </>
    )
}

export default ReviewsPage;