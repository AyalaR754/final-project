// // import { useState } from "react";
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { useState } from "react";

// import '../Grade.css'; 

// import UpdateGrade from "./UpdateGrade";
// import 'primeicons/primeicons.css';
// import axios from 'axios';

// const Grade = (props) => {
//     const [visible, setVisible] = useState(false);

//     //**********updateGrade
//     const updateGrade = async (nameRef, imageRef) => {
//         const updatedGrade = {
//             ...props.grade,
//             name: nameRef.current.value ? nameRef.current.value : props.grade.title,
//             image: imageRef.current.value ? imageRef.current.value : props.grade.body,
//         };

//         try {
//             const res = await axios.put('http://localhost:7000/api/grade', updatedGrade)
//             if (res.status === 200) {
//                 console.log("res.data", res.data);
//                 props.setGradesData(res.data);
//             }
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     //************delete
//     const deleteGrade = async (id) => {
//         const res = await axios.delete(`http://localhost:7000/api/grade/${id}`)
//         props.setGradesData(res.data)
//     }

//     //***********return
//     const footer = (
//         <div className="card flex flex-wrap gap-2 justify-content-center">
//             <Button icon="pi pi-times" label="Delete" onClick={() => { deleteGrade(props.grade._id) }} />
//             <Button label="Update" icon="pi pi-pencil" onClick={() => setVisible(true)} />
//             <UpdateGrade updateGrade={updateGrade} setVisible={setVisible} visible={visible} grade={props.grade} />
//         </div>
//     );

//     // const header = (
//     //     <img alt="Card" src="/pictures/1.png" />
//     // );

//     return (
//         <div className="card-container">
//             <div className="card flex flex-wrap gap-2 justify-content-center">
//                 <div className="card-item">
//                     <Card 
//                         title={props.grade.name} 
//                         footer={footer} 
//                         // header={header} 
//                         className="grade-card md:w-25rem"
//                         style={{ backgroundImage: `url(${props.grade.image || '/pictures/default.jpg'})`, backgroundSize: 'cover' }}
//                     >
//                         <p className="m-0">
//                             {/* {props.grade.image} */}
//                         </p>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Grade;


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
        const updatedGrade = {
                        ...props.grade,
                        name: nameRef.current.value ? nameRef.current.value : props.grade.title,
                        image: imageRef.current.value ? imageRef.current.value : props.grade.body,
                    };
    try {
        const res = await axios.put('http://localhost:7000/api/grade', updatedGrade)
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
        const res = await axios.delete(`http://localhost:7000/api/grade/${id}`)
        props.setGradesData(res.data)
        }
    

    //***********return

    const footer = (

        <div  className="card flex flex-wrap gap-2 justify-content-center">

            <Button icon="pi pi-times" label="Delete" onClick={() => { deleteGrade(props.grade._id) }} />

            <Button label="Update" icon="pi pi-pencil" onClick={() => setVisible(true)} />

            {/* <GradesUpdate VisibleUpdatGrade={VisibleUpdatGrade} setVisibleUpdatGrade={setVisibleUpdatGrade} updateGrade={updateGrade} grade={props.grade} /> */}
            <UpdateGrade updateGrade={updateGrade} setVisible={setVisible}  visible={visible} grade={props.grade}/>


        </div>



    );
    const header = (
        <img alt="Card" src="/pictures/1.png" />
    );
    return (
        <>
            <div className="card flex flex-wrap gap-2 justify-content-center">

                <div className="card">
                    <Card backgroundimage={"./pictures/1.png"} title={props.grade.name} footer={footer} header={header}  className="md:w-25rem" >
                    

                        <p className="m-0">
                            {/* {props.grade.image} */}
                        </p>
                    </Card>
                </div>
            </div>
        </>

    )

}
    

export default Grade


