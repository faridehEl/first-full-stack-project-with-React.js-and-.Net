import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const midleLink = [
    {title:'catalog' , path:'/catalog'},
    {title:'about' , path:'/about'},
    {title:'contact' , path:'/contact'},
]
const rightLink = [
    {title:'login' , path:'/login'},
    {title:'about' , path:'/about'},
]
interface Props{
    darkMode : boolean;
    handelChange : ()=> void;
}
export default function Header({darkMode , handelChange} : Props){
    return(
        <AppBar position="static" sx={{marginBottom:4}}>
            <Toolbar>
            <Typography variant="h6">
                Re-Store
                <Switch checked= {darkMode} onChange={handelChange}/>
            </Typography>
            <List sx={{display:'flex'}}>
                {midleLink.map(({title,path}) => (
                    <ListItem
                    component={NavLink}
                    to ={path}
                    key={path}
                    sx={{color : 'inherit' , typography : 'h6'}}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
               
            </List>
            </Toolbar>
        </AppBar>
    )
}