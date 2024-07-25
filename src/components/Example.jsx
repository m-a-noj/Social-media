import { useContext } from "react"
import { Postlist } from "../store/contentData"

function Example (){
  const {Postlist} =  useContext(Postlist)
    return (
        <div>
            {console.log (Postlist)}
        </div>
    )
}
export default Example;