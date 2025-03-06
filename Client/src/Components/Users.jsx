import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import User from "./User"
import CreatUser from "./UserCreat"


import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';

const Users = () => {
    const [usersData, setUsersData] = useState([])
    const [visibleCreatUser, setVisibleCreatUser] = useState(false);

    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    //******GET - getAllUsers***** */

    const getUsers = async () => {

        try {
            const res = await axios.get('http://localhost:7000/api/user')
            if (res.status === 200) {
                console.log(res.data);
                //setUsersData(res.data)
                let arrConifirm = []
                let arrNotConifirm = []
                res.data.map((user) => {
                    if (user.conifirm === true)
                        arrConifirm.push(user)
                    else
                        arrNotConifirm.push(user)
                })
                setSource(arrNotConifirm)
                setTarget(arrConifirm)
            }
        } catch (e) {
            console.error(e)
        }
    }

    //******POST - createUser***** */
    const createUser = async (nameRef, emailRef, phoneRef, passwordRef) => {

        const newUser = {
            name: nameRef.current.value ? nameRef.current.value : " ",
            email: emailRef.current.value ? emailRef.current.value : "",
            phone: phoneRef.current.value ? phoneRef.current.value : " ",
            password: passwordRef.current.value ? passwordRef.current.value : " "
        }

        try {
            const res = await axios.post('http://localhost:7000/api/user', newUser)
            if (res.status === 200) {

                console.log("res.data", res.data);
                getUsers()
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    const deleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:7000/api/user/${id}`)
        // props.setUsersData(res.data)
        let arrConifirm = []
        let arrNotConifirm = []
        res.data.map((user) => {
            if (user.conifirm === true)
                arrConifirm.push(user)
            else
                arrNotConifirm.push(user)
        });
    }


    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (

            // <User user={itam} ></User>

            <div className="flex flex-wrap p-2 align-items-center gap-3">
                {/* src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} */}
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.createdAd}</span>
                    </div>
                    <Button icon="pi pi-times" aria-label="Filter" onClick={() => deleteUser(item._id)} />
                </div>
                <span className="font-bold text-900">${item.price}</span>
            </div>

        );
    };


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>

            {/* <Button icon="pi pi-plus" aria-label="Filter" onClick={() =>setVisibleCreatUser(true)} />
        <CreatUser createUser={createUser} setVisibleCreatUser={setVisibleCreatUser}  visibleCreatUser={visibleCreatUser}/> */}

            {/* 
            {
                usersData ?
                    usersData.sort((user1, user2) => user1.createdAt - user2.createdAt).map((u) => { return <User user={u} getUsers={getUsers} setUsersData={setUsersData} /> }) : null
            } */}

            <div className="card">
                <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1280px"
                    sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
                    sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
            </div>

        </>)
}

export default Users