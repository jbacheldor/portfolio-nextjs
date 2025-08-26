'use client'

import { redirect } from "next/navigation";
import Button from "../components/Button";

const Resume:React.FC = () => {


    return(
    <div id="portfolio-body">
    <h1>Portfolio</h1>
    <div id="bio">linkedin - extended</div>
    <a id="download-btn" href={`/Jessica-Bacheldor-Resume.pdf`} download={`Jessica Bacheldor Resume.pdf`}>
        <Button text="Download Resume"/>
    </a>
    <hr/>
    <div id="buttons">
        <Button text="leadership"  onClick={()=> {redirect("#leadership")}}/> 
        <Button text="education"  onClick={()=> {redirect("#education")}}/> 
        <Button text="professional"  onClick={()=> {redirect("#professional")}}/> 
    </div>

    <div id="timeline">
        <div className="section intermission">
            <h2>Career Intermission</h2>
            <h3>October 2025 - Present</h3>
            <p className="highlight">This period has been the first time since I turned 16 that I have not been employed. I wanted to take the time to travel and also improve my existing technical skills, but if you want an indepth review of how I spent my time, read below:</p>
            <div className="event">
                <div className="top-section">
                <h4>Ordained a Few Weddings</h4>
                <span>August 2025-September 2025</span>
                </div>
                <p className="highlight">A couple of my friends have given me the highest honor of presiding over their marriage, so a lot of time and effort went into making sure their special day was amazing.</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Coding Personal Projects</h4>
                <span>April 2025-Present</span>
                </div>
                <p className="highlight">Before applying for jobs I wanted to complete a couple of projects that have been sitting in the back of my mind and also focus on building new skillsets. Most notable include: 
                <ul>
                    <li>
                        Authentication and Authorization
                    </li>
                    <li>
                        APIs and things like Abort Controller / cross-site scripting and best practices
                    </li>
                    <li>
                        Different frameworks like Next.JS
                    </li>
                    <li>
                        Optimization through client-side rendering and server-side rendering
                    </li>
                </ul>
            </p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Solo-travelled Japan</h4>
                <span>March 2025 - April 2025</span>
                </div>
                <p className="highlight">I spent some time romping around Japan by myself for four weeks, going to: Toyko, Kyoto, Osaka, Ehime, Nagasaki, Hiroshima, and Fukuoka. Most notable of my trip was doing the Shimanami Kaido which is a 60km bike trail over 6 small islands in the Seto Inland Sea!</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Recurse Center</h4>
                <span>January 2025 - March 2025</span>
                </div>
                <p className="highlight">I joined <a href="https://www.recurse.com/" target="_blank">Recurse Center</a> where I prioritized pair programming and expanding my fullstack webdeveloper capabilities by creating a conjugation app for learning Japanese, a hot takes app, and a chaotic blog - all of which you can check out in my portfolio section.</p>
            </div>
            <div className="event">
                <div className="top-section">
                    <h4>Masters Courses</h4>
                    <span>October 2025 - December 2025</span>
                </div>
                <p className="highlight">I began an online masters program at Georgia Tech for Computer Science where I took the following courses: CS 6400 Database System Concepts and Designs and CS 7637 Knowledge-Based AI.</p>
            </div>

        </div>
        <div className="section">
            <h2>General Electric</h2>
            <h3>Fullstack Developer</h3>
            <span>August 2022 - October 2024</span>
            <p className="highlight">
                <ul>
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
            </p>
            <h3>Digital Technology Leadership Program</h3>

            <span>July 2020 - August 2022</span>
            <p className="highlight">This program focused on building autonomous leadership within the technical space by allowing individuals to own and lead key projects in a variety of spaces, and present on key milestones to executive leadership, gaining key industry insights
                and business acumen. </p>
            <div className="event">
                <div className="top-section">
                <h4>Cloud Engineer</h4>
                <span>February 2022 - August 2022</span>
                </div>
                <p className="highlight">Expanded visibility into hardened EC2s through AWS CLI logging of installed patches and software across 14 containers, 15 Linux SKUs, and 6 Windows SKUs, used by over 1,600+ users a month to improve audit preparation.</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Cyber Threat Detection</h4>
                <span>August 2021 - January 2022</span>
                </div>
                <p className="highlight">Mitigated third-party software dependency risk by leading the investigation into the historical usage and payment saving the company $13,188 annually in prospective costs. - Increased visibility of company-wide network perimeter vulnerabilities
                by developing an in-house IP scanner using Python, Nmap, and Azure, covering 64,922,445 potential access points through IP and port scanning.</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Front-End Developer</h4>
                <span>February 2021 - July 2021</span>
                </div>
                <p className="highlight">Contributed to key functionality for 6 Computer Action features on a React and Typescript website accessed over 110k times per month globally with an overall user base of 200,000.</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Technical Project Manager</h4>
                <span>July 2020 - January 2021</span>
                </div>
                <p className="highlight">Coordinated the decommission and data archival and retention of 82 legacy applications and 137 diff erent assets between six diff erent teams, saving the company $1 million in cost avoidance and $370k annually.</p>
            </div>
        </div>
        <hr/>
    </div>
    <div id="leadership">
        <h2>Leadership</h2>
        <div className="section row">
            <div className="group">
                <h3>College</h3>
                <div className="event">
                    <div className="top-section">
                        <h4>Commencement Speaker</h4>
                        <span>2019</span>
                        </div>
                     <p className="highlight">I was selected to be commencement speaker at my college graduation - and choose to speak upon the power of the individual to drive change, through your "not enough" being "just enough" - to a crowd of 1,500+ people.</p>
                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>Cosponsored Refugee Family</h4>
                    <span>2019</span>
                    </div>
                    <p className="highlight">Organized a diverse group of 10 volunteers to help raise money and help resettle a refugee family into the Metro-Detroit area, including raising $1000+, assisting with documentation, and coordinating appointment pick-ups and drop-offs. </p>
                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>I Welcome Resolution</h4>
                    <span>2019</span>
                    </div>
                    <p className="highlight">Drafted the first resolution that declares the student body of the University of Michigan - Dearborn welcomes refugees and immigrants on campus and assisted in gathering signage from current students.</p>
                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>Longer Table Event</h4>
                    <span>2019</span>
                    </div>
                    <p className="highlight">
                        <p>Organized a community potluck between two different universities and multiple local groups in order to foster diversity, inclusion, and conversation with a headcount of over 40 people.</p>
                        <p>"When intimidated by the state of the world, some people build a taller wall; we’re building a longer table” - Amnesty International</p>
                    </p>

                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>Gun Violence Panel</h4>
                    <span>2019</span>
                    </div>
                    <p className="highlight">Planned and hosted a panel on campus with a crowd of over 60+ people focused on addressing gun violence in the greater Detroit area. The event was moderated by the Midwest Regional Field Organizer for Amnesty International and panelists included individuals from March for Our Lives: Detroit, CeaseFire Detroit, FORCE Detroit, and a representative from the Wayne County Commissioner.</p>
                </div>
            </div>
            <div className="group">
                <h3>General Electric</h3>
                <div className="event">
                    <div className="top-section">
                    <h4>10,000 coffees</h4>
                    <span>2022</span>
                    </div>
                    <p className="highlight">Assisted in determining demographics for 200,000 wide pilot of  <a href="https://www.tenthousandcoffees.com/" target="_blank">10,000 coffees</a>as a core member of the launch team by analyzing demographic breakdown of employees and their hierarchical roles. </p>
                </div>

                <h3>Amnesty International</h3>
                <div className="event">
                    <div className="top-section">
                    <h4>Not Enough - Impact Report </h4><span>2018/19</span>
                    </div>
                    <p className="highlight">I was selected to be featured in the <a href="https://www.amnesty.org/en/latest/research/2019/11/the-not-enough-impact-report-201819/" target="_blank">2018/2019 Impact Report</a> for Amnesty International for the world I led focusing on immigrant rights and awareness in the Metro-Detroit area.</p>
                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>Lobbied in Congress</h4>
                    <span> 2019</span>
                    </div>
                    <p className="highlight">I lobbied in 2019 for the following bills: <a href="https://www.congress.gov/bill/116th-congress/senate-bill/398" target="_blank">S. 398</a> & <a href="https://www.congress.gov/bill/116th-congress/senate-bill/42" target="_blank">S. 42</a>: Universal Background Checks & Arm Sales to Saudi Arabia, respectively, with a delegation of other Michiganders.
                    </p>
                </div>
                <div className="event">
                    <div className="top-section">
                    <h4>Lobbied in Congress</h4>
                    <span>2023</span>
                    </div>
                    <p className="highlight">I lobbied in 2019 for the 2023 Safeguard Act: (<a href="https://www.congress.gov/bill/118th-congress/senate-bill/1025" target="_blank">S. 1025</a> / <a href="https://congress.gov/bill/118th-congress/house-bill/1801" target="_blank">HR 1801</a>) with a delegation of other Michiganders.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="">
        <h2>Certificates</h2>
        <div className="section row">
            <div className="ed-entry">
                <h4>Azure Fundamentals</h4>
                <span className="highlight">December 2023</span>
            </div>
            <div className="ed-entry">
                <h4>Teaching English as a Foreign Language (TEFL) </h4>
                <span className="highlight">October 2021</span>
            </div>
            <div className="ed-entry">
                <h4>Minister through Universal Life Church</h4>
                <span className="highlight">September 2023</span>
            </div>
        </div>
    </div>
    <div id="education">
        <h2>Education</h2>
        <div className="section row">
            <div className="ed-entry highlight">
                <h4>Undergraduate</h4>
                <span>2014 - 2019</span>
                <span>University of Michigan - Dearborn</span>
                <span>B.A. in English and B.S. in Computer Science</span>
            </div>
            <div className="ed-entry highlight">
                <h4>Masters</h4>
                <span>2024 - Present</span>
                <span>Georgia Tech</span>
                <span>Online Masters in Computer Science</span>
            </div>
        </div>
    </div>

    <style jsx>
        {`
        h1 {
            text-align: center;
        }
        h2 {
            margin: 0 10px;
        }
        #buttons {
            display: flex;
            justify-content: space-around;
        }
        div#bio {
            text-align: center;
        }
        .group {
            margin: 10px;
            max-width: 50%;
        }
        .event {
            width: 100%;
        }
        #timeline, .section {
            display: flex;
            flex-direction: column;
            margin: 10px;
            align-items: center;
        }
        p > ul{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
        .top-section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .highlight {
            background-color: cornsilk;
            padding: 4px;
            margin: 5px;
            border: 1px solid black;
            border-radius: 10px;
            text-align: center;
        }
        .section {
            margin: 10px;
            border: 1px solid black;
            background-color: peachpuff;
            padding: 10px;
        }
        li {
            margin: 0 40px;
            text-align: left;
        }
        a#download-btn {
            display: flex;
            justify-content: center;
            text-decoration: none;
        }
        a {
            // text-decoration: none;
        }
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
        }
        .ed-entry {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        `}
    </style>
    </div>
    )
}

export default Resume;