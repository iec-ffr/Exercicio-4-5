import React,{Suspense,lazy} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {LoadProduct} from '../components/LoadProduct';


const ProductImage = lazy(() => import('../components/ProductImage'));

export const Cart = () =>{


    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function subItem(item){
        dispatch({type:'SUB_CART',item:item})
    }

    let k=0;
    return(
    <>
        <div className="row">
            {   
                
                cartItem.map(item => 

               


 <div key={k++} className="col-2 max-auto">
<h4>{item.name}</h4>

    <Suspense fallback={<LoadProduct />}>
        <ProductImage productImage={item.image} productName={item.name}/>
    </Suspense>

{/* <img src={require(`../assets/images/${item.image}`)}/> */}
<input type="button" 
        className="btn btn-danger btn-block"
        onClick={()=>subItem(item)} 
        value="Remove"/></div> 
                )
            }
        </div>
    </>
    )
}
