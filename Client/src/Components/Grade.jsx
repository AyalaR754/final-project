import { useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import UpdateGrade from "./UpdateGrade"

import 'primeicons/primeicons.css';
import axios from 'axios'
    
const Grade = (props) => {
    const [visible, setVisible] = useState(false);

    
    //**********updateGrade
    const updateGrade = async (nameRef,imageRef) => {
        props.grade.name= nameRef.current.value?nameRef.current.value:props.grade.title,
        props.grade.image=imageRef.current.value?imageRef.current.value:props.grade.body
    try {
        const res = await axios.put('http://localhost:7000/api/grade', grade)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            props.setGradesData(res.data)
        }
    } catch (e) {
        console.error(e)
    }
}
    
    //************delete
    const deleteGrade = async (id) => {
        const res = await axios.delete(`http://localhost:7000/grade/${id}`)
      
        props.setGradesData(res.data)
        }
    

    //***********return

    return (
        <>

            <br />

            <Card title={props.grade.name}>
                <p className="m-0">
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-times" aria-label="Filter" onClick={() => deleteGrade(props.grade._id)} />
                    <Button icon="pi pi-pencil" onClick={() => setVisible(true)} />
                    </div>
                    <UpdateGrade updateGrade={updateGrade} setVisible={setVisible}  visible={visible} grade={props.grade}/>
                </p>
            </Card>
            <br />
        </>
    )
}
    

export default Grade