import React, { Postef, useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


const CreateTodo=(props)=>{

const {createTodo}=props
const {visibleCreatTodo}=props

//titleRef,tagsRef,completedRef
    const titleRef = useRef("")
    const tagsRef = useRef("")
    const completedRef = useRef("")
   
return(

        <Dialog
            visible={visibleCreatTodo}
            modal
            onHide={() => {if (!visibleCreatTodo) return; props.setVisibleCreatTodo(false); }}
            content={({ hide }) => (
                <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="Todoname" className="text-primary-50 font-semibold">
                        title
                        </label>
                        <InputText id="Todoname" label="Todoname" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={titleRef}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="Todoname" className="text-primary-50 font-semibold">
                        tags
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="name" ref={tagsRef}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="Todoname" className="text-primary-50 font-semibold">
                        completed
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="name" ref={completedRef}></InputText>
                    </div>
                    <div className="flex align-items-center gap-2">
                        <Button label="Creat" onClick={(e) =>{ createTodo(titleRef,tagsRef,completedRef); hide(e)}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    
)
}
export default CreateTodo