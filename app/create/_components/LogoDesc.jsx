import React from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'

function LogoDesc({ onHandleChange }) {
    return (
        <div className='my-10'>
            <HeadingDesc title={lookup.LogoDescTitle}
                description={lookup.LogoDescDesc}
            ></HeadingDesc>

            <input type='text'
                className='p-2 m-2 w-full'
                placeholder={lookup.InputTitlePlaceholder}

                onChange={(e) => onHandleChange(e.target.value)}
            ></input>

        </div>
    )
}

export default LogoDesc
