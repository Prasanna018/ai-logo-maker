"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'
import Colors from '@/app/_data/Colors'

function LogoPallete() {

    const [, setPallete] = useState();
    return (
        <div className='my-10'>

            <HeadingDesc
                title={lookup.LogoColorPaletteTitle}
                description={lookup.LogoColorPaletteDesc}
            ></HeadingDesc>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                {Colors.map((pallete, index) => {
                    return <div
                        className='flex border'
                        key={index}>

                        {pallete?.colors.map((color, id) => {
                            return <div
                                onClick={() => {
                                    setPallete(pallete?.name)
                                }}

                                className={`h-24 w-full cursor-pointer ${pallete === pallete?.name ? 'border-4' : ""} `}
                                style={{
                                    backgroundColor: color
                                }}
                            ></div>
                        })}
                    </div>
                })}
            </div>


        </div>
    )
}

export default LogoPallete
