import { useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import UpdateUser from "./UpdateUser"

import 'primeicons/primeicons.css';
import axios from 'axios'
    
const User = (props) => {
    const [visible, setVisible] = useState(false);


//******GET - getUserById***** */
    const getUserById = async () => {
        
        try {
            const Id = "675727cec84cae9608d85008"
            const res = await axios.get(`http://localhost:7000/user/${Id}`)
            if (res.status === 200) {
                console.log(res.data);
            }
            
        } catch (e) {
            console.error(e)
        }
    }
    
    //**********updateUser
    const updateUser = async (nameRef,usernameRef,emailRef,addressRef,phoneRef) => {
        
        console.log(nameRef.current.value?nameRef.current.value:props.user.name)
        const {user}=props
        user.name= nameRef.current.value?nameRef.current.value:props.user.name
        user.username=usernameRef.current.value?usernameRef.current.value:props.user.Username
        user.email= emailRef.current.value?emailRef.current.value:props.user.email
        user.address= addressRef.current.value?addressRef.current.value:props.user.address
        user.phone= phoneRef.current.value?phoneRef.current.value:props.user.phone

    try {
        const res = await axios.put('http://localhost:7000/user', user)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            props.setUsersData(res.data)
        }
    } catch (e) {
        console.error(e)
    }
}
    
    //************delete
    const deleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:7000/user/${id}`)
        props.setUsersData(res.data)
        }
    

    //***********return

    return (
        <>

            <br />

            <Card name={props.user.name}>
                <p className="m-0">
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-times" aria-label="Filter" onClick={() => deleteUser(props.user._id)} />
                    <Button icon="pi pi-pencil" onClick={() => setVisible(true)} />
                    </div>
                    <UpdateUser updateUser={updateUser} setVisible={setVisible}  visible={visible} user={props.user}/>
                </p>
            </Card>
            <br />
        </>
    )
}
    

export default User