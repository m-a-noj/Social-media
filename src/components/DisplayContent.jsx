import { useContext, useEffect, useState } from "react";
import Content from "./Content";
import { Postlist } from "../store/contentData";

import Spinner from "./Spinner.jsx";


function DisplayContent (){
    const {postlist,fetchingStatus} = useContext(Postlist);
      
     
    return(<>
        {fetchingStatus && <Spinner></Spinner>}
        <div className="d-flex flex-column justify-content-center">
        {(postlist.map((item)=>( <Content props={item} key={item.id} ></Content>)))}
        
      
        
        </div>
        </>
    )
}
export default DisplayContent;