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


type Review = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
}

const initialReview: Review = {
    name: "",
    review: "",
    date: '',
    relation: '',
    company: ''
}

const ReviewsPage:React.FC = () => {
    const [data, setData] = useState<Review[] | []>([])
    const [carosel, setCarosel] = useState(0)
    const pathName = process.env.BASE_URL
    const [errorMessage, setMsg] = useState('')

    useEffect(()=> {
        // on load get that data!!
        let carosel = (fakeData.length-1.5) * 250
        setCarosel(carosel)
        async function getData () {
            await fetch(`${pathName}/server/getdata`)
            .then(async (data)=> {
                if(data.status != 200){
                    setMsg('error getting data ')
                }
                const res = await data.json()
                console.log('res', res.data)
                setData(res.data)
            })
            .catch((error) => {
                setMsg('error:  ' + error )
            })
            
        }
        if (!pathName?.includes("localhost")) getData()
    }, [])

    return (
        <>
        <h2>
            From the Vault:
        </h2>
        {errorMessage &&
            <div>{errorMessage}</div>
        }
        {/* <div id="filter">
            <span>filter reviews by relation:</span>
            <div id="buttons">
                <Button text="family" onClick={()=> console.log()}/>
                <Button text="coworkers" onClick={()=> console.log()}/>
                <Button text="friends" onClick={()=>console.log()}/>
            </div>
        </div> */}
        <div id="reviews">
        {data.length > 0 &&
            data.map((key, index)=> (
                <Review carosel={carosel} name={key.name} review={key.review} date={key.date} relation={key.relation} company={key.company}/>
            ))
        }
        {data.length == 0 && fakeData.map((key, index)=> (
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
                h2 {
                    text-align: center;
                    margin: 5px;
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
                    justify-content: flex-end;
                }
            }
            `}
        </style>
        </>
    )
}

export default ReviewsPage;