import { useContext } from "react";
import Content from "./Content";
import { Postlist } from "../store/contentData";
import Welcome from "./Welcome.jsx";
import Example from "./Example.jsx";


function DisplayContent (){
    const {postlist,fetchPost} = useContext(Postlist);
    const handleOnClick = ()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(list=> fetchPost(list.posts));
       
    }
    return(<div className="cardcss">
       
        {(postlist.length === 0? <Welcome handleOnClick={handleOnClick}></Welcome> : postlist.map((item)=>( <Content props={item} key={item.id} ></Content>)))}
        
      
        
        </div>
    )
}
export default DisplayContent;