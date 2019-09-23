import React from 'react'
import {Link} from "react-router-dom"

export default(props) =>{
   
    return(
            <>            
                <Link className="btn btn-outline-info" to={`/details/${props.productId}`}>Detalhes</Link>
            </>
        ) 
}



