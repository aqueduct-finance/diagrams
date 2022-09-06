import { RiUser3Line } from 'react-icons/ri'

function SimpleFlow() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='space-y-10'>
                <div className='flex items-center space-x-4'>
                    <div className='bg-aqBlue/10 text-aqBlue font-bold w-min px-4 py-1 rounded-full'>
                        SWAP
                    </div>
                    <div className='text-black/80'>
                        1 ETHxp = 2000 USDCxp
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div className='flex items-center p-4 rounded-3xl border-2 border-black/60 text-black/80 space-x-2'>
                        <RiUser3Line size={20} />
                        <p>Trader</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-black/80 text-sm pb-1 text-sfGreen'>
                            100 USDCxp / s
                        </p>
                        <div className='flex items-center justify-end w-64 h-[0.18rem] bg-sfGreen rounded-full'>
                            <div className='absolute w-[0.18rem] h-3 bg-sfGreen rounded-full translate-y-1 -translate-x-1 rotate-45' />
                            <div className='absolute w-[0.18rem] h-3 bg-sfGreen rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                        </div>
                        <div className='h-5' />
                        <div className='flex items-center justify-end w-64 h-[0.18rem] bg-aqBlue rounded-full rotate-180'>
                            <div className='absolute w-[0.18rem] h-3 bg-aqBlue rounded-full translate-y-1 -translate-x-1 rotate-45' />
                            <div className='absolute w-[0.18rem] h-3 bg-aqBlue rounded-full -translate-y-1 -translate-x-1 -rotate-45' />
                        </div>
                        <p className='text-black/80 text-sm pt-1 text-aqBlue'>
                            0.05 ETHxp / s
                        </p>
                    </div>
                    <div className='flex items-center justify-center h-14 w-14 bg-aqBlue rounded-2xl'>
                        <img src='aq-logo.png' className='h-10 w-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleFlow;