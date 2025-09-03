'use client'
import Lottie from 'lottie-react';
import Button from './Button';
import { useEffect, useState } from 'react';

type Props = {
    title: string,
    file: string
}

const GifWrapper:React.FC<Props> = ({title, file})=> {
    const [gif, setGif] = useState(null)

    const getGif = async () => {
        fetch(file)
            .then((response) => response.json())
            .then((json) => {
                setGif(json)
        });
    }

    useEffect(() => {
        getGif()
    }, [])

    return (
        <>
        <div className='gif-wrapper'>
            <h3>{title}</h3>
            <Lottie 
                animationData = {gif}
                loop={true}
            />
            <a href={`${file}`} download={`${file}`}>
                <Button text="download"/> 
            </a>

        </div>
        <style jsx>
            {`
                .gif-wrapper {
                    height: 240px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    background-color: peachpuff;
                    margin: 10px;
                }
            `}
        </style>
        </>
    )
}

export default GifWrapper