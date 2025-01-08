import { useEffect, useState } from "react"
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import Todo from "./Todo"
import CreatTodo from "./CreatTodo"


const Todos = () => {
    const [TodosData, setTodosData] = useState([])
    const [visibleCreatTodo, setVisibleCreatTodo] = useState(false);
    
    //******GET - getAllTodos***** */

    const getTodos = async () => {
        
        try {
            const res = await axios.get('http://localhost:7000/todo')
            if (res.status === 200) {
                console.log(res.data);
                setTodosData(res.data)
            }
        } catch (e) {
            console.error(e)
        }     
    }

    //******Todo- createTodo***** */
    const createTodo = async (titleRef,tagsRef,completedRef) => {
        
        const newTodo={
        title: titleRef.current.value?titleRef.current.value:" ",
        tags:tagsRef.current.value?tagsRef.current.value:" ",
}
    
    try {
        const res = await axios.post('http://localhost:7000/todo', newTodo)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            getTodos()
        }
    }
     catch (e) {
        console.error(e)
    }
}
  

//********useEffect
    useEffect(() => {
        getTodos()
    },[])

    return (<>
        
        <Button icon="pi pi-plus" aria-label="Filter" onClick={() =>setVisibleCreatTodo(true)} />
        <CreatTodo createTodo={createTodo} setVisibleCreatTodo={setVisibleCreatTodo}  visibleCreatTodo={visibleCreatTodo}/>

        {
            TodosData ? 
            TodosData.sort((Todo1,Todo2)=>Todo1._id-Todo2._id).map((t) => { return <Todo Todo={t} getTodos={getTodos} setTodosData={setTodosData}/> }) : null
        }
    </>)
}

export default Todos