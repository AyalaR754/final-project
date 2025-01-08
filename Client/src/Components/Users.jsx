import { useEffect, useState } from "react"
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import User from "./User"
import CreatUser from "./CreatUser"


const Users = () => {
    const [usersData, setUsersData] = useState([])
    const [visibleCreatUser, setVisibleCreatUser] = useState(false);
    
    //******GET - getAllUsers***** */

    const getUsers = async () => {
        
        try {
            const res = await axios.get('http://localhost:7000/user')
            if (res.status === 200) {
                console.log(res.data);
                setUsersData(res.data)
            }
        } catch (e) {
            console.error(e)
        }

       
    }

    //******POST - createUser***** */
    const createUser = async (nameRef,usernameRef,emailRef,addressRef,phoneRef) => {
        
        const newUser={
        name: nameRef.current.value?nameRef.current.value:" ",
        username:usernameRef.current.value?usernameRef.current.value:" ",
        email : emailRef.current.value?emailRef.current.value:"",
        address: addressRef.current.value?addressRef.current.value:"",
        phone: phoneRef.current.value?phoneRef.current.value:" "
}
    
    try {
        const res = await axios.post('http://localhost:7000/user', newUser)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            getUsers()
        }
    }
     catch (e) {
        console.error(e)
    }
}
  

//********useEffect
    useEffect(() => {
        getUsers()
    },[])

    return (<>
        
        <Button icon="pi pi-plus" aria-label="Filter" onClick={() =>setVisibleCreatUser(true)} />
        <CreatUser createUser={createUser} setVisibleCreatUser={setVisibleCreatUser}  visibleCreatUser={visibleCreatUser}/>

        {
            usersData ? 
                usersData.sort((user1,user2)=>user1._id-user2._id).map((u) => { return <User user={u} getUsers={getUsers} setUsersData={setUsersData}/> }) : null
        }
    </>)
}

export default Users