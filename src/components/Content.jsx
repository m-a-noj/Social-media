import { MdDelete } from "react-icons/md";
const Content = ({props})=>{
    return(<div className="card " style={{width: "40rem",height:"300px",padding:"20px",margin:"10px"}}>
       
        <div className="card-body">
           <button type="button" style={{float:"right",padding:"0 5px 10px 5px",fontSize:"25px"}} className="btn btn-primary position-relative " onClick={()=>{console.log(`delete by ${props.id}`)}}>
           <MdDelete />
         </button>
        
                <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          {props.hastag.map((item)=>(<button type="button" className="btn btn-primary"style={{padding:"10px",margin:"6px"}} key={item}>{item}</button>))}
          <div style={{margin:"20px 0px"}} className="alert alert-primary" role="alert">
        {`This blog is review by ${props.reaction}`}
                </div>
        </div>
      </div>)
      
}
export default Content ;
