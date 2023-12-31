import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, colors } from "@mui/material";
import { Product } from "../models/product";
interface Props{
    product : Product;
}
export default function ProductCard({product} : Props){
    
    return(
        <Card>
          <CardHeader 
          avatar={
            <Avatar sx={{bgcolor:"#6156b1"}}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx:{fontWeight :'bold'}
          }}
          />
          
        <CardMedia
          sx={{ height: 140 , backgroundSize:"contain", bgcolor:"#cfe4ea" }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5">
            ${(product.price /100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ADD TO CARD</Button>
          <Button size="small">VIEW</Button>
        </CardActions>
      </Card>
    )
}