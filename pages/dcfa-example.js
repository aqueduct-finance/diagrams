import React from "react";
import { RiUser3Line } from 'react-icons/ri'

const DcfaExample = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-[#FAFAFC]">
            <div className="flex">
                <div className="flex flex-col py-4">
                    <div className="flex items-center space-x-4 px-4">
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            <RiUser3Line size={20} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                    </div>
                    <div className="flex grow items-center justify-end space-x-2 pr-4">
                        <div className="-mr-2">
                            <div className='flex flex-col items-center rotate-[30deg] -translate-y-5'>
                                <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center -rotate-[30deg] translate-y-6'>
                                <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                                </div>
                            </div>
                        </div>
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            DCFA
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 px-4">
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            <RiUser3Line size={20} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-64 h-64 border-2 border-aqBlue rounded-[2rem] p-16 space-y-2'>
                    <img src='./aq-logo-11-22.png' className="rounded-2xl" />
                </div>

                <div className="flex flex-col py-4">
                    <div className="flex items-center space-x-4 px-4">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            <RiUser3Line size={20} />
                        </div>
                    </div>
                    <div className="flex grow items-center justify-start space-x-2 pl-4">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            DCFA
                        </div>
                        <div className="-translate-x-2">
                            <div className='flex flex-col items-center -rotate-[30deg] -translate-y-5'>
                                <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center rotate-[30deg] translate-y-6'>
                                <div className='flex items-center justify-end w-24 h-[0.18rem] bg-tokenA/80 rounded-full'>
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                    <div className='absolute w-[0.18rem] h-3 bg-tokenA/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 px-4">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-tokenB/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-tokenB/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='flex h-min w-min items-center p-4 rounded-2xl border-2 border-black/60 text-black/80 space-x-2'>
                            <RiUser3Line size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DcfaExample;