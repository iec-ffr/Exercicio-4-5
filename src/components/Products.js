import React,{useState,useEffect,Suspense,lazy} from 'react';
import {Products as Prods} from '../api/Products'
import { LoadProduct } from './LoadProduct';

import {Link} from "react-router-dom"
const BtnDetails = lazy(() => import('./BtnDetails'));
const ProductImage = lazy(() => import('./ProductImage'));



export const Products = () => {

    function startUp(){
        
        let p = Prods.getProducts();
        
        p.then(
            function(data){
                setProduto(data.items);
            }
        )
    }

    useEffect(() => startUp())

    const [produto,setProduto] = useState([])

    return(
        <div className="row">
                
        {produto.map(p => 
            <div key={p.id} className="col-4">
                    <h5>{p.name}</h5> 
                    <Suspense fallback={<LoadProduct />}>
                         <ProductImage productImage={p.image} productName={p.name}/>
                     </Suspense>
                  
                    <h3>R$ {p.price.toFixed(2)}</h3>
 
                    

                     <Link className="btn btn-outline-info" to={`/details/${p.id}`}>Detalhes</Link>
                     {/* <BtnDetails/> */}
            </div>
        )}
        </div>
    )

}


