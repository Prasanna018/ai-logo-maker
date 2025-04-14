import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='flex py-2 items-center   justify-between px-6 sm:px-10 md:px-16 lg:px-20 shadow-lg'>


            <Image
                src={'/logo.svg'}
                alt='logo'
                width={140}
                height={140}
            ></Image>
            <Button>Get Started</Button>


        </div>
    )
}

export default Header
