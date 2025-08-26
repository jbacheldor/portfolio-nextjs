'use client'
import styles from './resume.module.css'
import Button from "../components/Button";
import { redirect } from "next/navigation";

export const ButtonSection:React.FC = () => {

    return (
    <div className={styles.buttons}>
        <Button text="leadership"  onClick={()=> {redirect("#leadership")}}/> 
        <Button text="education"  onClick={()=> {redirect("#education")}}/> 
        <Button text="professional"  onClick={()=> {redirect("#professional")}}/> 
    </div>
    )
}