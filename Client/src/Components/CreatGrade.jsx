import React, { Gradeef, useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


const CreateGrade=(props)=>{

const {createGrade}=props
const {visibleCreatGrade}=props

    const nameRef = useRef("")
    const imageRef = useRef("")
   
return(

        <Dialog
            visible={visibleCreatGrade}
            modal
            onHide={() => {if (!visibleCreatGrade) return; props.setVisibleCreatGrade(false); }}
            content={({ hide }) => (
                <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="Gradename" className="text-primary-50 font-semibold">
                        name
                        </label>
                        <InputText id="Gradename" label="Gradename" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={nameRef}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="Gradename" className="text-primary-50 font-semibold">
                        image
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="name" ref={imageRef}></InputText>
                    </div>
                
                    <div className="flex align-items-center gap-2">
                        <Button label="Creat" onClick={(e) =>{ createGrade(nameRef,imageRef); hide(e)}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    
)
}
export default CreateGrade