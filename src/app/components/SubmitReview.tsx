'use client'

import { useState } from "react"
import Button from "./Button"

type formType = {
    name: string,
    review: string,
    date: string,
    relation: string,
    continues?: string,
    considers?: string
}

const initialForm = {
    name: "",
    review: "",
    date: "",
    relation: "",
    continues: "",
    considers: ""
}

const SubmitReview:React.FC = () => {
    const [form, setForm] = useState<formType>(initialForm)

    const updateState = (e:any) => {
        
        setForm({
            ...form,
            [e.target.ariaLabel] : e.target.value
        })
    }

    const submitForm = async (e: any) => {
        e.preventDefault();

        // do some fetch data stuff
    }

    return (
        <div id='submit-body'>
            <form>
                <h4>submit your own review!</h4>
                <label>
                    <span>name</span>
                    <input></input>
                </label>
                <label>
                    <span>review</span>
                    <textarea/>
                </label>
                <label>
                    <span>relation</span>
                    <input></input>
                </label>
                <Button text="submit" onClick={()=> console.log()}/>
            </form>
            <style jsx>
                {`
                #submit-body {
                    display: flex;
                    justify-content: center;
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
                }
                label {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 5px;
                }
                
                `}
            </style>
        </div>
    )
}

export default SubmitReview;

