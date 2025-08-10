'use client'
type Props = {
    title: string,
    image: string,
}

const SVGCard:React.FC<Props> = ({title, image}) => {

    return (
        <div className="svg-body">
            <h3>{title}</h3>
            <img src={`${image}`} width="40px" height="40px"></img>
            <a href={`${image}`} download={`${title}`}>
                <button>download</button>
            </a>
            <style jsx>
                {`
                div.svg-body {
                    box-shadow: 2px 2px 10px dodgerblue;
                    width: 100px;
                    border-radius: 10px;
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                    text-align:center;
                }
                `}
            </style>
        </div>
    )
}

export default SVGCard;