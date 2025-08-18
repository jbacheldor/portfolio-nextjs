'use client'
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Review from "../components/Review";
import SubmitReview from "../components/SubmitReview";

const fakeData = [
    {   name: "Joe",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'manager',
        company: 'ge'
    },
    {   name: "Daniel",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
    {   name: "Derartu",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
    {   name: "Sam",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
    {   name: "Dave",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
    {   name: "xx",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
        {   name: "one",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
    {   name: "two",
        review: "jess is soo stellar and cool",
        date: 'today',
        relation: 'coworker',
        company: 'ge'
    },
]

const ReviewsPage:React.FC = () => {
    const [data, setData] = useState([])
    const [carosel, setCarosel] = useState(0)

    useEffect(()=> {
        // on load get that data!!
        let carosel = (fakeData.length-1.5) * 250
        setCarosel(carosel)
    }, [])

    return (
        <>
        <h1>
            from the vault:
        </h1>
        <div id="filter">
            <span>filter reviews by relation:</span>
            <div id="buttons">
                <Button text="family" onClick={()=> console.log()}/>
                <Button text="coworkers" onClick={()=> console.log()}/>
                <Button text="friends" onClick={()=>console.log()}/>
            </div>
        </div>
        <div id="reviews">
        {fakeData.map((key, index)=> (
                <Review carosel={carosel} name={key.name} review={key.review} date={key.date} relation={key.relation} company={key.company}/>
            ))
            }
        </div>

        <hr/>
        <div>
            <SubmitReview/>
        </div>
        <style jsx>
            {`
                hr {
                    margin: 10px 0;
                }
                h1 {
                    text-align: center;
                }
                buttons {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                #filter {
                    width: 100%;
                    text-align: center;
                }
                #reviews {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
            }
            `}
        </style>
        </>
    )
}

export default ReviewsPage;