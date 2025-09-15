'use client'
import { useEffect, useState } from "react";
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
    const [theme, setTheme] = useState(false)

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
                setMsg('error:  ' + error)
            })
            
        }
        if (!pathName?.includes("localhost")) getData()
    }, [pathName])

    const sortData = (value: string) => {
        // check to see who is sorting
        setTag(value)

        console.log('value', value)
        if(value == "reset") setSort(data)
        else if(value == "friend" || value == "family") {
            console.log('in friend or family', value)
            const sorted = data.filter((input)=> input.relation.includes(value))
            console.log('sorted', sorted)
            setSort(sorted)
        }
        else if(value == "manager" || value == "coworker") {
            console.log('in manager or coworker', value)
            const sorted = data.filter((input)=> ((input.relation.includes("manager") || input.relation.includes("coworker"))))
            console.log('sorted', sorted)
            setSort(sorted)
        }
    }

    const changeTheme = () => {
        setTheme(!theme)
    }  

    return (
        <>
        <h2>
            From the Vault:
        </h2>
        {errorMessage &&
            <div>{errorMessage}</div>
        }
        <div id="themes">
            <p>Review Display:</p>
            <Button  text={theme ? "rows" : "carosel"} onClick={()=> changeTheme()}/>
        </div>
        <div id="filter">
            <span>filter reviews by relation:</span>
            <div id="buttons">
                <Button id={activeTag == "family" ? "active" : ""} text="family" onClick={() => sortData('family')}/>
                <Button id={activeTag == "coworker" ? "active" : ""}  text="coworker" onClick={()=>sortData('coworker')}/>
                <Button id={activeTag == "friend" ? "active" : ""}  text="friend" onClick={()=> sortData('friend')}/>
                <button disabled={activeTag == "reset" ? true : false} id="resetButton" onClick={()=> sortData('reset')}>reset</button>
            </div>
        </div>
        <div id={`review-theme-${theme}`}>
        {sortedData.length > 0 &&
            sortedData.map((key, index)=> (
                <Review key={index} {...key}/>
            ))
        }
        {pathName?.includes("localhost") && fakeData.map((key, index)=> (
                <Review key={index} {...key}/>
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
                #themes {
                    text-align: center;
                }
                #filter {
                    width: 100%;
                    text-align: center;
                }
                #review-theme-false {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    align-items: center;
                }
                #review-theme-true {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    animation: horizontalLoop 20s linear infinite;
                }
                @keyframes horizontalLoop {
                    0% {
                        transform: translateX(0px);
                    }
                    100% {
                        transform: translateX(-1000px);
                    }
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