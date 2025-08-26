'use client'
import { redirect } from 'next/navigation'
import styles from './navstyle.module.css'
import { useEffect, useState } from 'react'

const Navigation:React.FC = () => {
    const links: string[] = ["resume", "portfolio", "design", "reviews"]
    const [active, setActive] = useState("")

    const redirectTo = (value: string) => {
        if(value == "github"){
            window.open("https://github.com/jbacheldor", '_blank')?.focus()
        } else {
             window.open("https://www.linkedin.com/in/jessica-bacheldor/", '_blank')?.focus()
        }
    }

    useEffect(()=> {
        if(window){
            setActive(window.location.pathname.slice(1))
        }
    }, [])

    const changeContent = (e: string) => {
        setActive(e)
        if(e == "about") redirect(`/`)
        redirect(`/${e}`)
    }

    return (
        <>
        <div id="header"  className={styles.header}>
            <span><h1 onClick={() => redirect("/")}>Jess Bacheldor</h1>
             <h4>(she/her)</h4></span>
             <span className={styles.rightside}>
            <div >
                <img onClick={() => redirectTo("linkedin")} alt="linkedin" className={styles.links} src={"/inBug-Black.png"} width="20px" height="20px"/>
                <img onClick={() => redirectTo("github")} alt="github" className={styles.links} src={"/github-mark.svg"} width="20px" height="20px"/>
            </div>
            <a href="mailto: jessica.bacheldor@gmail.com">jessica.bacheldor@gmail.com</a>
        </span>
        </div>
        <div id="navigation" className={styles.navigation}>
            <button id={"about" == active ? "active" : ""} onClick={()=> changeContent("about")} >{"about"}</button>
            {links.map((i, key)=> {
                return (
                    <button id={i == active ? "active" : ""} onClick={()=> changeContent(i)} key={`${key}-button`}>{i}</button>
                )
            })}
        </div>
        <hr/>
        <style jsx>
            {`
                button {
                    text-decoration: none;
                    padding: 10px;
                    margin: 10px;
                    border-radius: 20px;
                    background-color: pink;
                    box-shadow: 2px 2px 10px peachpuff;
                    color: chocolate;
                    border: none;
                    transition: top ease 0.5s;
                    font-weight: 600;
                }
                button#active {
                    background-color: darksalmon;
                    color: white;
                }
                button:hover {
                    cursor: pointer;
                    position: relative;
                    top: -1px;
                    box-shadow: 4px 4px 10px peru, 2px 2px 20px darksalmon;
                    }
                h1:hover {
                    cursor: pointer;
                }

            `}
        </style>
        </>
    )
}
export default Navigation;