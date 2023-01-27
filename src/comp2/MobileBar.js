import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Button  from "@mui/material/Button";

let arr=[
    {name:'Home'},
    {name:'Categories'},
    {name:'Clearances'},
    {name:'My Account'},

]

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar(props) {


  return (
    // <React.Fragment>
    <div>
      <CssBaseline />
     
      <AppBar  position="fixed"  sx={{ top: 'auto', bottom: 0,backgroundColor: (0,0,0,"#F1c40f") }}>
        <Toolbar disableGutters >

          {arr.map( (data,i) =>{
    return(
        <Typography variant='outlined'  width={"100%"} >
            <Button className='fntSml' sx={{color:"black",display:'flex'}}>
                {data.name}
            </Button>   
        </Typography>
    )                          
          })}
          
          
        </Toolbar>
      </AppBar> 

    

      </div>
    // </React.Fragment>
  );
}