import styles from './components.module.css'

type Props = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
    carosel: number
}

const Review:React.FC<Props> = ({name, review, date, relation, company, rating}) => {

    // useEffect(()=> {
    //     carosel= window.innerWidth
    // }, [])

    return (
        <div className={styles.reviewbody}>
            <span>{name} - [{relation} from {company}] says:</span>
            <div>{review}</div>
            <div className={styles.bottomsection}>
                <span>{rating}/5</span>
                <span>Submitted on: {date}</span>
            </div>
        </div>
    )
}

export default Review;