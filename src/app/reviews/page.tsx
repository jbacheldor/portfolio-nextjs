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
    const [indexDB, setIndexDB] = useState<IDBPDatabase>()
    const [loading, setLoading] = useState(true);

    // if it's been more than an hour then system can disregard cache
    const queryExpired =  async (test: IDBPDatabase) => {
        console.log('indexDB', await indexDB)
        
        const timestamp = await test.transaction('reviews').objectStore('reviews').get('timestamp')
        console.log('timestamp', timestamp)
        if(timestamp == null) return true

        console.log('timestamp', timestamp)
        var now = new Date().getTime()
        console.log('now', now)
        console.log('calculating,,,, ', ((now - timestamp)/1000/60) > 60)
        // if it's been more than 60 minutes return true that query has expired 
        if(((now - timestamp)/1000/60) > 60) return true 
        // else return false and keep using data in indexdb
        else return false
    }
 
    async function getData(test: IDBPDatabase, override: boolean = false) {
        const expired = await queryExpired(test)

        console.log('what is override', override)
        console.log('what is result', expired)

        // if the data is expired or if has been overriden by new submission,,, query new data!
        if(override || expired) {
            console.log('what the h is it working do we bop in here')
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
                await putDataIndexDB(res.data, test)
            })
            .catch((error) => {
                console.log(error)
                setMsg('error getting reviews from server')
            })  
        } else {
            console.log('are we in here???')
            const transaction = test.transaction(["jbxlu"], "readwrite");
            console.log('trans', transaction)
            const item = await transaction.objectStore('reviews').get('data')
            console.log('item', item)
            setData(item)
            setSort(item)
        }
    } 

    async function putDataIndexDB (data: any, test: IDBPDatabase) {
        const rw = test.transaction(['reviews'], 'readwrite')
        const store = await rw.objectStore('reviews')
        data.forEach((review: any)=> {
            console.log('review??', review)
            store.add(review, review.id)
        })

        await Promise.all([store.put('timestamp', new Date().getTime()), rw.done]);
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

    // https://www.freecodecamp.org/news/a-quick-but-complete-guide-to-indexeddb-25f030425501/
    async function deleteIndexDB(){
        const storeName = 'reviews'
        // adds in data
        const rw = indexDB.transaction(storeName, 'versionchange')
        const store = await rw.objectStore(storeName)

        // to delete from store, to delete timestamp, and to delete the data
        await Promise.all([store.delete('data'), store.delete('timestamp'), rw.done]);
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
            <div>{errorMessage}</div>
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
                <img id="spin-img" src={"/svgs/spin.svg"} width="150px" height="150px"/>
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