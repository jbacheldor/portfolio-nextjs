'use client'
import { useEffect, useState } from "react";
import Review from "../components/Review";
import SubmitReview from "../components/SubmitReview";
import { fakeData } from "../data/localData";
import Button from "../components/Button";
import { openDB } from "idb";
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
    const [indexDB, setIndexDB] = useState<any>()

    // if it's been more than an hour then system can disregard cache
    const calculateTime =  async () => {
        const timestamp = await indexDB.transaction('reviews').objectStore('reviews').get('timestamp')
        var now = new Date().getTime()
        if(((now - timestamp)/1000/60) > 60) return true 
        else return false
    }
 
    async function getData (override: boolean = false) {
        const result = calculateTime()

        // if it hasn't been less than an hour 
        // also wait - use case - for what if nothing is in there 
        // so if //// gotten think upon this
        if(!result && !override) {
            const item = await indexDB.transaction('reviews').objectStore('reviews').get('data')
            setData(item)
            setSort(item)
        }
        else {
            await fetch(`${pathName}/server/getdata`)
            .then(async (data)=> {
                if(data.status != 200){
                    setMsg('error getting data ')
                }
                const res = await data.json()
                // save data locally
                setData(res.data)
                setSort(res.data)

                // save data in indexdb
                await putDataIndexDB(res.data)
            })
            .catch((error) => {
                setMsg('error:  ' + error)
            })    
        }
    } 

    async function putDataIndexDB (data: any) {
        const rw = indexDB.transaction('reviews', 'readwrite')
        const store = await rw.objectStore('reviews')
        await store.put('data', data)
        await store.put('timestamp', new Date().getTime())
        await rw.done
    }

    // also if someone submits then need to invalidate cache and refetch data 
    // // maybe think about putting in some rate limits as well
    const refreshData = () => {
        getData(true)
    }

    async function initIndexDB(){
        const dbName = 'jbxlu'
        const storeName = 'reviews'
        const version = 1 //versions start at 1

        // checks if store is created yet - if not it creates it
        // reallllly need to revisit this like tomorrow morning
        // when i am feeling jazzed about documentation
        const db = await openDB(dbName, version, {
            upgrade(db, oldVersion, newVersion, transaction) {
            const store = db.createObjectStore(storeName)
            }
        })

        setIndexDB(db)
    }

    // https://www.freecodecamp.org/news/a-quick-but-complete-guide-to-indexeddb-25f030425501/
    async function deleteIndexDB(){
        const storeName = 'reviews'
        // adds in data
        const rw = indexDB.transaction(storeName, 'readwrite')
        const store = await rw.objectStore(storeName)

        // to delete from store
        await store.delete('data')
        await store.delete('timestamp')
        await rw.done
    }

    useEffect(()=> {
        // if not local host then call getData
        if (!pathName?.includes("localhost")) {
            initIndexDB()
            getData()
        }
    }, [pathName])

    const sortData = (value: string) => {
        // check to see who is sorting
        setTag(value)

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
            <SubmitReview onSubmit={refreshData}/>
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
                    // cursor: not-allowed;
                    top: 0;
                }
            }
            `}
        </style>
        </>
    )
}

export default ReviewsPage;