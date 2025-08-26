'use client'

import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import Image from "next/image"
import { sanitize } from "../utils"

type formType = {
    name: string,
    review: string,
    date: string,
    relation: string,
    company: string,
    rating: number,
}

const initialForm = {
    name: "",
    review: "",
    date: "",
    relation: "",
    company: "",
    rating: 0,
}

const SubmitReview:React.FC = () => {
    const [form, setForm] = useState<formType>(initialForm)
    const pathName = process.env.BASE_URL
    const [errorMsg, setMsg] = useState('')
    const stars = useRef<Array<HTMLDivElement | null>>([]);

    const updateState = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.ariaLabel as string] : sanitize(e.target.value)
        })
    }

    useEffect(()=> {
        stars.current = stars.current.slice(0, 5);
    }, [])


    const changeRating = (e: React.MouseEvent<HTMLElement>) => {
        const num = Number((e.target as HTMLInputElement).ariaLabel)
        // for each item go through and update the filter color
        stars.current.map((item, index)=> {
            if(item && index <= num){
                const ref = item
                ref.style.filter = " brightness(0) saturate(100%) invert(46%) sepia(69%) saturate(586%) hue-rotate(343deg) brightness(91%) contrast(95%)"
            }
            else if (item && index > num) {
                const ref = item
                ref.style.filter = ""
            }
        })
        setForm({
            ...form,
            rating: num+1
        })

    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        const today = new Date(Date.now()).toDateString()
        console.log('today', today)
        setForm({
            ...form,
            date: today
        })

        e.preventDefault();

        await fetch(`${pathName}/server/submitdata`, 
            {method: "POST",
            body: JSON.stringify(form)
            }
        )
        .then(async (response)=> {
            if(response.status == 200) {
                setMsg('WAHOOOO success')
                setForm(initialForm)
                stars.current.forEach((item)=> {
                    if(item) item.style.filter = ""
                })
            }
        })
        .catch((error) => {
            console.log('error', error)
            setMsg('weeehwooo error')
        })

    }

    return (
        <div id='submit-body'>
            <form onSubmit={(e)=>submitForm(e)}>
                {errorMsg && 
                <div id="msg">{errorMsg}</div>
                }
                <h4>submit your own review!</h4>
                <label>
                    <span>name</span>
                    <input aria-label="name" value={form.name} onChange={(e)=> updateState(e)}></input>
                </label>
                <label>
                    <span>review</span>
                    <textarea aria-label="review" value={form.review} onChange={(e)=> updateState(e)}/>
                </label>
                <label>
                    <span>company</span>
                    <input aria-label="company"  value={form.company}  onChange={(e)=> updateState(e)}></input>
                </label>
                <label>
                    <span>relation</span>
                    <input aria-label="relation" value={form.relation}  onChange={(e)=> updateState(e)}></input>
                </label>
                <label id="stars">
                    <span>rating</span>
                    <div>
                    {Array.from({length: 5}).map((item, index)=> (
                        <Image alt={`${index}-star`}  key={`${index}-star`} ref={el => {stars.current[index] = el}}  onClick={(e)=>changeRating(e)} aria-label={`${index}`} src={"/md-star.svg"} height="30" width="30"/>
                    ))}
                    </div>
                </label>
                <Button text="submit"/>
            </form>
            <style jsx>
                {`
                #submit-body {
                    display: flex;
                    justify-content: center;
                }
                #msg {
                    color: green;
                    font-weight: 700;
                    border: 1px black solid;
                    padding: 5px;
                    background-color: linen;
                    border-radius: 10px;
                }
                h4 {
                    padding: 5px;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: peachpuff;
                    border: 1px solid black;
                    padding: 10px;
                    border-radius: 5px;
                    width: 250px;
                }
                input, textarea {
                    width: 100%;
                    padding: 3px;
                    font-family: Arial;
                    border: 2px pink solid;
                }
                input:focus ,textarea:focus {
                    text-decoration: none;
                    outline: none;
                    box-shadow: 2px 2px 10px pink;
                }
                label {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 5px;
                }
                label#stars {
                    text-align: center;
                    width: 100%;
                }
                img:hover {
                    cursor: pointer;
                }
                
                `}
            </style>
        </div>
    )
}

export default SubmitReview;

