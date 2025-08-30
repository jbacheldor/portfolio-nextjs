'use client'
import { act, useEffect, useState } from "react";
import Review from "../components/Review";
import SubmitReview from "../components/SubmitReview";
import { fakeData } from "../data/localData";
import Button from "../components/Button";

type Review = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
}

// const initialReview: Review = {
//     name: "",
//     review: "",
//     date: '',
//     relation: '',
//     company: ''
// }

const ReviewsPage:React.FC = () => {
    const [data, setData] = useState<Review[] | []>([])
    const [carosel, setCarosel] = useState(0)
    const pathName = process.env.BASE_URL
    const [errorMessage, setMsg] = useState('')
    const [sortedData, setSort] = useState<Review[] | []>([])
    const [activeTag, setTag] = useState('reset')

    useEffect(()=> {
        const carosel = (fakeData.length-1.5) * 250
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
                setSort(res.data)
            })
            .catch((error) => {
                setMsg('error:  ' + error )
            })
            
        }
        if (!pathName?.includes("localhost")) getData()
    }, [pathName])

    const sortData = (value: string) => {
        // check to see who is sorting
        setTag(value)

        if(value == "reset") setSort(data)
        else if(value == "friends" || value == "family") {
            let sorted = data.filter((input)=> input.relation.includes(value))
            setSort(sorted)
        }
        else if(value == "manager" || value == "coworker") {
            let sorted = data.filter((input)=> (input.relation.includes("manager") || input.relation.includes("coworker")))
            setSort(sorted)
        }
    }

    return (
        <>
        <h2>
            From the Vault:
        </h2>
        {errorMessage &&
            <div>{errorMessage}</div>
        }
        <div id="filter">
            <span>filter reviews by relation:</span>
            <div id="buttons">
                <Button id={activeTag == "family" ? "active" : ""} text="family" onClick={() => sortData('family')}/>
                <Button id={activeTag == "coworkers" ? "active" : ""}  text="coworkers" onClick={()=>sortData('coworkers')}/>
                <Button id={activeTag == "friends" ? "active" : ""}  text="friends" onClick={()=> sortData('friends')}/>
                <button disabled={activeTag == "reset" ? true : false} id="resetButton" onClick={()=> sortData('reset')}>reset</button>
            </div>
        </div>
        <div id="reviews">
        {sortedData.length > 0 &&
            data.map((key, index)=> (
                <Review key={index} carosel={carosel} name={key.name} review={key.review} date={key.date} relation={key.relation} company={key.company}/>
            ))
        }
        {pathName?.includes("localhost") && fakeData.map((key, index)=> (
                <Review key={index} carosel={carosel} name={key.name} review={key.review} date={key.date} relation={key.relation} company={key.company}/>
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
                #resetButton {
                    text-decoration: none;
                    padding: 10px;
                    margin: 10px;
                    border-radius: 20px;
                    background-color: pink;
                    box-shadow: 2px 2px 10px pink;
                    color: chocolate;
                    border: none;
                    font-weight: 600;
                }
                #resetButton:hover {
                    cursor: pointer;
                    position: relative;
                    top: -1px;
                    box-shadow: 4px 4px 10px peru, 2px 2px 20px pink;
                }
                #resetButton:disabled {
                    background-color: lightgrey;
                    color: white;
                    box-shadow: none;
                    cursor: not-allowed;
                    top: 0;
                }
            }
            `}
        </style>
        </>
    )
}

export default ReviewsPage;