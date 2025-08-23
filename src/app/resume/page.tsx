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
            <h3>October 2025 - Present !</h3>
            <p>this is the first time i've ever not held a job since 16 and potentially the last time i'll have this much free time for the forseeable future!!! so i really wanted to take the opportunity to travel and see Japan but also focus on improving my
                skills and falling in love with coding again!! If you'd like to see the product of that journey, please check out my portfolio page :-2</p>
            <div className="event">
                <div className="top-section">
                    <h4>Masters Courses</h4>
                    <span>October 2025 - December 2025</span>
                </div>
                <p>I took a semester to only focus on KBAI & DB courses to strengthen my knowledge</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Recurse Center</h4>
                <span>January 2025 - March 2025</span>
                </div>
                <p>hot takes, conjugation app, &&&& chaotic blog</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Solo-travelled Japan</h4>
                <span>March 2025 - April 2025</span>
                </div>
                <p>I spent some time romping around Japan by myself for four weeks, going to: Toyko, Kyoto, Osaka, Ehime, Nagasaki, Hiroshima, and Fukuoka. Most notable of my trip was doing the Shimanami Kaido which is a 60km bike trail over 6 small islands in the Seto Inland Sea!</p>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Coding Personal Projects</h4>
                <span>April 2025-Present</span>
                </div>
                <p>Before applying for jobs I wanted to complete a couple of projects that have been sitting in the back of my mind and also focus on building new skillsets that I haven't had the opportunity to yet in job interviews. Most notable include: </p>
                <ul>
                    <li>
                    Authentication and Authorization
                    </li>
                    <li>
                    APIs and things like Abort Controller / cross-site scripting and best practices
                    </li>
                    <li>
                    New frameworks like Next.JS
                    </li>
                    <li>
                        optimization through client-side rendering and server-side rendering
                    </li>
                </ul>
            </div>
            <div className="event">
                <div className="top-section">
                <h4>Ordained a Few Weddings</h4>
                <span>August 2025-September 2025</span>
                </div>
                <p>A couple of my friends have given me the highest honor of presiding over their marriage, so a lot of time and effort went into making sure their special day was amazing.</p>
            </div>
        </div>
        <div className="section">
            <h2>General Electric</h2>
            <h3>Fullstack Developer</h3>
            <span>August 2022 - October 2024</span>
            <p> </p>
            <ul>
                <li>
                Led the front-end migration of 8 legacy API calls to GraphQL to support Azure group migration on an Electron-React app used by 200,000 employees globally to check device health on computers. - Helped consolidate 2 administrative React-Typescript
                applications into 1 by analyzing input and output of 8 legacy API calls, migrating 3 pages of front-end functionality, and helping to update 14 supporting Azure resources reducing the customer tool set, accessed over 26k times per month,
                required to maintain 1481 software packages.
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

            <h3>digital technology leadership program</h3>

            <span>July 2020 - August 2022</span>
            <p>This program focused on building autonomous leadership within the technical space by allowing individuals to own and lead key projects in a variety of spaces, and present on key milestones to executive leadership, gaining key industry insights
                and business acumen. </p>
            <h4>cloud engineer</h4>
            <span>February 2022 - August 2022</span>
            <p>Expanded visibility into hardened EC2s through AWS CLI logging of installed patches and software across 14 containers, 15 Linux SKUs, and 6 Windows SKUs, used by over 1,600+ users a month to improve audit preparation.</p>
            <h4>cyber threat detection</h4>
            <span>August 2021 - January 2022</span>
            <p>Mitigated third-party software dependency risk by leading the investigation into the historical usage and payment saving the company $13,188 annually in prospective costs. - Increased visibility of company-wide network perimeter vulnerabilities
                by developing an in-house IP scanner using Python, Nmap, and Azure, covering 64,922,445 potential access points through IP and port scanning.</p>
            <h4>front-end developer</h4>
            <span>February 2021 - July 2021</span>
            <p>Contributed to key functionality for 6 Computer Action features on a React and Typescript website accessed over 110k times per month globally with an overall user base of 200,000.</p>
            <h4>technical project manager</h4>
            <span>July 2020 - January 2021</span>
            <p> Coordinated the decommission and data archival and retention of 82 legacy applications and 137 diff erent assets between six diff erent teams, saving the company $1 million in cost avoidance and $370k annually. </p>
          

            <h3>internship - technical project manager</h3>
            <span>September 2019 - August 2022</span>
            <p>
                During this time I focused on working with a 6-person team to build an internal website alternative to smartsheet utilizing a tech stack of Predix, JS, and Java for our shop floor workers in order to better manage fulfillment for our aerospace engines.
            </p>
            <h3>internship - front-end developer</h3>
            <span>May 2019 - August 2019</span>
            <p>
                During this time I focused on working with a 6-person team to build an internal website alternative to smartsheet utilizing a tech stack of Predix, JS, and Java for our shop floor workers in order to better manage fulfillment for our aerospace engines.
            </p>
        </div>
        <hr/>
    </div>
    <div id="leadership">
        <h2>Leadership</h2>
        <div className="section row">
            <div className="group">
                <h3>College</h3>
                <div className="event">
                     <h5>commencement speaker at graduation</h5>
                     <span>December 2019</span>
                     <p>I was selected to be commencement speaker at my college graduation - and choose to speak upon the power of the individual to drive change, through your "not enough" being "just enough" - to a crowd of 1,500+ people.</p>
                </div>
                <h5>amnesty international</h5>
                <div className="event">
                    <h5>Cosponsored Refugee Family</h5>
                    <span>December 2019</span>
                    <p>words here abt this!</p>
                </div>
                <div className="event">
                    <h5>I Welcome Resolution</h5>
                    <span>2017</span>
                    <p>Drafted the first resolution that declares the student body of the University of Michigan - Dearborn welcomes refugees and immigrants on campus and assisted in gathering signage from current students.</p>
                </div>
                <div className="event">
                    <h5>Longer Table Event</h5>
                    <span>December 2019</span>
                    <p>"WHEN INTIMIDATED BY THE STATE OF THE WORLD, SOME PEOPLE BUILD A TALLER WALL; WE'RE BUILDING A LONGER TABLE."</p>

                </div>
                <div className="event">
                    <h5>Gun Violence Panel</h5>
                    <span>April 2019</span>
                    <p>Planned and hosted a panel on campus with a crowd of over 60+ people focused on addressing gun violence in the greater Detroit area. The event was moderated by the Midwest Regional Field Organizer for Amnesty International and panelists included individuals from March for Our Lives: Detroit, CeaseFire Detroit, FORCE Detroit, and a representative from the Wayne County Commissioner.</p>
                </div>
                <div className="event">
                    <h5>Immigration Panel</h5>
                    <span>2017???2018??</span>
                    <p>Planned and hosted a panel featuring panelists from AIUSA office and ACLU. </p>
                </div>
            </div>
            <div className="group">
                <h3>Professional</h3>
                <h4>General Electric</h4>
                <h5>grace hopper representation for dtlp</h5>
                <span>answered questions for women looking to join stem initiatives</span>
                <h5>10,000 coffees</h5>
                <span>helped figure out what group to include in launch demographic </span>
                <h5>affinity community</h5>
                <span>ramadan, brazil, current events, etc - programming for all</span>
                <h5>first ever panel for mytech representing women in stem </h5>
                <span>covered dtlp angles</span>
                <h5>onboarding</h5>
                <span>ensured new dtlps had required gear, knowledge, and information pertaining to things such as the educational funds accessible to them </span>

                <h4>Amnesty International</h4>
                <div className="event">
                    <div><h5>Not Enough - Impact Report </h5><span>2018/19</span></div>
                    
                    <p>I was selected to be featured in the 2018/2019 Impact Report for Amnesty International for the world I led focusing on immigrant rights and awareness in the Metro-Detroit area.</p>
                    <p><a href="https://www.amnesty.org/en/latest/research/2019/11/the-not-enough-impact-report-201819/" target="_blank">Report Link</a></p>
                </div>
                <div className="event">
                    <h5>Lobbied in Congress - December 2019</h5>
                    <p>I lobbied in 2019 for the following bills: <a href="https://www.congress.gov/bill/116th-congress/senate-bill/398" target="_blank">S. 398</a> & <a href="https://www.congress.gov/bill/116th-congress/senate-bill/42" target="_blank">S. 42</a>: Universal Background Checks & Arm Sales to Saudi Arabia, respectively, with a delegation of other Michiganders through Amnesty International. 
                    </p>
                </div>
                <div className="event">
                    <h5>Lobbied in Congress - Part 2</h5>
                    <span>December 2023</span>
                    <p>I lobbied in 2019 for th :2023 Safeguard Act : (<a href="https://www.congress.gov/bill/118th-congress/senate-bill/1025" target="_blank">S. 1025</a> / <a href="https://congress.gov/bill/118th-congress/house-bill/1801" target="_blank">HR 1801</a>) with a delegation of other Michiganders through Amnesty International. </p>
                </div>
            </div>
        </div>
    </div>
    <div id="">
        <h3>Certificates</h3>
        <div className="section row">
            <div className="ed-entry">
                <h4>Azure Fundamentals</h4>
                <span>Dec. 2023</span>
            </div>
            <div className="ed-entry">
                <h4>Teaching English as a Foreign Language (TEFL) </h4>
                <span>October 2021</span>
            </div>
            <div className="ed-entry">
                <h4>Minister through Universal Life Church</h4>
                <span>September 2023</span>
            </div>
        </div>
    </div>
    <div id="education">
        <h3>Education</h3>
        <div className="section row">
            <div className="ed-entry">
                <h4>undergrad</h4>
                <span>2014-2019</span>
                <span>University of Michigan - Dearborn</span>
                <span>B.A. in English and B.S. in Computer Science</span>
            </div>
            <div className="ed-entry">
                <h4>masters</h4>
                <span>2024-present</span>
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
        .top-section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .top-section h4, span {
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
        .intermission li {
            margin: 0 40px;
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