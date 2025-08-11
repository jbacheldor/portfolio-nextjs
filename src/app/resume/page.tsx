'use client'

const Resume:React.FC = () => {
    return(
    <div id="portfolio-body">
    <h1>Portfolio</h1>
    <div id="bio">linkedin - extended</div>
    <hr/>
    <div id="buttons">
        <button>leadership</button>
        <button>education</button>
        <button>professional</button>
    </div>

    <div id="timeline">
        <div className="section">
            <h2>[Insert Resume Gap here!!!]</h2>
            <h4>March 2025 - Present !</h4>
            <p>this is the first time i've ever not held a job since 16 and potentially the last time i'll have this much free time for the forseeable future!!! so i really wanted to take the opportunity to travel and see Japan but also focus on improving my
                skills and falling in love with coding again!! If you'd like to see the product of that journey, please check out my portfolio page :-2</p>
            <h3>4 weeks solo backpacking through Japan!</h3>
            <span>March 2025 - April 2025</span>
            <h3>Coding & Trying new things!</h3>
            <span>April 2025 - August 2025</span>
            <p>i think a </p>
            <h3>Ordained a few weddings</h3>
            <span>August 2025-September 2025</span>
        </div>

        <div className="section">
            <h2>Recurse</h2>
            <span>January 2025 - March 2025</span>
            <p>hot takes, conjugation app, &&&& chaotic blog</p>
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
    <div>
        Education?????
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
        #timeline, .section {
            display: flex;
            flex-direction: column;
            margin: 10px;
            align-items: center;
        }
        .section {
            margin: 10px;
            border: 1px solid black;
            background-color: peachpuff;
        }
        `}
    </style>
    </div>
    )
}

export default Resume;