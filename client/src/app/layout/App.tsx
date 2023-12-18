import {useState, useEffect} from "react";
import { Product } from "../../models/product";
import Catalog from "../../catalog/Catalog";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "./Header";
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
      <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProducts={addProducts}></Catalog>
      </Container>
       
      </>
  )
}

export default App
