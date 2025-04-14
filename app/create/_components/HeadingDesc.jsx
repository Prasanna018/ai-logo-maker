import React from 'react'

function HeadingDesc({ title, description }) {
    return (
        <div className=' mx-auto gap-4 p-5  '>
            <h2 className='text-pink-400 font-bold text-3xl '>{title}</h2>
            <p className='p-2 text-gray-500 font-semibold text-xl'>{description}</p>

            {/* <input placeholder={}></input> */}
        </div>
    )
}

export default HeadingDesc
