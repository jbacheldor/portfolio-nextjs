'use client'

type Props = {
    text: string,
    onClick?: () => void,
    id?: string,
}

const Button:React.FC<Props> = ({id, text, onClick}) => {

    return (
        <button id={id} className='button' onClick={onClick}>
            {text}
            <style jsx>
                {`
                .button#active {
                    background-color: darksalmon;
                    color: white;
                }
                .button {
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
                .button:hover {
                    cursor: pointer;
                    position: relative;
                    top: -1px;
                    box-shadow: 4px 4px 10px peru, 2px 2px 20px darksalmon;
                }
                `}
            </style>
        </button>
    )
}

export default Button