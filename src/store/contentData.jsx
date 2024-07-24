import { createContext, useReducer } from "react";

export const Postlist =createContext({
    postlist:[],
    addPost:()=>{},
    deletePost:(id)=>{}
})
const postListreducer=(currentValue,action)=>{
    let newpost = currentValue
    if (action.type === "DELETE_POST"){
        newpost = currentValue.filter((post)=>post.id !== action.payload.id)
    }
    return newpost;
}
const PostListProvider =({children})=>{
    const [postlist,dispatchPostlist]=useReducer(postListreducer,DEFULAT_VALUE)
    const addPost =()=>{}
    const deletePost =(id)=>{dispatchPostlist({type:"DELETE_POST",payload:
        {id}
    })}
    return(
        <Postlist.Provider value={{postlist,addPost,deletePost}}>
            {children}
        </Postlist.Provider>
    )
}
export default PostListProvider;
const DEFULAT_VALUE =[{
    id:"1",
    title:"manoj is good ",
    description:"gfasdghjaksdfgh dasfgjasdjkf dasfjgh",
    reaction:"12",
    hastag : ["#blodd" ,"#bloddy"]
},
{
    id:"2",
    title:"manoj is good baD DDDHJUIASdyh ",
    description:"gfsafddasfasdghjaksdfgh dasfgjasdjkf dasfjgh",
    reaction:"122",
    hastag :["#blodd" ,"#bloddy"]
},
]