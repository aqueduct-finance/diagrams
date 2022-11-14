import React, { useEffect, useState } from "react";
import { useSpring, animated, config, useTrail, a } from 'react-spring'
import CreateStreamWidget from "../components/widgets/CreateStreamWidget";
import ProvideLiquidityWidget from "../components/widgets/ProvideLiquidityWidget";
import { useStore } from "../utils/store";
import { BigNumber, ethers } from "ethers";
import Token from "../types/Token";

import ethLogo from "../public/eth-logo.png";
import daiLogo from "../public/dai-logo.png";
import usdcLogo from "../public/usdc-logo.png";
import { ETHxp, fDAI, fDAIxp, fUSDC, fUSDCxp } from "../utils/constants";

import AnimatedBalance from "../components/AnimatedBalance";
import WidgetContainer from "../components/widgets/WidgetContainer";
const ANIMATION_MINIMUM_STEP_TIME = 10;

const TM = 4;

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { tension: 6, friction: 3 }, // old 1x: { mass: 5, tension: 2000, friction: 200 },
        opacity: open == 1 ? 1 : 0,
        x: open == 1 ? 0 : (open == 2 ? -40 : 20),
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className='poppins-font relative w-full h-30 leading-[6rem] text-8xl font-bold text-aqBlue overflow-hidden' style={style}>
                    <a.div className='centered-shadow-lg22' style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

