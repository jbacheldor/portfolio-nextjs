'use client'
import { redirect } from 'next/navigation'
import styles from './navstyle.module.css'
import { useLayoutEffect, useState } from 'react'
import Image from "next/image";

const Navigation:React.FC = () => {
    const links: string[] = ["resume", "portfolio", "design", "reviews"]
    const [active, setActive] = useState("")

    useLayoutEffect(()=> {
        if(window){
            setActive(window.location.pathname.slice(1))
        }
    }, [])

    const changeContent = (e: string) => {
        setActive(e)
        if(e == "about") redirect(`/`)
        redirect(`/${e}`)
    }

    const redirectTo = (value: string) => {
        if(value == "github"){
            window.open("https://github.com/jbacheldor", '_blank')?.focus()
        } else {
             window.open("https://www.linkedin.com/in/jessica-bacheldor/", '_blank')?.focus()
        }
    }

    return (
        <>
        <div id="header"  className={styles.header}>
            <span><h1 onClick={() => redirect("/")}>Jess Bacheldor</h1>
             <h4>(she/her)</h4></span>
             <span className={styles.rightside}>
            <div>
                <Image onClick={() => redirectTo("linkedin")}  className={styles.links} alt="linkedin" src={"/InBug-Black.png"} width={20} height={20} />
                <Image onClick={() => redirectTo("github")} className={styles.links} alt="github" src={"/github-mark.svg"} width={20} height={20} />
            </div>
            <a href="mailto: jessica.bacheldor@gmail.com">jessica.bacheldor@gmail.com</a>
        </span>
        </div>
        <div className={styles.navigation}>
            <button  id={"about" == active ? "active" : ""} onClick={()=> changeContent("about")} >{"about"}</button>
            {links.map((i, key)=> {
                return (
                    <button id={i == active ? "active" : ""} onClick={()=> changeContent(i)} key={`${key}-button`}>{i}</button>
                )
            })}
        </div>
        <hr/>
                <style jsx>
            {`
                button#active {
                    background-color: darksalmon;
                    color: white;
                }
                button:hover {
                    position: relative;
                    top: -1px;
                    box-shadow: 4px 4px 10px peru, 2px 2px 20px darksalmon;
                }

            `}
        </style>
        </>
    )
}
export default Navigation;