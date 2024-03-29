import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
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
        <Grid  container spacing={2}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width:'80%' }}></img>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">{product.name}</Typography>
                <Divider sx={{marginTop:1}}></Divider>
                <Typography variant="h6" sx={{marginTop:1, color:'#01579b'}}>${(product.price /100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name : </TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description : </TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type : </TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand : </TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock : </TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    )
}