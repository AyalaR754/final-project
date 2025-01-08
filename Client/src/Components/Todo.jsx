import { useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import UpdateTodo from "./UpdateTodo"

import 'primeicons/primeicons.css';
import axios from 'axios'
    
const Todo = (props) => {
    const [visible, setVisible] = useState(false);


//******GET - getTodoById***** */
    const getTodoById = async () => {
        
        try {
            const Id = "675727cec84cae9608d85008"
            const res = await axios.get(`http://localhost:7000/todo/${Id}`)
            if (res.status === 200) {
                console.log(res.data);
            }
            
        } catch (e) {
            console.error(e)
        }
    }
    
    //**********updateTodo
    const updateTodo = async (titleRef,tagsRef,completedRef) => {
        props.todo.title= titleRef.current.value?titleRef.current.value:props.todo.title,
        props.todo.tags=tagsRef.current.value?tagsRef.current.value:props.todo.tagsRef,
        props.todo.completed=completedRef.current.value?completedRef.current.value:props.todo.completedRef

    try {
        const res = await axios.put('http://localhost:7000/todo', Todo)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            props.setTodosData(res.data)
        }
    } catch (e) {
        console.error(e)
    }
}
    
    //************delete
    const deleteTodo = async (id) => {
        const res = await axios.delete(`http://localhost:7000/todo/${id}`)
      
        props.setTodosData(res.data)
        }
    

    //***********return

    return (
        <>

            <br />

            <Card title={props.todo.title}>
                <p className="m-0">
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-times" aria-label="Filter" onClick={() => deleteTodo(props.todo._id)} />
                    <Button icon="pi pi-pencil" onClick={() => setVisible(true)} />
                    </div>
                    <UpdateTodo updateTodo={updateTodo} setVisible={setVisible}  visible={visible} todo={props.todo}/>
                </p>
            </Card>
            <br />
        </>
    )
}
    

export default Todo