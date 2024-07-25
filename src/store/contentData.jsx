import { createContext, useReducer } from "react";

export const Postlist =createContext({
    postlist:[],
    addPost:()=>{},
    fetchPost:()=>{},
    deletePost:(id)=>{}
})
const postListreducer=(currentValue,action)=>{
    let newpost = currentValue
    if (action.type === "DELETE_POST"){
        newpost = currentValue.filter((post)=>post.id !== action.payload.id)
    }
    else if (action.type === "ADDPOST"){
        newpost = [action.payload, ...currentValue];
    }
    else if (action.type === "FETCH_POST"){
        newpost = action.payload.post;
  
    }
    return newpost;
}
const PostListProvider =({children})=>{
    const [postlist,dispatchPostlist]=useReducer(postListreducer,[])
    const addPost =(postTitle,postContent,noOfReaction, hashtag,userId)=>{
        dispatchPostlist({type :"ADDPOST",payload:{
    id:Date.now(),
    title: postTitle,
    description:postContent,
    reaction:noOfReaction,
    hastag :hashtag,
    userid: userId

        }})
    }
    const deletePost =(id)=>{dispatchPostlist({type:"DELETE_POST",payload:
        {id}
    })}
    const fetchPost =(post)=>{
       
        dispatchPostlist({action:"FETCH_POST",
            payload:{
                post
        
            } })
        

    }
    return(
        <Postlist.Provider value={{postlist,addPost,deletePost,fetchPost}}>
            {children}
        </Postlist.Provider>
    )}
   

export default PostListProvider;
