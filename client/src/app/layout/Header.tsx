import { AppBar, Switch, Typography } from "@mui/material";
interface Props{
    darkMode : boolean;
    handelChange : ()=> void;
}
export default function Header({darkMode , handelChange} : Props){
    return(
        <AppBar position="static" sx={{marginBottom:4}}>
            <Typography variant="h6">
                Re-Store
                <Switch checked= {darkMode} onChange={handelChange}/>
            </Typography>
        </AppBar>
    )
}