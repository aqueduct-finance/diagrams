import React, { useRef, useState, useEffect } from "react";
import calculatePathSmooth, { mapDataToSvgCoordinates } from "../utils/smooth-path";
//import calculatePathSmoothSmall, { mapDataToSvgCoordinatesSmall } from "../utils/smooth-path-small";
import ethPriceData from '../data/ethPriceData.json'
import { useSpring, animated } from 'react-spring';

function getEveryNth(arr, nth) {
    const result = [];

    for (let i = 0; i < arr.length; i += nth) {
        result.push(arr[i]);
    }

    return result;
}

function DcaDisplay() {

    const convertedPoint = mapDataToSvgCoordinates(getEveryNth(ethPriceData, 1))
    const points = calculatePathSmooth(convertedPoint);

    const convertedPoint2 = mapDataToSvgCoordinates(getEveryNth(ethPriceData, 8))
    const points2 = calculatePathSmooth(convertedPoint2);

    const dummyRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);
    useEffect(() => {
        // get the length of the svg path
        if (dummyRef?.current) {
            setPathLength(dummyRef.current.getTotalLength());
        }
        //api.start({ strokeDashoffset: 0 })
    }, [points])

    //const [styles, api] = useSpring(() => ({ strokeDashoffset: 20750 }))

    return (
        <svg
            className="w-full h-full lg:-rotate-y-sm" viewBox="0 0 3000 1600"
        >
            <path
                ref={dummyRef}
                d={points}
                stroke="white"
                fill="none"
                strokeWidth="00"
            />
            <path
                d='M 0 1550 L 3000 450'
                className='stroke-blue-500/252 2centered-shadow-test52'
                fill="none"
                strokeWidth="40"
            />
            <animated.path
                fill="none"
                strokeWidth="40"
                strokeDasharray={pathLength}
                d={points}
                className='stroke-white/80 will-change-transform 2centered-shadow-white-bottom '
            />
            <animated.path
                fill="none"
                strokeWidth="75"
                strokeDasharray={pathLength}
                d={points2}
                className='stroke-white 2centered-shadow-test5 will-change-transform '
            />
        </svg>
    )
}

const Banner = () => {

    /*
    return (
        <div className="flex w-screen h-screen items-center justify-center bg-white poppins-font overflow-hidden " >
            <div className='flex items-center justify-center h-[50rem] w-[84rem] transition-all bg-aqBlue'>
                <div className={'flex items-center justify-center poppins-font text-8xl font-bold text-white centered-shadow-test5 w-full h-full '}>
                    swap tokens <br></br> in real-time.
                </div>
            </div>
        </div>
    )
    */

    return (
        <div className="flex w-screen h-screen items-center justify-center bg-white poppins-font overflow-hidden " >
            <div className='flex items-center justify-center h-[50rem] w-[84rem] transition-all bg-black'>
                <div className={'flex items-center justify-center poppins-font text-8xl font-bold text-aqBlue 2centered-shadow-test52 w-full h-full '}>
                    <DcaDisplay />
                </div>
            </div>
        </div>
    )
}

export default Banner;