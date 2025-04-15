"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'
import Colors from '@/app/_data/Colors'

function LogoPallete({ onHandleChange, formData }) {

    const [selectedPallete, setSelectedPallete] = useState(formData?.pallete);
    return (
        <div className='my-10'>

            <HeadingDesc
                title={lookup.LogoColorPaletteTitle}
                description={lookup.LogoColorPaletteDesc}
            ></HeadingDesc>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                {Colors.map((pallete, index) => {
                    return <div
                        key={index}
                        className={`flex border ${pallete.name == selectedPallete ? 'border-2 border-black' : ""}`}
                    >

                        {pallete?.colors.map((color, id) => {
                            return <div
                                key={id}
                                onClick={() => {
                                    setSelectedPallete(pallete?.name);
                                    onHandleChange(pallete?.name)
                                }}

                                className={`h-24 w-full cursor-pointer `}
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
