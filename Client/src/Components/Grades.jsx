import { useEffect, useState } from "react"
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import Grade from "./Grade"
import CreatGrade from "./CreatGrade"


const Grades = () => {
    const [GradesData, setGradesData] = useState([])
    const [visibleCreatGrade, setVisibleCreatGrade] = useState(false);
    
    //GET - getAllGrades/

    const getGrades = async () => {
        
        try {
            const res = await axios.get('http://localhost:7000/api/grade')
            if (res.status === 200) {
                console.log(res.data);
                setGradesData(res.data)
            }
        } catch (e) {
            console.error(e)
        }     
    }
    
    const getGradeById = async (id) => {
        try {
            
            const res = await axios.get(`http://localhost:8000/api/Grade/${id}`)
            if (res.status === 200) {
                console.log(res.data);
            }
        } catch (e) {
            console.error(e)
        }
    }

    //******Grade - createGrade***** */
    const createGrade = async (nameRef,imageRef) => {
        
        const newGrade={
        name: nameRef.current.value?nameRef.current.value:" ",
        image: imageRef.current.value?imageRef.current.value:" ",
}
    
    try {
        const res = await axios.Grade('http://localhost:7000/api/grade', newGrade)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            getGrades()
        }
    }
     catch (e) {
        console.error(e)
    }
}
  

//********useEffect
    useEffect(() => {
        getGrades()
    },[])

    return (<>
        
        {/* if(maneger) */}
        <Button icon="pi pi-plus" aria-label="Filter" onClick={() =>setVisibleCreatGrade(true)} />
        <CreatGrade createGrade={createGrade} setVisibleCreatGrade={setVisibleCreatGrade}  visibleCreatGrade={visibleCreatGrade}/>


        {
            GradesData ? 
                GradesData.sort((Grade1,Grade2)=>Grade1._id-Grade2._id).map((p) => { return <Grade grade={p} getGrades={getGrades} setGradesData={setGradesData}/> }) : null
        }
    </>)
}

export default Grades