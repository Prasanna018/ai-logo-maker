"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({ onHandleChange }) {
    const searchParams = useSearchParams();
    const [title, setTitle] = useState(searchParams?.get('title'));


    return (
        <div >
            <HeadingDesc
                title={lookup.LogoTitle}
                description={lookup.LogoTitleDesc}
            ></HeadingDesc>

            <input type='text'
                className='p-2 m-2 w-full'
                placeholder={lookup.InputTitlePlaceholder}
                defaultValue={title}
                onChange={(e) => onHandleChange(e.target.value)}
            ></input>

        </div>
    )
}

export default LogoTitle
