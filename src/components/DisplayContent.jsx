import { useContext } from "react";
import Content from "./Content";
import { Postlist } from "../store/contentData";

function DisplayContent (){
    const {postlist}=useContext(Postlist);
    return(<div className="cardcss">
        {postlist.map((item)=><Content props={item} key={item.id}></Content>)}
        </div>
    )
}
export default DisplayContent;