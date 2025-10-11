'use client'
import { useEffect, useState } from "react";
import Review from "../components/Review";
import SubmitReview from "../components/SubmitReview";
import { fakeData } from "../data/localData";
import Button from "../components/Button";
import { IDBPDatabase, openDB } from "idb";
type Review = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating?: number,
    id?: number,
}

// const initialReview: Review = {
//     name: "",
//     review: "",
//     date: '',
//     relation: '',
//     company: ''
// }


type ibdDataObj = Review[]

const ReviewsPage:React.FC = () => {
    const [data, setData] = useState<Review[] | []>([])
    // const [carosel, setCarosel] = useState(0)
    const pathName = process.env.BASE_URL
    const [errorMessage, setMsg] = useState('')
    const [sortedData, setSort] = useState<Review[] | []>([])
    const [activeTag, setTag] = useState('reset')
    const [theme, setTheme] = useState(false)
    const [indexDB, setIndexDB] = useState<IDBPDatabase>()
    const [loading, setLoading] = useState(true);

    // if it's been more than an hour then system can disregard cache
    const queryExpired =  async (test: IDBPDatabase) => {
        console.log('indexDB', await indexDB)
        
        const timestamp = await test.transaction('reviews').objectStore('reviews').get('timestamp')
        if(timestamp == null) return true

        const now = new Date().getTime()

        // if it's been more than 60 minutes return true that query has expired 
        if(((now - timestamp)/1000/60) > 60) return true 
        // else return false and keep using data in indexdb
        else return false
    }
 
    async function getData(test: IDBPDatabase, override: boolean = false) {
        const expired = await queryExpired(test)

        // if the data is expired or if has been overriden by new submission,,, query new data!
        if(override || expired) {
            await fetch(`${pathName}/server/getdata`)
            .then(async (data)=> {
                if(data.status != 200){
                    setMsg('error getting data')
                }
                const res = await data.json()
                // save data locally
                setData(res.data)
                setSort(res.data)
                setLoading(false)

                // save data in indexdb
                // should separate this try catch fr
                await putDataIndexDB(res.data, test)
            })
            .catch((error) => {
                console.log(error)
                setMsg('error getting reviews from server')
            })  
        } else {
            const transaction = test.transaction(['reviews'], "readwrite");
            const item = await transaction.objectStore('reviews').get('data')
            // const res = unassign(item)

            const newData = []
            for (const key in item) {
                newData.push(item[key])
            }
            setData(newData)
            setSort(newData)
            setLoading(false)
        }
    } 

    // const unassign = (data: any) => {
    //     const newData = []
    //     for (const key in data) {
    //         newData.push(data[key])
    //     }
    //     return newData
    // }

    async function putDataIndexDB (data: ibdDataObj, test: IDBPDatabase) {
        const rw = test.transaction(['reviews'], 'readwrite')
        const store = await rw.objectStore('reviews')

        const objData = Object.assign({}, data); 
        store.add(objData, 'data')

        await Promise.all([store.put(new Date().getTime(), 'timestamp'), rw.done]);
    }

    // also if someone submits then need to invalidate cache and refetch data 
    // // maybe think about putting in some rate limits as well
    const refreshData = () => {
        console.log('in refresh data')
        // getData(true)
    }

    async function initIndexDB(){
        const dbName = 'jbxlu'
        // const storeName = 'reviews'
        
        const db = await openDB(dbName, 1, {
            upgrade(db) {
                db.createObjectStore('reviews');
            }
        })
        console.log('initializing db', db)
        setIndexDB(db)
        return db
    }

    useEffect(()=> {
        async function launch() {
            const test = await initIndexDB()
            await getData(test)
        }
        // if not local host then call getData
        if (pathName?.includes("localhost")) {
            launch()
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
            <div id="error-msg"><p>{errorMessage}</p></div>
        }
        <div id="themes">
            <p>Review Display:</p>
            <Button  text={theme ? "rows" : "carosel"} disabled={loading ? true : false} onClick={()=> changeTheme()}/>
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
        {loading && 
            <div id='loader'>
                <img alt="loading content" id="spin-img" src={"/svgs/spin.svg"} width="150px" height="150px"/>
                {/* <img id="spin-img" src={"/md-star.svg"} width="100px" height="100px"/> */}
                <span id='load-words'></span>
            </div>
            }
        {!loading && sortedData.length > 0 &&
            sortedData.map((key, index)=> (
                <Review key={index} {...key}/>
            ))
        }
        {/* {pathName?.includes("localhost") && fakeData.map((key, index)=> (
                <Review key={index} {...key}/>
            ))
            } */}
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
                #error-msg {
                    width: 100%;
                    text-align: center;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                }
                #error-msg > p {
                    padding: 10px;
                    border: 1px solid black;
                    border-radius: 10px;
                    color: red;
                    width: fit-content;
                    margin: 10px;
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
                #loader {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 10px;
                    width: 100%;
                    align-items: center;
                }
                #spin-img {
                    animation: spin 5s linear infinite;
                    padding: 10px;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                #load-words::before {
                    content: 'fetching reviews';
                    animation:  load-slow linear 2.5s infinite;
                }
                @keyframes load-slow {
                    0% {content: 'fetching reviews';}
                    25% {content: 'fetching reviews.';}
                    50% {content: 'fetching reviews..';}
                    100% {content: 'fetching reviews...';}
                }
            }
            `}
        </style>
        </>
    )
}

export default ReviewsPage;