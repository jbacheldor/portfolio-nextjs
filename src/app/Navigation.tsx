'use client'
import { redirect } from 'next/navigation'
import styles from './navstyle.module.css'

const Navigation:React.FC = () => {
    const links: string[] = ["home", "about", "contact", "portfolio", "resume", "design"]

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
            <h1>Jess Bacheldor</h1>
            <div>
                <img onClick={() => redirectTo("linkedin")} alt="linkedin" className={styles.links} src={"/inBug-Black.png"} width="20px" height="20px"/>
                <img onClick={() => redirectTo("github")} alt="github" className={styles.links} src={"/github-mark.svg"} width="20px" height="20px"/>
            </div>
        </div>
        <div id="navigation" className={styles.navigation}>

            {links.map((i, key)=> {
                return (
                    <button onClick={()=>{redirect(`/${i}`)}} className={styles.navbutton} key={`${key}-button`}>{i}</button>
                )
            })}
        </div>
        <hr/>
        </>
    )
}
export default Navigation;