"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPallete from './_components/LogoPallete'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'

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
        console.log(formData)

    }
    return (
        <div className='flex flex-col  border mt-20 p-4 lg:mx-40 mx-10   '>

            {
                step == 1 ? <LogoTitle
                    onHandleChange={(v) => onHandleChange('title', v)}
                    formData={formData}
                ></LogoTitle> :
                    step == 2 ?
                        <LogoDesc onHandleChange={(v) => onHandleChange('desc', v)}
                            formData={formData}
                        ></LogoDesc> :

                        step == 3 ? <LogoPallete
                            formData={formData}
                            onHandleChange={(v) => onHandleChange('pallete', v)}
                        ></LogoPallete> :

                            step == 4 ? <LogoDesign
                                formData={formData}
                                onHandleChange={(v) => onHandleChange('design', v)}
                            ></LogoDesign> :
                                step == 5 ? <LogoIdea
                                    formData={formData}
                                    onHandleChange={(v) => onHandleChange('idea', v)}
                                ></LogoIdea> :

                                    null
            }


            <div className='flex justify-between'>

                {step != 1 && <Button
                    className='cursor-pointer '
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
