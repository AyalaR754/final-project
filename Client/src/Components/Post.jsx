import { useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import UpdatePost from "./UpdatePost"

import 'primeicons/primeicons.css';
import axios from 'axios'
    
const Post = (props) => {
    const [visible, setVisible] = useState(false);


//******GET - getPostById***** */
    const getPostById = async () => {
        
        try {
            const Id = "675727cec84cae9608d85008"
            const res = await axios.get(`http://localhost:7000/post/${Id}`)
            if (res.status === 200) {
                console.log(res.data);
            }
            
        } catch (e) {
            console.error(e)
        }
    }
    
    //**********updatePost
    const updatePost = async (titleRef,bodyRef) => {
        props.post.title= titleRef.current.value?titleRef.current.value:props.post.title,
        props.post.body=bodyRef.current.value?bodyRef.current.value:props.post.body
    try {
        const res = await axios.put('http://localhost:7000/post', Post)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            props.setPostsData(res.data)
        }
    } catch (e) {
        console.error(e)
    }
}
    
    //************delete
    const deletePost = async (id) => {
        const res = await axios.delete(`http://localhost:7000/post/${id}`)
      
        props.setPostsData(res.data)
        }
    

    //***********return

    return (
        <>

            <br />

            <Card title={props.post.title}>
                <p className="m-0">
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-times" aria-label="Filter" onClick={() => deletePost(props.post._id)} />
                    <Button icon="pi pi-pencil" onClick={() => setVisible(true)} />
                    </div>
                    <UpdatePost updatePost={updatePost} setVisible={setVisible}  visible={visible} post={props.post}/>
                </p>
            </Card>
            <br />
        </>
    )
}
    

export default Post