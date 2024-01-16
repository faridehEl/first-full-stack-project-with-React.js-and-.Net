import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../app/models/product";

export default function productDetails(){
    const {id} = useParams<{id:string}>();
    const [product, setProduct] = useState<Product | null> (null);
    const [loading , setLoading] = useState (true);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/Products/${id}`)
        .then(response =>setProduct(response.data) )
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    },[id]);
    if(loading) return(<Typography>Is loading...</Typography>)
    if(!product) return(<Typography> There is no products !!!</Typography>)
    return(
        <Typography>
            {product.name}
        </Typography>
    )
}