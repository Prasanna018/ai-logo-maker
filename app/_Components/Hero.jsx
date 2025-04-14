'use client'
import React, { useState } from 'react'
import lookup from '../_data/lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

function Hero() {
    const [logoTitle, setLogoTitle] = useState('');
    return (
        <div className='pt-20 flex flex-col justify-center gap-y-3 items-center '>

            <h2 className='md:text-5xl font-bold text-3xl 
            bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent
            ' >{lookup.HeroHeading}</h2>

            <h2 className='md:text-6xl text-4xl   font-semibold text-center md:p-4'>{lookup.HeroSubheading}</h2>
            <p className='md:text-2xl text-2xl  text-gray-600 text-center md:p-4 '>{lookup.HeroDesc}</p>

            <div className='pt-6 p-2 w-full max-w-3xl items-center justify-center flex gap-4 '>
                <input
                    onChange={(e) => setLogoTitle(e.target.value)}
                    className='shadow-lg p-2 border-1 rounded-md w-full '
                    placeholder={lookup.InputTitlePlaceholder}></input>

                <Link href={'/create?title=' + logoTitle}>
                    <Button className='bg-pink-500 hover:bg-pink-900 duration-200 cursor-pointer'>Get Started</Button>
                </Link>
            </div>

        </div>
    )
}

export default Hero
