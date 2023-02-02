import React from 'react';

function Footer(){
    return(
        <div className="py-5 ">
            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Jhon Burn Villamor. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;