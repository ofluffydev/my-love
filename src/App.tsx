import CountUp from "./CountUp";
import Pictures from "./Pictures";
import pictureOne from "./assets/images/IMG_8388.jpg";
import pictureTwo from "./assets/images/IMG_8389.jpg";
import pictureThree from "./assets/images/IMG_8390.jpg";
import pictureSix from "./assets/images/IMG_8403.jpg";
import pictureSeven from "./assets/images/Snapchat-92359516.jpg";
import pictureEight from "./assets/images/Snapchat-301796471.jpg";
import pictureNine from "./assets/images/Snapchat-1047292008.jpg";
import pictureTen from "./assets/images/Snapchat-1090522863.jpg";
import pictureEleven from "./assets/images/Snapchat-1151093491.jpg";
import pictureTwelve from "./assets/images/Snapchat-1180694213.jpg";
import pictureThirteen from "./assets/images/Snapchat-1581273458.jpg";
import pictureFourteen from "./assets/images/Snapchat-1597109498.jpg";
import {useEffect, useState} from "react";

const pictures = [
    pictureOne,
    pictureTwo,
    pictureThree,
    pictureSix,
    pictureSeven,
    pictureEight,
    pictureNine,
    pictureTen,
    pictureEleven,
    pictureTwelve,
    pictureThirteen,
    pictureFourteen
]

// September 5th 2023
const date = new Date(2023, 8, 5);

function App() {
    const [text, setText] = useState('I love you');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText + ' I love you');
        }, 0);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div
                className="overflow-x-hidden flex flex-col text-white justify-center items-center bg-gradient-to-br from-pink-300 to-purple-400 w-screen h-fit animated-background">
                <h1 className="text-6xl font-bold m-3">Hi baby! :3</h1>
                <h2>I love you!!</h2>
                <CountUp startDate={date}/>
                <Pictures pictures={pictures}/>
                <h1 className="text-lg md:text-3xl lg:text-5xl font-bold mt-10 break-words">
                    Infinite I love yous as always!!!
                </h1>
                <p className="break-words p-5">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default App
