
import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


const UpdateUser=(props)=>{

const {updateUser}=props
const {visible}=props

    const usernameRef = useRef("")
    const nameRef = useRef("")
    const emailRef = useRef("")
    const phoneRef = useRef("")
    const addressRef = useRef("")

return(

  
        <Dialog
            visible={visible}
            modal
            onHide={() => {if (!visible) return; props.setVisible(false); }}
            content={({ hide }) => (
                <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        Username
                        </label>
                        <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={usernameRef} defaultValue={props.user.username}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        name
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="name" ref={nameRef} defaultValue={props.user.name} required="required"></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        email
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={emailRef} defaultValue={props.user.email}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        phone
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={phoneRef} defaultValue={props.user.phone}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        address
                        </label>
                        <InputText id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={addressRef} dafauldefaultValuetValue={props.user.address}></InputText>
                    </div>
                    <div className="flex align-items-center gap-2">
                        <Button label="Update" onClick={(e) =>{ updateUser(nameRef,usernameRef,emailRef,addressRef,phoneRef); hide(e)}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
   
)
}
export default UpdateUser