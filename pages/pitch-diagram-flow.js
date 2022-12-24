import { RiUser3Line } from 'react-icons/ri'
import { useState } from 'react'

export default function LPandTraderWithFees() {

    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex space-x-12'>
                <button
                    onClick={() => {
                        setIndex((i) => i - 1);
                    }}
                >
                    {'<'}
                </button>
                <p>
                    {index}
                </p>
                <button
                    onClick={() => {
                        setIndex((i) => i + 1);
                    }}
                >
                    {'>'}
                </button>
            </div>
            <div className=''>
                <div className='translate-y-[6rem] space-y-2'>
                    <div className='flex border-2 border-aqBlue/10 text-aqBlue font-bold w-min px-2 py-2 space-x-1 rounded-full'>
                        <p className='mx-2'>Pool:</p>
                        <div className='bg-usdcBlue/20 text-usdcBlue/80 text-xs font-bold w-min px-3 py-1 rounded-full whitespace-nowrap'>
                            USDCx
                        </div>
                        <div className='bg-ethPink/20 text-ethPink/80 text-xs font-bold w-min px-3 py-1 rounded-full whitespace-nowrap'>
                            ETHx
                        </div>
                    </div>
                    <div className='flex border-2 border-aqBlue/10 text-aqBlue font-bold w-min px-2 py-2 space-x-1 rounded-full'>
                        <p className='mx-2 whitespace-nowrap'>Fee: &nbsp;0.5%</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div className={`flex items-center p-4 py-20 rounded-3xl border-2 border-black/60 text-black/80 space-x-2 translate-y-12 ${index >= 1 ? ' opacity-100 ' : ' opacity-0 '}`}>
                        <RiUser3Line size={20} />
                        <p>LP</p>
                    </div>
                    <div className={`flex flex-col items-center translate-y-8`}>
                        <div className={`flex flex-col items-center ${index >= 1 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pb-1 text-usdcBlue font-bold'>
                                2400 USDCx / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-usdcBlue/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className={`flex flex-col items-center ${index >= 1 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pb-1 text-ethPink/80 font-bold'>
                                2 ETHX / s
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-ethPink/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-12' />
                        <div className={`flex flex-col items-center ${index >= 2 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pt-1 text-ethPink/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0,1: return '-'
                                        case 2: return '2 ETHx / s'
                                        case 3: return '1.92 ETHx / s'
                                        case 4: return '1.9204 ETHx / s'
                                        case 5: case 6: return '2.00008 ETHx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-ethPink/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className={`flex flex-col items-center ${index >= 2 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pt-1 text-usdcBlue/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0,1: return '-'
                                        case 2: return '2400 USDCx / s'
                                        case 3: case 4: return '2500 USDCx / s'
                                        case 5: return '2400.384 USDCx / s'
                                        case 6: return '2400.882 USDCx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-usdcBlue/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col w-64 h-96 border-2 border-aqBlue rounded-3xl p-4 space-y-2'>
                        <div className='w-full'>
                            <img src='aq-logo.png' className='h-10 w-10 rounded-xl' />
                        </div>
                        <p className='text-sm text-aqBlue font-bold opacity-0'>
                            Liquidity
                        </p>
                        <div className='flex flex-col w-full h-full border-[0.1rem] border-aqBlue rounded-xl p-2 space-y-1'>
                            <p className='text-sm text-aqBlue'>
                                Liquidity
                            </p>
                            <div className='flex flex-grow space-x-2'>
                                <div className='flex flex-col pl-5 justify-center w-1/2 bg-usdcBlue/20 rounded-lg font-bold text-usdcBlue'>
                                    <div>
                                        <p>
                                            {(() => {
                                                switch(index) {
                                                    case 0: return '0'
                                                    case 1: case 2: return '2400'
                                                    case 3: case 4: case 5: case 6: return '2500'
                                                }
                                            })()}
                                        </p>
                                        <p className='text-xs'>
                                            USDCx /s
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col pl-5 justify-center w-1/2 bg-ethPink/20 rounded-lg font-bold text-ethPink'>
                                    <div>
                                        <p>
                                            {(() => {
                                                switch(index) {
                                                    case 0: return '0'
                                                    case 1: case 2: case 3: case 4: return '2'
                                                    case 5: case 6: return '2.083'
                                                }
                                            })()}
                                        </p>
                                        <p className='text-xs'>
                                            ETHx /s
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col w-full h-full border-[0.1rem] border-aqBlue rounded-xl p-2 space-y-1 ${index >= 1 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm text-aqBlue'>
                                Price
                            </p>
                            <div className='flex flex-col flex-grow items-center justify-center'>
                                <p className='-mt-4 text-ethPink/80 font-bold'>
                                    1 ETHx = 
                                </p>
                                <p className='text-usdcBlue/80 font-bold'>
                                    {(() => {
                                        switch(index) {
                                            case 0: return '0'
                                            case 1: case 2: return '1200 USDCx'
                                            case 3: case 4: return '1250 USDCx'
                                            case 5: case 6: return '1200.19 USDCx'
                                        }
                                    })()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col items-center translate-y-8`}>
                        
                        <div className={`flex flex-col items-center ${index >= 3 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pt-1 text-usdcBlue/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0: case 1: case 2: return '0'
                                        case 3: case 4: case 5: case 6: return '100 USDCx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-usdcBlue/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className={`flex flex-col items-center ${index >= 4 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pb-1 text-ethPink/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0: case 1: case 2: case 3: return '0'
                                        case 4: return '0.0796 ETHx / s'
                                        case 5: case 6: return '0.083 ETHx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-ethPink/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-12' />
                        <div className={`flex flex-col items-center ${index >= 5 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pt-1 text-ethPink/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0: case 1: case 2: case 3: case 4: return '0'
                                        case 5: case 6: return '0.083 ETHx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-ethPink/80 rounded-full rotate-180'>
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-ethPink/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                        <div className='h-2' />
                        <div className={`flex flex-col items-center ${index >= 6 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <p className='text-sm pb-1 text-usdcBlue/80 font-bold'>
                                {(() => {
                                    switch(index) {
                                        case 0: case 1: case 2: case 3: case 4: case 5: return '0'
                                        case 6: return '99.118 USDCx / s'
                                    }
                                })()}
                            </p>
                            <div className='flex items-center justify-end w-64 h-[0.18rem] bg-usdcBlue/80 rounded-full'>
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full translate-y-1 -translate-x-1 rotate-45' />
                                <div className='absolute w-[0.18rem] h-3 bg-usdcBlue/80 rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                            </div>
                        </div>
                    </div>

                    <div className='space-y-14'>
                        <div className={`flex items-center p-4 rounded-3xl border-2 border-black/60 text-black/80 space-x-2 translate-y-12 ${index >= 3 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <RiUser3Line size={20} />
                            <p>Trader 1</p>
                        </div>
                        <div className={`flex items-center p-4 rounded-3xl border-2 border-black/60 text-black/80 space-x-2 translate-y-12 ${index >= 5 ? ' opacity-100 ' : ' opacity-0 '}`}>
                            <RiUser3Line size={20} />
                            <p>Trader 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}