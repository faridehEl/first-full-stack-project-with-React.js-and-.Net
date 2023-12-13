import {useState, useEffect} from "react";
import { Product } from "../../models/product";
import Catalog from "../../catalog/Catalog";
import { Typography } from "@mui/material";
function App() {
const [products , setProducts]  = useState<Product[]>([]);
useEffect(()=>{
  fetch("http://localhost:5000/api/Products")
  .then( response =>response.json())
  .then( data => setProducts(data))
},[])
function addProducts(){
  setProducts(prevState=> [...prevState,
     {
      id: prevState.length + 101,
      name:"product" + (prevState.length+1),
    }
    ])
}

  return (
      <div>
        <Typography variant="h2">Products</Typography>
        <Catalog products={products} addProducts={addProducts}></Catalog>
      </div>
  )
}

export default App
