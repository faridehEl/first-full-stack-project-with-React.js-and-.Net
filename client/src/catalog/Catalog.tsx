import { Button } from "@mui/material";
import { Product } from "../models/product";
import ProductList from "./ProductList";
interface Props{
    products : Product[];
    addProducts : ()=> void;
}
export default function Catalog({products , addProducts} : Props){
    return(
        <div>
            <ProductList products={products}></ProductList>
             <Button variant="contained" onClick={addProducts}> Add products</Button>
        </div>
    )
}