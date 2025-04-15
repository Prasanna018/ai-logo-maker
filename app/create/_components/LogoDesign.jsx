import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import lookup from '@/app/_data/lookup'
import LogoDes from '@/app/_data/LogoDesgn'
import Image from 'next/image'
function LogoDesign({ onHandleChange, formData }) {

    const [selected, setSelected] = useState(formData?.design?.title);
    return (
        <div className='my-10'>
            <HeadingDesc
                title={lookup.LogoDesignTitle}
                description={lookup.LogoDesignDesc}
            ></HeadingDesc>


            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {LogoDes.map((design, index) => {
                    return <div
                        onClick={() => {
                            setSelected(design.title);
                            onHandleChange(design)

                        }
                        }
                        key={index}
                        className={`cursor-pointer ${selected == design.title ? 'border-2 border-black' : ""}`}
                    >

                        <Image
                            alt={design.title}
                            src={design.image}
                            width={200}
                            height={300}
                            className='w-full h-[160px] object-cover p-2'
                        ></Image>

                    </div>
                })}
            </div>

        </div >
    )
}

export default LogoDesign
