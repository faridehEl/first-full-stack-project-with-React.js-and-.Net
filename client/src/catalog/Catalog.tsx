import { Product } from "../models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
export default function Catalog(){
    const [products , setProducts]  = useState<Product[]>([]);
useEffect(()=>{
  fetch("http://localhost:5000/api/Products")
  .then( response =>response.json())
  .then( data => setProducts(data))
},[])

    return(
        <div>
            <ProductList products={products}></ProductList>
             
        </div>
    )
}