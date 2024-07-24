import { createContext, useReducer } from "react";

export const Postlist =createContext({
    postlist:[],
    addPost:()=>{},
    deletePost:()=>{}
})
const postListreducer=(currentValue,action)=>{
    return currentValue;
}
const PostListProvider =({children})=>{
    const [postlist,dispatchPostlist]=useReducer(postListreducer,DEFULAT_VALUE)
    const addPost =()=>{}
    const deletePost =()=>{console.log(`maanoj`)}
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
    hastag : ["blodd" ,"bloddy"]
},
{
    id:"2",
    title:"manoj is good baD DDDHJUIASdyh ",
    description:"gfsafddasfasdghjaksdfgh dasfgjasdjkf dasfjgh",
    reaction:"122",
    hastag :["blodd" ,"bloddy"],
    
},
]