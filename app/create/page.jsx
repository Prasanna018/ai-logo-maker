"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    const onHandleChange = (field, value) => {
        setFormData(
            prev => ({
                ...prev,
                [field]: value
            })
        )

    }
    return (
        <div className='flex flex-col  border mt-20 p-4 lg:mx-40 mx-10   '>

            {
                step == 1 ? <LogoTitle
                    onHandleChange={(v) => onHandleChange('title', v)}
                ></LogoTitle> : null
            }


            <div className='flex justify-between'>

                {step != 1 && <Button
                    onClick={() => setStep(step - 1)}
                    variant={'outline'}><ArrowLeft></ArrowLeft>Previous</Button>}

                <Button
                    onClick={() => setStep(step + 1)}
                    className='bg-pink-600 hover:bg-pink-400 cursor-pointer'><ArrowRight></ArrowRight> Continue</Button>
            </div>
        </div>
    )
}

export default CreateLogo
