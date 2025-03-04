import { useEffect, useState } from "react"
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import Grade from "./Grade"
import CreatGrade from "./CreatGrade"
// **********

import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Rating } from 'primereact/rating';
// import { Tag } from 'primereact/tag';
// import { classNames } from 'primereact/utils';

const Grades = () => {
    const [gradesData, setGradesData] = useState([])
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
    const createGrade = async (nameRef, imageRef) => {

        const newGrade = {
            name: nameRef.current.value ? nameRef.current.value : " ",
            image: imageRef.current.value ? imageRef.current.value : " ",
        }

        try {
            const res = await axios.Grade('http://localhost:7000/api/grade', newGrade)
            if (res.status === 200) {

                console.log("res.data", res.data);
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
    }, [])

    const gridItem = (grade) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={grade._id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`/pictures/1.png `} alt={grade.name} />
                        {/* ${grade.image} */}
                        <div className="text-2xl font-bold">{grade.name}</div>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (grade, index) => {
        if (!grade) {
            return;
        }
        return gridItem(grade);
    };


    const listTemplate = (gradesData) => {
        return <div className="grid grid-nogutter">{gradesData.map((grade, index) => itemTemplate(grade, index))}</div>;
    };
    return (<>

        {/* if(maneger) */}
        <Button icon="pi pi-plus" aria-label="Filter" onClick={() => setVisibleCreatGrade(true)} />
        <CreatGrade createGrade={createGrade} setVisibleCreatGrade={setVisibleCreatGrade} visibleCreatGrade={visibleCreatGrade} />


        {/* {
            gradesData ? 
                gradesData.sort((
                Grade1,Grade2)=>Grade1._id-Grade2._id).map((p) => { return <Grade  grade={p} getGrades={getGrades} setGradesData={setGradesData}/> }) : null
        } */}

        <div className="card">
            <DataView value={gradesData} listTemplate={listTemplate} />
        </div>

    </>)
}

export default Grades