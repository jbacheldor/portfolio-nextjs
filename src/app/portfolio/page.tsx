'use client'
import ProjectCards from "../components/ProjectCards";


const PortfolioPage = () => {

    const des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nulla nec lacus rhoncus laoreet. Integer velit lacus, bibendum a sodales sed, consequat non quam. Cras vitae magna eu eros."

    return (
        <div id="projects">
        <ProjectCards title="hangul drag & drop" description={des} link="https://github.com/jbacheldor/dragAndDropHangul"/>
        <ProjectCards title="hangul drag & drop" description=" blah blak" link="https://github.com/jbacheldor/dragAndDropHangul"/>
        <ProjectCards title="hangul drag & drop" description=" blah blak" link="https://github.com/jbacheldor/dragAndDropHangul"/>
        <style jsx>
            {`
            div#projects {
                margin: 10px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                width: 100%;
            }

            `}
            
        </style>
        </div>
    )
}

export default PortfolioPage;