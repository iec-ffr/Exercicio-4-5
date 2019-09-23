import React from 'react'

export default(props) =>{
    return(
        <>
          <img src={require(`../assets/images/${props.productImage}`)} 
                        alt={props.productName}
                    />
        </>
    )
};