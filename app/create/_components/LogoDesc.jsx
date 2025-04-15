import React from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'
import axios from 'axios'

function LogoDesc({ onHandleChange, formData }) {
    return (
        <div className='my-10'>
            <HeadingDesc title={lookup.LogoDescTitle}
                description={lookup.LogoDescDesc}
            ></HeadingDesc>

            <input
                className='p-2 m-2 w-full'
                placeholder={lookup.InputTitlePlaceholder}
                value={formData?.desc}
                onChange={(e) => onHandleChange(e.target.value)}
            ></input>

        </div>
    )
}

export default LogoDesc
