import { AppBar, Typography } from "@mui/material";

export default function Header(){
    return(
        <AppBar position="static" sx={{marginBottom:4}}>
            <Typography variant="h6">
                Re-Store
            </Typography>
        </AppBar>
    )
}