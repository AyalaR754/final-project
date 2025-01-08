import { useEffect, useState } from "react"
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import axios from 'axios'
import Post from "./Post"
import CreatPost from "./CreatPost"


const Posts = () => {
    const [PostsData, setPostsData] = useState([])
    const [visibleCreatPost, setVisibleCreatPost] = useState(false);
    
    //******GET - getAllPosts***** */

    const getPosts = async () => {
        
        try {
            const res = await axios.get('http://localhost:7000/post')
            if (res.status === 200) {
                console.log(res.data);
                setPostsData(res.data)
            }
        } catch (e) {
            console.error(e)
        }     
    }

    //******POST - createPost***** */
    const createPost = async (titleRef,bodyRef) => {
        
        const newPost={
        title: titleRef.current.value?titleRef.current.value:" ",
        body:bodyRef.current.value?bodyRef.current.value:" ",
}
    
    try {
        const res = await axios.post('http://localhost:7000/post', newPost)
        if (res.status === 200) {
           
            console.log("res.data",res.data);
            getPosts()
        }
    }
     catch (e) {
        console.error(e)
    }
}
  

//********useEffect
    useEffect(() => {
        getPosts()
    },[])

    return (<>
        
        <Button icon="pi pi-plus" aria-label="Filter" onClick={() =>setVisibleCreatPost(true)} />
        <CreatPost createPost={createPost} setVisibleCreatPost={setVisibleCreatPost}  visibleCreatPost={visibleCreatPost}/>

        {
            PostsData ? 
                PostsData.sort((Post1,Post2)=>Post1._id-Post2._id).map((p) => { return <Post post={p} getPosts={getPosts} setPostsData={setPostsData}/> }) : null
        }
    </>)
}

export default Posts