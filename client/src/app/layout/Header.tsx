import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const midleLink = [
    {title:'catalog' , path:'/catalog'},
    {title:'about' , path:'/about'},
    {title:'contact' , path:'/contact'},
]
const rightLink = [
    {title:'login' , path:'/login'},
    {title:'register' , path:'/register'},
]
interface Props{
    darkMode : boolean;
    handelChange : ()=> void;
}
const navStyles={
    textDecoration:'none', 
    color:'inherit',
    typography : 'h6',
    '&:hover': { color: 'grey.500'},
    '&.active' : {color:'common.black' }

}
export default function Header({darkMode , handelChange} : Props){
    return(
        <AppBar position="static" sx={{marginBottom:4}}>
            <Toolbar sx={{display:'flex' , justifyContent:'space-between'}}>
            <Box display={"flex"} alignItems={'center'}>
                <Typography variant="h6" component={NavLink} to={'/'} sx={navStyles}>
                Re-Store
                </Typography>
            <Switch checked= {darkMode} onChange={handelChange}/>
            </Box>
            
            <Box display={"flex"} alignItems={'center'}>
            <List sx={{display:'flex'}}>
                {midleLink.map(({title,path}) => (
                    <ListItem
                    component={NavLink}
                    to ={path}
                    key={path}
                    sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
               
            </List>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
            <IconButton color="inherit" size="large" edge="end" sx={{margin:1}}>
                <Badge badgeContent='2' color="secondary">
                    <ShoppingCart></ShoppingCart>
                </Badge>

            </IconButton>

            <List sx={{display:'flex'}}>
                {rightLink.map(({title,path}) => (
                    <ListItem
                    component={NavLink}
                    to ={path}
                    key={path}
                    sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
               
            </List>
            </Box>
            </Toolbar>
        </AppBar>
    )
}