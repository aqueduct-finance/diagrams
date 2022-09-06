import { RiUser3Line } from 'react-icons/ri'

export default function LPandTraderWithFees() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className=''>
                <div className='translate-y-[7rem] space-y-2'>
                    <div className='bg-aqBlue/10 text-aqBlue font-bold w-min px-4 py-1 rounded-full'>
                        SWAP
                    </div>
                    <div className='flex border-2 border-aqBlue/10 text-aqBlue font-bold w-min px-2 py-2 space-x-1 rounded-full'>
                        <p className='mx-2'>Pool:</p>
                        <div className='bg-tokenA/20 text-tokenA/80 text-xs font-bold w-min px-3 py-1 rounded-full whitespace-nowrap'>
                            token A
                        </div>
                        <div className='bg-tokenB/20 text-tokenB/80 text-xs font-bold w-min px-3 py-1 rounded-full whitespace-nowrap'>
                            token B
                        </div>
                    </div>
                    <div className='flex border-2 border-aqBlue/10 text-aqBlue font-bold w-min px-2 py-2 space-x-1 rounded-full'>
                        <p className='mx-2 whitespace-nowrap'>Fee: &nbsp;10%</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div className='flex items-center p-4 py-20 rounded-3xl border-2 border-black/60 text-black/80 space-x-2 translate-y-12'>
                        <RiUser3Line size={20} />
                        <p>LP</p>
                    </div>
                    <div className='flex flex-col items-center translate-y-8'>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm pb-1 text-tokenA/40 font-bold'>
                                100 token A / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenA/40 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/40 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/40 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className='flex flex-col items-center'>
                            <p className='text-sm pb-1 text-tokenB/40 font-bold'>
                                200 token B / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenB/40 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/40 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/40 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-12' />
                        <div className='flex flex-col items-center'>
                            <p className='text-sm pt-1 text-tokenB/80 font-bold'>
                                205 token B / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className='flex flex-col items-center'>
                            <p className='text-sm pt-1 text-tokenA/80 font-bold'>
                                ~97.8 token A / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenA/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col w-64 h-96 border-2 border-aqBlue rounded-3xl p-4 space-y-2'>
                        <div className='w-full'>
                            <img src='aq-logo.png' className='h-10 w-10 rounded-xl' />
                        </div>
                        <p className='text-sm text-aqBlue font-bold'>
                            Liquidity
                        </p>
                        <div className='flex flex-col w-full h-full border-[0.1rem] border-aqBlue rounded-xl p-2 space-y-1'>
                            <p className='text-sm text-aqBlue'>
                                Before
                            </p>
                            <div className='flex flex-grow space-x-2'>
                                <div className='flex flex-col items-center justify-center w-1/2 bg-tokenA/20 rounded-lg font-bold text-tokenA'>
                                    <div>
                                        <p>
                                            100
                                        </p>
                                        <p className='text-xs'>
                                            token A /s
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center w-1/2 bg-tokenB/20 rounded-lg font-bold text-tokenB'>
                                    <div>
                                        <p>
                                            200
                                        </p>
                                        <p className='text-xs'>
                                            token B /s
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full h-full border-[0.1rem] border-aqBlue rounded-xl p-2 space-y-1'>
                            <p className='text-sm text-aqBlue'>
                                After
                            </p>
                            <div className='flex flex-grow space-x-2'>
                                <div className='flex flex-col items-center justify-center w-1/2 bg-tokenA/20 rounded-lg font-bold text-tokenA'>
                                    <div>
                                        <p>
                                            100
                                        </p>
                                        <p className='text-xs'>
                                            token A /s
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center w-1/2 bg-tokenB/20 rounded-lg font-bold text-tokenB'>
                                    <div>
                                        <p>
                                            205
                                        </p>
                                        <p className='text-xs'>
                                            token B /s
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center translate-y-12'>
                        <div className='flex flex-col items-center rotate-[10deg]'>
                            <p className='text-sm pt-1 text-tokenB/80 font-bold'>
                                5 token B / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-16' />
                        <div className='flex flex-col items-center -rotate-[10deg]'>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                            <p className='text-sm pb-1 text-tokenA/80 font-bold'>
                                ~2.19 token A / s
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 rounded-3xl border-2 border-black/60 text-black/80 space-x-2 translate-y-12'>
                        <RiUser3Line size={20} />
                        <p>Trader</p>
                    </div>
                </div>
            </div>
        </div>
    )
}