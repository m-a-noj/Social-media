import { useContext } from "react";
import Content from "./Content";
import { Postlist } from "../store/contentData";

function DisplayContent (){
    const {postlist}=useContext(Postlist);
    return(<>
        {postlist.map((item)=><Content title={item.title}
        description={item.description} reaction={item.reaction} hastag={item.hastag} key={item.id}></Content>)}
        </>
    )
}
export default DisplayContent;