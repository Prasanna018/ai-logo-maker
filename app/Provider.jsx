import React from 'react'
import Header from './_Components/Header'

function Provider({ children }) {
    return (
        <div>
            <Header></Header>

            <div className='px-6 sm:px-10 md:px-16 lg:px-20 w-full'>

                {children}
            </div>

        </div>
    )
}

export default Provider
