import React,{useState,useEffect} from 'react';
import {Products as Prods} from '../api/Products'
import {useDispatch} from 'react-redux'
import fetch from 'isomorphic-unfetch'

export const Detail = (props) =>{

    const [product,setProduct] = useState({});
    
    const dispatch = useDispatch();

    function addItem(item){
        dispatch({type:'ADD_CART',item:item})
    }


    useEffect(() => {
        let p = Prods.getProductById(props.match.params.id)
        p.then(
            function(data){
                setProduct(data);
            }
        )
    },[])

    return(        
        <div className="container">            
            <h1>
                {product.name}  
            </h1>
            <h5>
                {product.description}
            </h5>

            <input type="button" className="btn btn-success" 
                    onClick={()=>addItem(product)} value="Add Cart"/>
        </div>
    )
    
}
    
    
