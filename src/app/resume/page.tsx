
import Button from "../components/Button";
import styles from './resume.module.css'
import { amnestyData, certificates, dtlpData, education, intermissionData, leadershipCollegeData } from "../data/resume";
import { ButtonSection } from "./ButtonSection";

const Resume:React.FC = () => {

    return(
    <div >
    <h1 className={styles.h1}>Portfolio</h1>
    <div className={styles.bio}>linkedin - extended</div>
    <a className={styles.downloadbtn} href={`/Jessica-Bacheldor-Resume.pdf`} download={`Jessica Bacheldor Resume.pdf`}>
        <Button text="Download Resume"/>
    </a>
    <hr/>
    <ButtonSection/>

    <div className={styles.timeline}>
        <div className={styles.section}>
            <h2 className={styles.h2}>Career Intermission</h2>
            <h3 className={styles.h3}>October 2025 - Present</h3>
            <p className={styles.highlight}>This period has been the first time since I turned 16 that I have not been employed. I wanted to take the time to travel and also improve my existing technical skills, but if you want an indepth review of how I spent my time, read below:</p>
            {intermissionData.map((key, index)=> (
                <div className={styles.event} key={index}>
                    <div className={styles.topsection}>
                    <h4>{key.title}</h4>
                    <span>{key.date}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html:  key.info}} className={styles.highlight}/>
                </div>
            ))}

        </div>
        <div id="professional" className={styles.section}>
            <h2 className={styles.h2}>General Electric</h2>
            <h3 className={styles.h3}>Fullstack Developer</h3>
            <span>August 2022 - October 2024</span>
            <div className={styles.highlight}>
                <ul className={styles.list}>
                    <li>
                    Led the front-end migration of 8 legacy API calls to GraphQL to support Azure group migration on an Electron-React app used by 200,000 employees globally to check device health on computers.
                    </li>
                    <li>
                        Helped consolidate 2 administrative React-Typescript applications into 1 by analyzing input and output of 8 legacy API calls, migrating 3 pages of front-end functionality, and helping to update 14 supporting Azure resources reducing the customer tool set, accessed over 26k times per month, required to maintain 1481 software packages.
                    </li>
                    <li>
                    Supported GE split by performing the following actions: produced key documentation for legacy services, cloning and testing applications, 109 repositories and their supporting infrastructure,
                    including 200+ resources for 3 environments, 44 APIs receiving upwards of 2k+ requests monthly, ensuring a smooth transition and reduction of unnecessary resources from 800+ in prod environments to 324.
                    </li>
                    <li>
                    Discovered an authentication security threat solution that tied 3 environments of an application with a separate application, solved by correctly aligning the client ids of the application with the correct appregistration allowing us to divorce ourselves from the dependency
                    and better troubleshoot in the future.
                    </li>
                </ul>
            </div>
            <h3>Digital Technology Leadership Program</h3>

            <span>July 2020 - August 2022</span>
            <p className={styles.highlight}>This program focused on building autonomous leadership within the technical space by allowing individuals to own and lead key projects in a variety of spaces, and present on key milestones to executive leadership, gaining key industry insights
                and business acumen. </p>
            {dtlpData.map((key, index)=> (
                <div className={styles.event} key={index}>
                    <div className={styles.topsection}>
                    <h4>{key.title}</h4>
                    <span>{key.date}</span>
                    </div>
                    <p className={styles.highlight} dangerouslySetInnerHTML={{__html:  key.info}}/>
                </div>
            ))}
        </div>
    </div>
    <div id="leadership">
        <h2 className={styles.h2}>Leadership</h2>
        <div className={styles.sectionRow }>
            <div className={styles.group}>
                <h3 className={styles.h3}>College</h3>
                {leadershipCollegeData.map((key, index)=> (
                <div className={styles.event} key={index}>
                    <div className={styles.topsection}>
                    <h4>{key.title}</h4>
                    <span>{key.date}</span>
                    </div>
                    <p className={styles.highlight} dangerouslySetInnerHTML={{__html:  key.info}} />
                </div>
            ))}
            </div>
            <div className={styles.group}>
                <h3 className={styles.h3}>General Electric</h3>
                <div className={styles.event}>
                    <div className={styles.topsection}>
                    <h4>10,000 coffees</h4>
                    <span>2022</span>
                    </div>
                    <p className={styles.highlight}>Assisted in determining demographics for 200,000 wide pilot of  <a href="https://www.tenthousandcoffees.com/" target="_blank">10,000 coffees</a>as a core member of the launch team by analyzing demographic breakdown of employees and their hierarchical roles. </p>
                </div>

                <h3>Amnesty International</h3>
                {amnestyData.map((key, index)=> (
                <div className={styles.event} key={index}>
                    <div className={styles.topsection}>
                    <h4>{key.title}</h4>
                    <span>{key.date}</span>
                    </div>
                    <p className={styles.highlight} dangerouslySetInnerHTML={{__html:  key.info}}/>
                </div>
            ))}

            </div>
        </div>
    </div>
    <div>
        <h2 className={styles.h2}>Certificates</h2>
        <div className={styles.sectionRow}>
            {certificates.map((key, index)=> (
                <div key={index }className={styles.ed}>
                    <h4>{key.title}</h4>
                    <span className={styles.highlight}>{key.date}</span>
                </div>
            ))}
        </div>
    </div>
    <div id="education">
        <h2 className={styles.h2}>Education</h2>
        <div className={styles.sectionRow}>
            {education.map((key, index)=> (
                <div key={index} className={styles.edhighlight}>
                    <h4>{key.type}</h4>
                    <span>{key.year}</span>
                    <span>{key.institution}</span>
                    <span>{key.cred}</span>
                </div>
            ))}
        </div>
    </div>
    </div>
    )
}

export default Resume;