const Intro = () => {

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const [scale, setScale] = useState('scale-100 centered-shadow-white-lg')
    const [nameProps, setNameProps] = useState('-translate-x-[28rem]')
    //const [text1Props, setText1Props] = useState('translate-x-[160rem]')
    const [text1, setText1] = useState(0)
    const [text2, setText2] = useState(0)
    const [text3, setText3] = useState(0)

    const [f1, setF1] = useState(false)
    const [f2, setF2] = useState(false)

    const [f3, setF3] = useState(false)
    const [f4, setF4] = useState(false)

    const [f5, setF5] = useState(false)
    const [f6, setF6] = useState(false)

    const store = useStore();

    useEffect(() => {
        async function playAnimation() {
            // fade logo out
            await delay(1000 * TM);
            setScale('duration-[4000ms] scale-110 centered-shadow-white-lg')
            await delay(900 * TM);
            setScale('duration-[4000ms] scale-90 centered-shadow-white-lg')
            await delay(900 * TM);
            setScale('duration-[2000ms] scale-[90] translate-y-[160rem] bg-white')
            await delay(800 * TM);

            // text 1
            setText1(1)
            await delay(3000 * TM);
            setText1(2)
            await delay(1000 * TM);

            // swap widget
            setF1(true)
            await delay(1000 * TM);
            setDisplayedSwapFlowRate('5')
            await delay(367 * TM);
            setDisplayedSwapFlowRate('50')
            await delay(287 * TM);
            setDisplayedSwapFlowRate('500')
            await delay(220 * TM);
            setDisplayedSwapFlowRate('5000')
            await delay(1000 * TM);
            setDisplayedExpectedFlowRate('3')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.1')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.12')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.121')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.1218')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.12189')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate('3.121897')
            setShowErrorMessage(false)
            await delay(1500 * TM);
            setTransactionButtonProps('transition-all duration-[1200ms] scale-95')
            await delay(500 * TM);
            setTransactionButtonProps('transition-all duration-[1200ms] scale-100')
            setTransactionButtonLoading(true)
            await delay(1000 * TM)
            setF1(false)
            setF2(true)

            // text 2
            await delay(1000 * TM);
            setText2(1)
            await delay(3000 * TM);
            setText2(2)
            await delay(1000 * TM);

            // real time balance display
            setF5(true)
            setTime(1)
            await delay(3000 * TM);
            setF5(false)
            setF6(true)
            await delay(1000 * TM);
            setTime(0)

            // text 3
            setText3(1)
            await delay(3000 * TM);
            setText3(2)
            await delay(1000 * TM);

            // provide liquidity widget
            setF3(true)
            await delay(1000 * TM);
            // first flow
            setDisplayedFlowRate0('1')
            await delay(367 * TM);
            setDisplayedFlowRate0('10')
            await delay(287 * TM);
            setDisplayedFlowRate0('105')
            await delay(220 * TM);
            setDisplayedFlowRate0('1050')
            await delay(398 * TM);
            setDisplayedFlowRate0('10500')
            await delay(1000 * TM);
            setDisplayedExpectedFlowRate0('6')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.5')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.55')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.556')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.5568')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.55688')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate0('6.556885')
            await delay(15 * TM);
            // second flow
            setDisplayedFlowRate1('6')
            await delay(15 * TM);
            setDisplayedFlowRate1('6.')
            await delay(15 * TM);
            setDisplayedFlowRate1('6.5')
            await delay(15 * TM);
            setDisplayedFlowRate1('6.55')
            await delay(15 * TM);
            setDisplayedFlowRate1('6.557')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('1')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('10')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('105')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('1050')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('10500')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('10500.')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('10500.1')
            await delay(15 * TM);
            setDisplayedExpectedFlowRate1('10500.18')
            setShowErrorMessage2(false)
            await delay(1500 * TM);
            setTransactionButtonProps2('transition-all duration-[1200ms] scale-95')
            await delay(500 * TM);
            setTransactionButtonProps2('transition-all duration-[1200ms] scale-100')
            setTransactionButtonLoading2(true)
            await delay(1000 * TM)
            // fade out
            setF3(false)
            setF4(true)
            await delay(1000 * TM);

            // fade logo back in
            setScale('duration-[2000ms] scale-95 translate-y-[0rem] bg-aqBlue')
            await delay(500 * TM);
            setScale('duration-[2000ms] scale-100 centered-shadow-white-lg')
            await delay(500 * TM);

            // slide name out
            setScale('duration-[2000ms] -translate-x-[14rem] centered-shadow-white-lg')
            await delay(250 * TM)
            setNameProps('duration-[2000ms] translate-x-0')
        }

        store.setFlowrateUnit({ label: '/year', value: 3600 * 24 * 365, })
        store.setOutboundToken({
            label: "USDCxp",
            value: Token.fUSDCxp,
            logo: usdcLogo.src,
            address: fUSDCxp,
            underlyingToken: {
                label: "USDC",
                value: Token.fUSDC,
                logo: usdcLogo.src,
                address: fUSDC,
                colorHex: '#2775CA'
            },
            colorHex: '#2775CA'
        })
        store.setInboundToken({
            label: "ETHxp",
            value: Token.ETHxp,
            logo: ethLogo.src,
            address: fDAIxp,
            underlyingToken: {
                label: "ETH",
                value: Token.ETH,
                logo: ethLogo.src,
                address: '0x0',
                colorHex: '#00ABEE'
            },
            colorHex: '#00ABEE'
        })
        playAnimation();
        //setF1(true)
        //setF5(true)
        //setTime(1)
    }, [])

    /*
    const text1Styles = useSpring({
        transform: f1 ? 'translateX(0rem) scale(1)' : (f2 ? 'translateX(10rem) scale(0.9)' : 'translateX(-10rem) scale(0.9)'),
        opacity: f1 ? 1 : (f2 ? 0 : 0),
        config: config.gentle
    })
    */

    const swapWidgetStyles = useSpring({
        transform: f1 ? 'translateX(0rem) scale(1)' : (f2 ? 'translateX(5rem) scale(0.9)' : 'translateX(-5rem) scale(0.9)'),
        opacity: f1 ? 1 : (f2 ? 0 : 0),
        config: { tension: 6, friction: 3 } // old 1x: config.gentle
    })

    const rtBalanceStyles = useSpring({
        transform: f5 ? 'translateX(0rem) scale(1.1)' : (f6 ? 'translateX(5rem) scale(1)' : 'translateX(-5rem) scale(1)'),
        opacity: f5 ? 1 : (f6 ? 0 : 0),
        config: { tension: 6, friction: 3 }
    })

    const plWidgetStyles = useSpring({
        transform: f3 ? 'translateX(0rem) scale(1)' : (f4 ? 'translateX(5rem) scale(0.9)' : 'translateX(-5rem) scale(0.9)'),
        opacity: f3 ? 1 : (f4 ? 0 : 0),
        config: { tension: 6, friction: 3 }
    })

    // swap widget
    const [displayedSwapFlowRate, setDisplayedSwapFlowRate] = useState('');
    const [displayedExpectedFlowRate, setDisplayedExpectedFlowRate] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(true)
    const [transactionButtonProps, setTransactionButtonProps] = useState('scale-100')
    const [transactionButtonLoading, setTransactionButtonLoading] = useState(false)

    // LP widget
    const [displayedFlowRate0, setDisplayedFlowRate0] = useState('');
    const [displayedExpectedFlowRate0, setDisplayedExpectedFlowRate0] = useState('');
    const [displayedFlowRate1, setDisplayedFlowRate1] = useState('');
    const [displayedExpectedFlowRate1, setDisplayedExpectedFlowRate1] = useState('');
    const [showErrorMessage2, setShowErrorMessage2] = useState(true)
    const [transactionButtonProps2, setTransactionButtonProps2] = useState('scale-100')
    const [transactionButtonLoading2, setTransactionButtonLoading2] = useState(false)

    // real time balances vars
    // REFRESH(in milliseconds) = REFRESH_INTERVAL * ANIMATION_MINIMUM_STEP_TIME
    const [time, setTime] = useState(0);
    const [outgoingBalance, setOutgoingBalance] = useState(4236.92837465);
    const [incomingBalance, setIncomingBalance] = useState(0.47651175278);
    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(time + 1);

                // animate frame
                setOutgoingBalance((b) => b - (0.00015854896));
                setIncomingBalance((b) => b + (0.0000000991283241));
            }, ANIMATION_MINIMUM_STEP_TIME * 16);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [time]);

    return (
        <div className="flex w-screen h-screen items-center justify-center bg-aqBlue poppins-font overflow-hidden " >
            <img src='aq-logo-nobg2.png' className={'h-64 w-64 transition-all rounded-full ' + scale} />
            <div className='absolute centered-shadow-lg23 centered-shadow-test2'>
                <Trail open={text1}>
                    <span className=''>Swap tokens</span>
                    <span>every second,</span>
                    <span>in real-time</span>
                </Trail>
            </div>
            <div className='absolute centered-shadow-test2'>
                <Trail open={text2}>
                    <span>Watch your</span>
                    <span>balances move</span>
                    <span>every second</span>
                </Trail>
            </div>
            <div className='absolute centered-shadow-test2'>
                <Trail open={text3}>
                    <span>Provide liquidity</span>
                    <span>and earn rewards</span>
                    <span>every second</span>
                </Trail>
            </div>
            <animated.div style={swapWidgetStyles} className='absolute'>
                <CreateStreamWidget
                    displayedSwapFlowRate={displayedSwapFlowRate}
                    displayedExpectedFlowRate={displayedExpectedFlowRate}
                    showErrorMessage={showErrorMessage}
                    transactionButtonProps={transactionButtonProps}
                    transactionButtonLoading={transactionButtonLoading}
                />
            </animated.div>
            <animated.div style={plWidgetStyles} className='absolute'>
                <ProvideLiquidityWidget
                    displayedFlowRate0={displayedFlowRate0}
                    displayedExpectedFlowRate0={displayedExpectedFlowRate0}
                    displayedFlowRate1={displayedFlowRate1}
                    displayedExpectedFlowRate1={displayedExpectedFlowRate1}
                    showErrorMessage={showErrorMessage2}
                    transactionButtonProps={transactionButtonProps2}
                    transactionButtonLoading={transactionButtonLoading2}
                />
            </animated.div>
            <div className={"absolute text-7xl font-semibold text-white 2bg-red-500 translate-x-[4rem] overflow-hidden "} >
                <p className={'centered-shadow-white ' + nameProps} >
                    aqueduct
                </p>
            </div>
            <animated.div style={rtBalanceStyles} className="absolute">
                <WidgetContainer
                    isUnbounded={true}
                >
                    <div>
                        <div className="flex items-center justify-center space-x-8 text-usdcBlue bg-usdcBlue2/10 py-8 px-12 rounded-3xl glow-blue-md border-2 border-usdcBlue/50">
                            {<AnimatedBalance
                                value={outgoingBalance.toFixed(7)}
                                isIncreasing={false}
                            />}
                            {/*
                                <p className="monospace-font text-4xl md:text-6xl tracking-widest font-bold">
                                    {outgoingBalance.toFixed(7)}
                                </p>
*/}
                            <img src='usdc-logo.png' className="w-12 h-12" />
                        </div>
                        <div className="flex justify-center items-center h-32 -my-[1px]">
                            <div className="h-full flex items-start -mr-[1px]">
                                <div className="w-24 h-[66px] border-l-4 border-b-4 rounded-bl-2xl border-usdcBlue/40 glow-blue-md" />
                            </div>
                            <div className="flex w-16 h-16 items-center justify-center rounded-3xl overflow-clip">
                                <div className='absolute bg-aqBlue w-16 h-16 z-10 rounded-3xl opacity-80' />
                                <img src='aq-logo-nobg.png' className={'absolute h-16 w-16 transition-all rounded-2xl z-20'} />
                                <div className='bg-blue-800 w-12 h-12 z-10 animate-ping-slow rounded-full' />
                            </div>
                            <div className="h-full flex items-end -ml-[1px]">
                                <div className="w-24 h-[66px] border-r-4 border-t-4 border-spacing-24 rounded-tr-2xl border-ethPink/40 glow-pink-md" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-8 text-ethPink bg-ethPink2/10 py-8 px-12 rounded-3xl glow-pink-md border-2 border-ethPink/50">
                            {<AnimatedBalance
                                value={incomingBalance.toFixed(10)}
                                isIncreasing={true}
                            />}
                            {/*
                                <p className="monospace-font text-4xl md:text-6xl tracking-widest font-bold">
                                    {incomingBalance.toFixed(10)}
                                </p>
                */}
                            <img src='eth-logo-color.png' className="w-12 h-12 bg-ethPink rounded-full" />
                        </div>
                    </div>
                </WidgetContainer>
            </animated.div>
        </div>
    )
}

export default Intro;