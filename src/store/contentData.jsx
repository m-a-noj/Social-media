import { createContext, useReducer,useState,useEffect } from "react";

export const Postlist =createContext({
    postlist:[],
    addPost:()=>{},
    fetchingStatus:Boolean,
    deletePost:(id)=>{}
})
const postListreducer=(currentValue,action)=>{
    let newpost = currentValue
    if (action.type === "DELETE_POST"){
        newpost = currentValue.filter((post)=>post.id !== action.payload.id)
    }
    else if (action.type === "FETCH_POST"){
        newpost = action.payload.posts;
        
  
    }
    else if (action.type === "ADDPOST"){
        console.log(action.payload.posts);
     
        newpost = [action.payload.posts, ...currentValue];
    }
   
    return newpost;
}
const PostListProvider =({children})=>{
    const [postlist,dispatchPostlist]=useReducer(postListreducer,[])
    const [fetchingStatus,setFatchingStatus] = useState(true);
    const addPost =(posts)=>{
        
        dispatchPostlist({type :"ADDPOST",payload:{
    
    posts

        }})
    }
    const deletePost =(id)=>{dispatchPostlist({type:"DELETE_POST",payload:
        {id}
    })}
    const fetchPost =(posts)=>{
       
        dispatchPostlist({type:"FETCH_POST",
            payload:{
                posts,
        
            } });
        

    };
    
    useEffect(
    ()=>{setFatchingStatus(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(list=>{ fetchPost(list.posts),
            setFatchingStatus(false);
        })
       
    },[Postlist])
    return(
        <Postlist.Provider value={{postlist,addPost,deletePost,fetchingStatus}}>
            {children}
        </Postlist.Provider>
    )}
   

export default PostListProvider;
