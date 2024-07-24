const Content = (props)=>{
    return(<div className="card " style={{width: "40rem",height:"300px",padding:"20px",margin:"10px"}}>
       
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">{props.hastag}</a>
        </div>
      </div>)
      
}
export default Content ;
