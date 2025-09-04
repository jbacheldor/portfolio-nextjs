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
    const [play, setPlay] = useState(false)

    const getGif = async () => {
        fetch(file)
            .then((response) => response.json())
            .then((json) => {
                setGif(json)
        });
    }

    const changePlay = () => {
        console.log('in here???')
        setPlay(!play)
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
                loop={play ? true : false}
            />
            <div className="buttons">
                <a href={`${file}`} download={`${file}`}>
                    <Button text="download"/> 
                </a>
                <Button text={play ? 'pause' : 'play'} onClick={() =>changePlay()}/>
            </div>

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
                .buttons {
                    display: flex;
                    flex-direction: row;

                }
            `}
        </style>
        </>
    )
}

export default GifWrapper