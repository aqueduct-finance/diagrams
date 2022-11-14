import React from "react";

const Logo = () => {

    return (
        <div className="flex w-screen h-screen items-center justify-center bg-white poppins-font overflow-hidden " >
            <div className='flex items-center justify-center h-[84rem] w-[84rem] transition-all bg-[#0134D6]'>
                <img src='aq-logo-nobg2.png' className={' centered-shadow-white-xxl2 centered-shadow-test5 w-full h-full '} />
            </div>
        </div>
    )
}

export default Logo;